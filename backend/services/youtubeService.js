import SkillResourceCache from '../models/SkillResourceCache.js';
import { getResourcesForSkill } from '../data/learningResources.js';

/**
 * Format view counts into human readable strings (e.g. 1.4M views, 850K views)
 */
const formatViews = (num) => {
  if (!num) return '';
  const n = parseInt(num, 10);
  if (isNaN(n)) return '';
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M views`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K views`;
  return `${n} views`;
};

/**
 * Fetch top dynamic learning resources for a skill (Bilingual: English + Hindi)
 */
export const fetchSkillResources = async (skillName) => {
  const skillKey = (skillName || '').toLowerCase().trim();
  if (!skillKey) return [];

  try {
    // 1. Check MongoDB Cache first (Cache valid for 7 days)
    const cached = await SkillResourceCache.findOne({ skillKey });
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    if (cached && cached.resources && cached.resources.length > 0 && cached.lastFetchedAt > sevenDaysAgo) {
      return cached.resources;
    }

    const apiKey = process.env.YOUTUBE_API_KEY;

    // 2. If YouTube API Key is available, query live YouTube Data API v3 using native fetch
    if (apiKey && apiKey.startsWith('AIzaSy')) {
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        `${skillName} full course tutorial`
      )}&type=video&order=viewCount&videoDuration=long&maxResults=4&key=${apiKey}`;

      const response = await fetch(searchUrl);
      const searchData = await response.json();
      const items = searchData?.items || [];

      if (items.length > 0) {
        const videoIds = items.map((it) => it.id?.videoId).filter(Boolean).join(',');

        // Fetch video statistics for exact live view counts
        let statsMap = {};
        if (videoIds) {
          try {
            const statsUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`;
            const statsRes = await fetch(statsUrl);
            const statsData = await statsRes.json();
            (statsData?.items || []).forEach((v) => {
              statsMap[v.id] = v.statistics?.viewCount;
            });
          } catch (e) {
            console.error('YouTube stats error:', e.message);
          }
        }

        const dynamicYoutubeResources = items.map((item) => {
          const vId = item.id?.videoId;
          const snippet = item.snippet || {};
          const views = formatViews(statsMap[vId]);

          return {
            title: snippet.title?.replace(/&#39;/g, "'")?.replace(/&quot;/g, '"')?.replace(/&amp;/g, '&'),
            url: `https://www.youtube.com/watch?v=${vId}`,
            type: 'YouTube',
            creator: snippet.channelTitle || 'Top Tech Educator',
            thumbnail: snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url || '',
            views: views,
            badge: views ? `👁️ ${views}` : '📺 YouTube Course',
          };
        });

        // Add 1 official documentation & 1 practice challenge link
        const baseCurated = getResourcesForSkill(skillName);
        const docRes = baseCurated.find((r) => r.type === 'Documentation');
        const practiceRes = baseCurated.find((r) => r.type === 'Practice');

        const combinedResources = [
          ...dynamicYoutubeResources.slice(0, 3),
          ...(docRes ? [docRes] : []),
          ...(practiceRes ? [practiceRes] : []),
        ];

        // Save to MongoDB Cache
        await SkillResourceCache.findOneAndUpdate(
          { skillKey },
          {
            skillKey,
            skillName,
            resources: combinedResources,
            lastFetchedAt: new Date(),
          },
          { upsert: true, new: true }
        );

        return combinedResources;
      }
    }
  } catch (error) {
    console.error(`Dynamic YouTube fetch error for "${skillName}":`, error.message);
  }

  // 3. Fallback to curated dictionary
  return getResourcesForSkill(skillName);
};
