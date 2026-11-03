import React, { useState, useEffect } from 'react';
import { PlaySquare, BookOpen, Code2, ExternalLink, Video, Eye } from 'lucide-react';
import API from '../services/api';
import { getSkillLearningResources } from '../services/learningResources.js';

const TaskLearningResources = ({ skillName, taskTitle }) => {
  const [resources, setResources] = useState(() => getSkillLearningResources(skillName || taskTitle));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchLiveResources = async () => {
      const querySkill = skillName || taskTitle;
      if (!querySkill) return;

      setLoading(true);
      try {
        const res = await API.get(`/roadmap/resources?skill=${encodeURIComponent(querySkill)}`);
        if (isMounted && res.data.success && res.data.data && res.data.data.length > 0) {
          setResources(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching live YouTube resources:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchLiveResources();

    return () => {
      isMounted = false;
    };
  }, [skillName, taskTitle]);

  return (
    <div style={{ paddingTop: '10px', borderTop: '1px dashed var(--border-subtle)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Video size={13} color="var(--accent-rose)" />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            Live YouTube Courses & Official Docs:
          </span>
        </div>
        {loading && (
          <span style={{ fontSize: '0.7rem', color: 'var(--primary)', fontStyle: 'italic' }}>
            ⚡ Refreshing live view stats...
          </span>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
        {resources.map((res, rIdx) => (
          <a
            key={rIdx}
            href={res.url}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '12px 14px',
              minHeight: '68px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
            }}
            className="resource-card-hover"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden', flex: 1 }}>
              {res.thumbnail ? (
                <div style={{ position: 'relative', width: '64px', height: '44px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.08)' }}>
                  <img
                    src={res.thumbnail}
                    alt={res.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PlaySquare size={16} color="#ffffff" />
                  </div>
                </div>
              ) : res.type === 'YouTube' ? (
                <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <PlaySquare size={20} color="#f43f5e" />
                </div>
              ) : res.type === 'Practice' ? (
                <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Code2 size={20} color="#10b981" />
                </div>
              ) : (
                <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <BookOpen size={20} color="#06b6d4" />
                </div>
              )}

              <div style={{ overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', lineHeight: 1.25 }}>
                  {res.title}
                </span>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
                  {res.creator && <span style={{ fontWeight: 500 }}>{res.creator}</span>}
                  {res.views ? (
                    <span style={{ 
                      color: 'var(--accent-amber)', 
                      fontWeight: 700, 
                      background: 'rgba(245, 158, 11, 0.12)', 
                      padding: '1px 6px', 
                      borderRadius: '4px',
                      fontSize: '0.7rem'
                    }}>
                      👁️ {res.views}
                    </span>
                  ) : res.badge ? (
                    <span style={{ 
                      color: 'var(--text-muted)', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      padding: '1px 6px', 
                      borderRadius: '4px',
                      fontSize: '0.7rem'
                    }}>
                      {res.badge}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>

            <ExternalLink size={14} color="var(--text-muted)" style={{ flexShrink: 0, opacity: 0.8 }} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TaskLearningResources;
