import AssessmentQuestion from '../models/AssessmentQuestion.js';
import AssessmentResponse from '../models/AssessmentResponse.js';
import Profile from '../models/Profile.js';
import User from '../models/User.js';
import { getGeminiModel } from '../config/gemini.js';

/**
 * Helper to generate AI Diagnostic Report using Gemini
 */
const generateAIDiagnosticReport = async (studentName, formattedAnswers, domainPercentages) => {
  const topDomains = Object.entries(domainPercentages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([dom, pct]) => `${dom} (${pct}%)`)
    .join(', ');

  const sampleAnswerChoices = formattedAnswers
    .slice(0, 10)
    .map((a) => `Q: ${a.questionText} -> Picked: "${a.selectedOptionText}"`)
    .join('\n');

  const prompt = `You are an elite Senior Tech Career Psychologist and Talent Architect.
Analyze this engineering student's career diagnostic assessment:
Student Name: ${studentName || 'Engineer'}
Dominant Domain Affinities: ${topDomains}

Key Quiz Choices:
${sampleAnswerChoices}

Generate a deep, inspiring Executive Career Personality & Diagnostic Report.
Return ONLY a valid JSON object (no markdown backticks, no code fence, raw JSON only) matching this schema:
{
  "archetypeTitle": "e.g., Full-Stack Product Architect / Neural AI Strategist / Distributed Cloud Engineer",
  "archetypeSubtitle": "A 1-sentence punchy tagline defining their engineer personality",
  "workStyleTag": "e.g. 🛠️ Product Builder / 🧠 Deep Analytical Thinker / ⚡ Agile Shipper",
  "summary": "2-3 inspiring sentences explaining why their natural cognitive strengths and problem-solving style fit this archetype.",
  "keySuperpowers": [
    "Superpower 1 with brief reason",
    "Superpower 2 with brief reason",
    "Superpower 3 with brief reason"
  ],
  "idealWorkingStyle": "A short paragraph describing what team environment, pace, and projects they will thrive in most.",
  "recommendedCareerFocus": [
    "Career Role 1",
    "Career Role 2",
    "Career Role 3"
  ],
  "growthTips": [
    "Tip 1: Practical step to bridge skill gaps",
    "Tip 2: Capstone portfolio project strategy",
    "Tip 3: Engineering habit or competitive edge"
  ]
}`;

  try {
    const model = getGeminiModel();
    if (model) {
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
      return JSON.parse(cleaned);
    }
  } catch (err) {
    console.error('Gemini diagnostic report generation fallback triggered:', err.message);
  }

  // Graceful rule-based fallback
  const topDomain = Object.entries(domainPercentages).sort((a, b) => b[1] - a[1])[0]?.[0] || 'webDevelopment';
  const DOMAIN_DEFAULTS = {
    webDevelopment: {
      archetypeTitle: 'Full-Stack Product Architect',
      archetypeSubtitle: 'Translates human user needs into elegant, responsive end-to-end software solutions.',
      workStyleTag: '🛠️ Agile Product Shipper',
      summary: 'You demonstrate an intuitive understanding of user experience paired with backend data flow. You thrive when seeing ideas come to life on screen quickly and iterating rapidly.',
      keySuperpowers: [
        'User-Centric Architecture: Natural affinity for intuitive UI and responsive interfaces.',
        'Full-Cycle Execution: Able to connect visual components with robust REST APIs.',
        'Rapid Prototyping: Fast at transforming ideas into interactive proof-of-concepts.'
      ],
      idealWorkingStyle: 'High-growth product squads, collaborative hackathons, and dynamic tech environments where visual feedback is immediate.',
      recommendedCareerFocus: ['Frontend Developer', 'Full Stack Developer', 'Mobile Application Engineer'],
      growthTips: [
        'Master state management (Redux/Zustand) and TypeScript to level up your code maintainability.',
        'Build and deploy a full-stack SaaS product with live user auth and payments for your portfolio.',
        'Practice system design fundamentals to prepare for senior frontend and fullstack technical rounds.'
      ]
    },
    artificialIntelligence: {
      archetypeTitle: 'Neural Intelligence Synthesizer',
      archetypeSubtitle: 'Unlocks patterns hidden in vast data to engineer intelligent, autonomous systems.',
      workStyleTag: '🧠 Deep Analytical Problem-Solver',
      summary: 'You are naturally drawn to cognitive automation, machine learning models, and complex mathematical heuristics. You prefer deep, high-leverage algorithmic thinking over repetitive UI boilerplate.',
      keySuperpowers: [
        'Algorithmic Intuition: Strong grasp of neural optimization and data transformations.',
        'Experimentation Mindset: Methodical approach to training, evaluating, and fine-tuning models.',
        'Generative AI Integration: Quick to leverage modern LLM architectures.'
      ],
      idealWorkingStyle: 'AI Research labs, Data & ML platforms, and innovative startups pushing the boundaries of autonomous systems.',
      recommendedCareerFocus: ['AI / Machine Learning Engineer', 'Data Scientist', 'NLP & LLM Applications Engineer'],
      growthTips: [
        'Deepen your linear algebra, calculus, and PyTorch foundation with hands-on research paper implementations.',
        'Build an end-to-end RAG application with vector databases (Pinecone/Chroma) and deploy it.',
        'Participate in Kaggle competitions to refine your feature engineering and hyperparameter tuning skills.'
      ]
    }
  };

  return DOMAIN_DEFAULTS[topDomain] || DOMAIN_DEFAULTS.webDevelopment;
};

/**
 * @desc    Get assessment questions (Quick 10-Q mode or Full 25-Q mode)
 * @route   GET /api/assessment/questions
 * @access  Public
 */
export const getAssessmentQuestions = async (req, res, next) => {
  try {
    const { mode } = req.query;
    let query = {};
    if (mode === 'quick') {
      query.isQuickQuiz = true;
    }

    const questions = await AssessmentQuestion.find(query).sort({ questionNumber: 1 });

    res.status(200).json({
      success: true,
      count: questions.length,
      mode: mode === 'quick' ? 'Quick 10-Min Quiz (10 Questions)' : 'Comprehensive Assessment (25 Questions)',
      data: questions,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get latest assessment response with AI Diagnostic Report
 * @route   GET /api/assessment/latest
 * @access  Private
 */
export const getLatestAssessment = async (req, res, next) => {
  try {
    const latest = await AssessmentResponse.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    if (!latest) {
      return res.status(200).json({
        success: true,
        hasAssessment: false,
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      hasAssessment: true,
      data: latest,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Submit assessment answers, save complete response to MongoDB, generate Gemini AI report & update domain vector
 * @route   POST /api/assessment/submit
 * @access  Private
 */
export const submitAssessment = async (req, res, next) => {
  try {
    const { answers, quizMode = 'quick' } = req.body;

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please provide valid assessment answers.',
      });
    }

    // Fetch all questions from MongoDB to match weights and texts
    const questions = await AssessmentQuestion.find({});
    const questionsMap = new Map();
    questions.forEach((q) => questionsMap.set(q.questionNumber, q));

    const domainTotals = {
      webDevelopment: 0,
      artificialIntelligence: 0,
      dataScience: 0,
      cloudDevOps: 0,
      cybersecurity: 0,
      mobileDevelopment: 0,
      systemDesign: 0,
    };

    const formattedAuditAnswers = [];
    let answeredCount = 0;

    answers.forEach((ans) => {
      const q = questionsMap.get(ans.questionNumber);
      if (q) {
        const option = q.options.find((opt) => opt.optionId === ans.optionId);
        if (option) {
          answeredCount++;
          formattedAuditAnswers.push({
            questionNumber: q.questionNumber,
            questionText: q.questionText,
            selectedOptionId: option.optionId,
            selectedOptionText: option.text,
          });

          if (option.domainWeights) {
            Object.keys(option.domainWeights).forEach((domainKey) => {
              if (domainTotals[domainKey] !== undefined) {
                domainTotals[domainKey] += option.domainWeights[domainKey] || 0;
              }
            });
          }
        }
      }
    });

    // Calculate percentage breakdown
    const totalPoints = Object.values(domainTotals).reduce((a, b) => a + b, 0) || 1;
    const domainPercentages = {};
    Object.keys(domainTotals).forEach((key) => {
      domainPercentages[key] = Math.round((domainTotals[key] / totalPoints) * 100);
    });

    // Fetch user profile for AI personalization context
    const user = await User.findById(req.user._id);
    const studentName = user ? user.name : 'Student';

    // Generate AI Career Personality & Diagnostic Report via Gemini
    const aiDiagnosticReport = await generateAIDiagnosticReport(studentName, formattedAuditAnswers, domainPercentages);

    // 1. Save Full Assessment Response in MongoDB `assessmentresponses` collection
    const savedResponse = await AssessmentResponse.create({
      user: req.user._id,
      quizMode,
      totalQuestions: answeredCount,
      answers: formattedAuditAnswers,
      domainScores: domainTotals,
      domainPercentages,
      aiDiagnosticReport,
    });

    // 2. Update student's Profile domain interest scores in MongoDB `profiles` collection
    let profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      profile = new Profile({ user: req.user._id });
    }

    profile.domainInterestScores = domainTotals;
    await profile.save();

    // 3. Mark user assessment as completed in MongoDB `users` collection
    await User.findByIdAndUpdate(req.user._id, { hasCompletedAssessment: true });

    res.status(200).json({
      success: true,
      message: 'Assessment evaluated and AI diagnostic report generated successfully!',
      assessmentResponseId: savedResponse._id,
      answeredCount,
      rawScores: domainTotals,
      percentageBreakdown: domainPercentages,
      aiDiagnosticReport,
    });
  } catch (error) {
    next(error);
  }
};
