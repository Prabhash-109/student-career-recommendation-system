import { getGeminiModel } from '../config/gemini.js';
import Profile from '../models/Profile.js';
import CareerRole from '../models/CareerRole.js';
import Roadmap from '../models/Roadmap.js';

/**
 * @desc    Chat with personalized AI Career Assistant
 * @route   POST /api/ai/chat
 * @access  Private
 */
export const chatWithAICareerAdvisor = async (req, res, next) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a message for the AI career advisor.',
      });
    }

    // Retrieve Student Context
    const profile = await Profile.findOne({ user: req.user._id });
    const activeRoadmap = await Roadmap.findOne({ user: req.user._id, status: 'Active' });

    let targetRoleData = null;
    if (profile?.targetCareerRole) {
      targetRoleData = await CareerRole.findOne({ title: profile.targetCareerRole });
    }

    // Build context summary
    const studentSkills = (profile?.skills || [])
      .map((s) => `${s.name} (${s.proficiency})`)
      .join(', ') || 'None specified yet';

    const academicInfo = profile
      ? `${profile.branch || 'Engineering'}, ${profile.academicYear || 'Student'} (CGPA: ${profile.cgpa || 'N/A'})`
      : 'Student';

    const targetCareer = profile?.targetCareerRole || activeRoadmap?.careerTitle || 'Software Developer';
    const completionPct = activeRoadmap ? `${activeRoadmap.completionPercentage}%` : '0%';
    const nextSkill = activeRoadmap?.nextRecommendedSkill || 'Core fundamentals';

    const systemPrompt = `You are a friendly, intelligent, and natural tech career mentor chatting with a university student named ${req.user.name}.

STUDENT CONTEXT:
- Academic: ${academicInfo}
- Known Skills: ${studentSkills}
- Target Career Path: ${targetCareer}
- Roadmap Progress: ${completionPct}
- Next Milestone: ${nextSkill}

CONVERSATION RULES:
1. Talk like a real, smart human mentor—friendly, relaxed, and concise. Avoid robotic speeches, repetitive disclaimers, or unneeded bullet points for simple questions.
2. For casual questions or small talk (e.g., "what are you doing?", "how are you?", "hi"), reply conversationally in 1-2 natural sentences like a real mentor.
3. Use engaging and natural emojis (e.g., 🚀, 💡, ⚡, 🎯, 💻, ✨, 🔥, 🛠️) in your responses to make the chat lively and motivating!
4. When presenting project titles or sections, use clean bold titles (e.g. **1. Project Title 🚀**) rather than Markdown hash symbols (avoid #, ##, ###).
5. When the student asks for technical advice, project ideas, roadmaps, or interview prep, give sharp, high-value, and practical advice tailored to their skills.
6. Keep answers readable, clean, and directly answering what was asked without unnecessary fluff.`;

    let gemini = getGeminiModel('gemini-3.8-flash') || getGeminiModel('gemini-1.5-flash');

    if (gemini && process.env.GEMINI_API_KEY) {
      try {
        const fullPrompt = `${systemPrompt}\n\nStudent: "${message}"\nMentor:`;
        const result = await gemini.generateContent(fullPrompt);
        const responseText = result.response.text();

        return res.status(200).json({
          success: true,
          reply: responseText,
          provider: 'Google Gemini AI (3.8 Flash)',
        });
      } catch (geminiError) {
        console.error('❌ Gemini 3.8 API Error:', geminiError.message || geminiError);
      }
    }

    // Fallback Smart Conversational Response Engine
    let fallbackReply = '';
    const lower = message.toLowerCase().trim();

    // 1. Natural Greeting handling
    if (['hi', 'hello', 'hey', 'hii', 'hola', 'namaste', 'good morning', 'good evening'].includes(lower) || lower.startsWith('hi ') || lower.startsWith('hello ')) {
      fallbackReply = `Hey **${req.user?.name?.split(' ')[0] || 'there'}**! 👋 Great to see you!\n\n` +
        `I am your personalized **AI Career Advisor**. I have your active profile details loaded in memory.\n\n` +
        `Here are a few quick things we can do right now:\n` +
        `• 💡 **"Suggest capstone projects"** to level up your resume\n` +
        `• 📅 **"Make me a study plan"** to master your next skill\n` +
        `• 🎯 **"What should I learn next?"** based on your skill gap\n` +
        `• 💼 **"Interview questions for ${targetCareer}"**\n\n` +
        `What would you like to explore today?`;
    } else if (lower.includes('project') || lower.includes('build')) {
      fallbackReply = `Here are 2 high-impact portfolio projects tailored for your goal of becoming a **${targetCareer}** based on your current skills (${studentSkills}):\n\n` +
        `1. **Full-Stack Intelligent Analytics Platform**:\n` +
        `   - **Tech Stack:** React, Tailwind CSS, Node.js, Express, MongoDB\n` +
        `   - **Key Feature:** Real-time data visualization with interactive filters, JWT authentication, and automated export reports.\n\n` +
        `2. **Collaborative Task & Milestone Platform**:\n` +
        `   - **Tech Stack:** Next.js, TypeScript, PostgreSQL / MongoDB, WebSocket\n` +
        `   - **Key Feature:** Live collaborative boards, drag-and-drop kanban, and role-based permissions.\n\n` +
        `💡 *Immediate Next Priority:* Master **${nextSkill}** to build this with confidence!`;
    } else if (lower.includes('study plan') || lower.includes('30 day') || lower.includes('schedule')) {
      fallbackReply = `Here is your customized **30-Day Accelerated Study Plan** for **${targetCareer}**:\n\n` +
        `• **Week 1 (Foundations & Level Up):** Deep dive into core concepts and master **${nextSkill}**.\n` +
        `• **Week 2 (Architecture & APIs):** Build 2 mini-projects focusing on clean code and robust error handling.\n` +
        `• **Week 3 (Integration & State):** Connect complex workflows, authentication, and database indexing.\n` +
        `• **Week 4 (Capstone & Deployment):** Deploy to production, write comprehensive README documentation, and practice technical interview questions!`;
    } else {
      fallbackReply = `Based on your profile as a **${academicInfo}** aiming for **${targetCareer}**, you are currently at **${completionPct}** on your learning roadmap.\n\n` +
        `Your most critical next step is to master **${nextSkill}**. This will directly bridge your skill gap for top industry roles.\n\n` +
        `Would you like recommended project ideas, interview preparation tips, or curated learning resources for this milestone?`;
    }

    return res.status(200).json({
      success: true,
      reply: fallbackReply,
      provider: 'Intelligent Career Engine (Smart Fallback)',
    });
  } catch (error) {
    next(error);
  }
};
