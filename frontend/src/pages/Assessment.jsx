import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Compass,
  Layers,
  Brain,
  Server,
  Cloud,
  Shield,
  Smartphone,
  Eye,
  BarChart,
  Send,
  Sliders,
  Zap,
  Target,
  Lightbulb,
  RotateCcw
} from 'lucide-react';

const ICON_MAP = {
  Layout: Layers,
  Server: Server,
  Brain: Brain,
  Cloud: Cloud,
  Shield: Shield,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  TrendingUp: BarChart,
  Lock: Shield,
  Cpu: Server,
  Layers: Layers,
  Percent: BarChart,
  Code: Server,
  Palette: Layers,
  Terminal: Server,
  Eye: Eye,
  PieChart: BarChart,
  Activity: Sparkles,
  Database: Server,
  Monitor: Layers,
  FileText: Layers,
  Send: Send,
};

const Assessment = () => {
  const navigate = useNavigate();
  const [quizMode, setQuizMode] = useState('quick'); // 'quick' | 'full'
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionNumber]: selectedOptionId }
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState(null);
  const [retakeMode, setRetakeMode] = useState(false);

  // Check if user already has a saved assessment report
  useEffect(() => {
    const fetchLatestAssessment = async () => {
      try {
        const res = await API.get('/assessment/latest');
        if (res.data.success && res.data.hasAssessment && res.data.data) {
          setEvaluationResult({
            percentageBreakdown: res.data.data.domainPercentages,
            aiDiagnosticReport: res.data.data.aiDiagnosticReport,
            answeredCount: res.data.data.totalQuestions,
            quizMode: res.data.data.quizMode,
          });
        }
      } catch (err) {
        console.error('Error fetching latest assessment:', err);
      }
    };
    fetchLatestAssessment();
  }, []);

  // Fetch assessment questions based on quiz mode
  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const res = await API.get(`/assessment/questions?mode=${quizMode}`);
        if (res.data.success) {
          setQuestions(res.data.data || []);
          setCurrentIndex(0);
          setAnswers({});
        }
      } catch (err) {
        console.error('Error fetching questions:', err);
      } finally {
        setLoading(false);
      }
    };
    if (!evaluationResult || retakeMode) {
      fetchQuestions();
    }
  }, [quizMode, retakeMode]);

  const currentQ = questions[currentIndex];
  const progressPct = questions.length > 0 ? Math.round(((currentIndex + 1) / questions.length) * 100) : 0;

  const handleSelectOption = (optionId) => {
    if (!currentQ) return;
    setAnswers({
      ...answers,
      [currentQ.questionNumber]: optionId,
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmitQuiz = async () => {
    const formattedAnswers = Object.keys(answers).map((qNum) => ({
      questionNumber: Number(qNum),
      optionId: answers[qNum],
    }));

    if (formattedAnswers.length < questions.length) {
      alert('Please answer all questions before submitting your assessment.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await API.post('/assessment/submit', {
        answers: formattedAnswers,
        quizMode,
      });
      if (res.data.success) {
        setEvaluationResult(res.data);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch (err) {
      console.error('Error submitting assessment:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '840px', paddingTop: '40px', paddingBottom: '70px' }}>
      {/* Quiz Header & Mode Toggle */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 'var(--radius-full)', background: 'var(--primary-light)', border: '1px solid var(--border-active)', marginBottom: '14px' }}>
          <Compass size={16} color="var(--primary)" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8' }}>Technical Interest & Personality Diagnostic</span>
        </div>

        <h1 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Career Affinity Assessment</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '4px' }}>
          Discover your natural domain strengths across Web, AI/ML, Cloud, Security & Data.
        </p>

        {/* Quick vs Full Quiz Toggle */}
        {!evaluationResult && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div className="toggle-group">
              <button
                type="button"
                onClick={() => setQuizMode('quick')}
                className={`toggle-item ${quizMode === 'quick' ? 'active' : ''}`}
              >
                ⚡ Quick 10-Min Quiz (10 Questions)
              </button>
              <button
                type="button"
                onClick={() => setQuizMode('full')}
                className={`toggle-item ${quizMode === 'full' ? 'active' : ''}`}
              >
                🎯 Comprehensive Assessment (25 Questions)
              </button>
            </div>
          </div>
        )}
      </div>

      {loading ? (
        <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)' }}>Loading interactive assessment questions...</p>
        </div>
      ) : evaluationResult ? (
        /* Rich AI Personality & Executive Diagnostic Report */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Hero Archetype Card */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              border: '1.5px solid var(--border-active)',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, var(--bg-card) 100%)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'var(--primary-light)', border: '1px solid var(--border-active)' }}>
                <Sparkles size={16} color="var(--primary)" />
                <span style={{ fontSize: '0.825rem', fontWeight: 800, color: 'var(--primary)' }}>Gemini AI Executive Diagnostic</span>
              </div>

              {evaluationResult.aiDiagnosticReport?.workStyleTag && (
                <span className="badge badge-emerald" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                  {evaluationResult.aiDiagnosticReport.workStyleTag}
                </span>
              )}
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '6px', color: 'var(--text-primary)' }}>
              {evaluationResult.aiDiagnosticReport?.archetypeTitle || 'Full-Stack Product Architect'}
            </h2>
            <p style={{ color: 'var(--primary)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px' }}>
              {evaluationResult.aiDiagnosticReport?.archetypeSubtitle || 'Translates human user needs into elegant, high-impact digital solutions.'}
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6, maxWidth: '720px', marginBottom: '24px' }}>
              {evaluationResult.aiDiagnosticReport?.summary || 'Your choices indicate a natural aptitude for user-facing architecture, clean interfaces, and agile software development.'}
            </p>

            {/* Recommended Target Roles Pills */}
            {evaluationResult.aiDiagnosticReport?.recommendedCareerFocus?.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>TOP ALIGNED CAREERS:</span>
                {evaluationResult.aiDiagnosticReport.recommendedCareerFocus.map((role) => (
                  <span key={role} className="badge badge-primary" style={{ fontSize: '0.825rem', fontWeight: 700 }}>
                    🎯 {role}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Key Superpowers & Cognitive Strengths */}
          {evaluationResult.aiDiagnosticReport?.keySuperpowers?.length > 0 && (
            <div className="glass-card" style={{ padding: '28px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <Zap size={20} color="var(--accent-amber)" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Core Cognitive Superpowers</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '14px' }}>
                {evaluationResult.aiDiagnosticReport.keySuperpowers.map((power, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--bg-secondary)',
                      padding: '16px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      gap: '12px',
                    }}
                  >
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent-emerald-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" />
                    </div>
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: 500 }}>
                      {power}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ideal Working Environment & Team Fit */}
          {evaluationResult.aiDiagnosticReport?.idealWorkingStyle && (
            <div className="glass-card" style={{ padding: '24px 28px', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--accent-cyan-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Target size={22} color="var(--accent-cyan)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '4px' }}>Optimal Team & Project Environment</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  {evaluationResult.aiDiagnosticReport.idealWorkingStyle}
                </p>
              </div>
            </div>
          )}

          {/* Domain Affinity Breakdown Bars */}
          <div className="glass-card" style={{ padding: '28px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <BarChart size={20} color="var(--primary)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Domain Strength Distribution Vector</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', textAlign: 'left' }}>
              {Object.entries(evaluationResult.percentageBreakdown || {}).map(([key, val]) => (
                <div key={key} style={{ background: 'var(--bg-secondary)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', fontWeight: 600, marginBottom: '6px' }}>
                    <span style={{ textTransform: 'capitalize', color: 'var(--text-primary)' }}>
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span style={{ color: 'var(--primary)', fontWeight: 800 }}>{val}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${val}%`, background: 'var(--gradient-brand)', borderRadius: '3px', transition: 'width 0.6s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Growth Recommendations */}
          {evaluationResult.aiDiagnosticReport?.growthTips?.length > 0 && (
            <div className="glass-card" style={{ padding: '28px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Lightbulb size={20} color="var(--accent-amber)" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>AI Strategic Growth Recommendations</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {evaluationResult.aiDiagnosticReport.growthTips.map((tip, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>Recommendation #{idx + 1}:</strong>
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action CTA Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginTop: '12px' }}>
            <button
              type="button"
              onClick={() => {
                setEvaluationResult(null);
                setRetakeMode(true);
                setAnswers({});
                setCurrentIndex(0);
              }}
              className="btn btn-secondary"
            >
              <RotateCcw size={16} /> Retake Assessment Quiz
            </button>

            <button onClick={() => navigate('/recommendations')} className="btn btn-primary btn-lg">
              View Matched Career Recommendations <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* Question Card */
        currentQ && (
          <div className="glass-card" style={{ padding: '32px', border: '1px solid var(--border-medium)' }}>
            {/* Question Progress Bar */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '8px' }}>
                <span>QUESTION {currentIndex + 1} OF {questions.length} • {currentQ.category}</span>
                <span>{progressPct}% COMPLETED</span>
              </div>
              <div style={{ height: '8px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${progressPct}%`, background: 'var(--gradient-brand)', transition: 'width 0.3s ease' }} />
              </div>
            </div>

            {/* Question Title */}
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.35, marginBottom: '6px' }}>
                {currentQ.questionText}
              </h2>
              {currentQ.subtitle && (
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{currentQ.subtitle}</p>
              )}
            </div>

            {/* Options List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentQ.questionNumber] === opt.optionId;
                const IconComponent = ICON_MAP[opt.icon] || Sparkles;

                return (
                  <div
                    key={opt.optionId}
                    onClick={() => handleSelectOption(opt.optionId)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-md)',
                      background: isSelected ? 'var(--primary-light)' : 'var(--bg-secondary)',
                      border: isSelected ? '1.5px solid var(--border-active)' : '1px solid var(--border-subtle)',
                      boxShadow: isSelected ? 'var(--primary-glow)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      userSelect: 'none',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isSelected ? 'var(--primary)' : 'var(--bg-tertiary)',
                        color: isSelected ? '#ffffff' : 'var(--text-muted)',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent size={18} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: isSelected ? 800 : 500,
                        color: 'var(--text-primary)',
                        flex: 1,
                        lineHeight: 1.4,
                      }}
                    >
                      {opt.text}
                    </span>

                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: isSelected ? '6px solid var(--primary)' : '2px solid var(--text-muted)',
                        background: 'transparent',
                        flexShrink: 0,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                type="button"
                disabled={currentIndex === 0}
                onClick={handlePrev}
                className="btn btn-secondary"
                style={{ visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
              >
                <ArrowLeft size={16} /> Previous
              </button>

              {currentIndex === questions.length - 1 ? (
                <button
                  type="button"
                  disabled={!answers[currentQ.questionNumber] || submitting}
                  onClick={handleSubmitQuiz}
                  className="btn btn-primary"
                >
                  {submitting ? '🧠 Gemini AI Synthesizing Report...' : 'Submit & Generate AI Diagnostic'} <Sparkles size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!answers[currentQ.questionNumber]}
                  onClick={handleNext}
                  className="btn btn-primary"
                >
                  Next Question <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Assessment;
