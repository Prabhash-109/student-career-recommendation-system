import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAdvisor } from '../context/AdvisorContext';
import {
  Compass,
  Map,
  Sparkles,
  Bot,
  Award,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowRight,
  Layers,
  ChevronRight,
  Target,
  BookOpen
} from 'lucide-react';

const Dashboard = () => {
  const { user, profile } = useAuth();
  const {
    recommendations,
    fetchRecommendations,
    activeRoadmap,
    fetchActiveRoadmap,
    toggleRoadmapTask,
    setIsAIChatOpen,
  } = useAdvisor();

  useEffect(() => {
    fetchRecommendations();
    fetchActiveRoadmap();
  }, []);

  const topMatch = recommendations?.[0] || null;
  const completionPct = activeRoadmap?.completionPercentage || 0;
  const nextSkill = activeRoadmap?.nextRecommendedSkill || 'Select a skill to begin';

  return (
    <div className="container" style={{ maxWidth: '1180px', paddingTop: '36px', paddingBottom: '70px' }}>
      {/* Student Welcome Header */}
      <div className="glass-card" style={{ padding: '28px 32px', marginBottom: '32px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.12) 100%)', border: '1px solid var(--border-active)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="badge badge-emerald">Student Workspace</span>
              <span className="badge badge-primary">{profile?.academicYear || '3rd Year'} • {profile?.branch || 'CSE'}</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900 }}>
              Welcome back, <span className="text-gradient">{user?.name?.split(' ')[0]}</span> 👋
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '4px' }}>
              Track your career compatibility, missing skills, and adaptive learning milestones.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => setIsAIChatOpen(true)} className="btn btn-secondary">
              <Bot size={18} color="var(--primary)" /> Ask Career Copilot
            </button>
            <Link to="/assessment" className="btn btn-primary">
              <Sparkles size={18} /> {user?.hasCompletedAssessment ? 'Retake Quiz' : 'Take Career Quiz'}
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Stat Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '32px' }}>
        {/* Top Match */}
        <div className="glass-card glass-card-hover" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>TOP CAREER MATCH</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-amber)' }}>
              <Award size={18} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>
            {topMatch ? topMatch.careerRole.title : 'Calculating...'}
          </h3>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
            {topMatch ? `${topMatch.matchScore}% Match Score` : 'Complete skills setup'}
          </span>
        </div>

        {/* Roadmap Progress */}
        <div className="glass-card glass-card-hover" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>ROADMAP PROGRESS</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Map size={18} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>
            {activeRoadmap ? `${activeRoadmap.completedTasksCount} / ${activeRoadmap.totalTasks} Tasks` : '0 Tasks'}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
            <div style={{ flex: 1, height: '6px', background: 'var(--bg-secondary)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${completionPct}%`, background: 'var(--gradient-brand)', borderRadius: '3px' }} />
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)' }}>{completionPct}%</span>
          </div>
        </div>

        {/* Next Recommended Priority Skill */}
        <div className="glass-card glass-card-hover" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>NEXT PRIORITY SKILL</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
              <Target size={18} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8', marginBottom: '4px' }}>
            {nextSkill}
          </h3>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            High priority to bridge career gap
          </span>
        </div>

        {/* Selected Skills Total */}
        <div className="glass-card glass-card-hover" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)' }}>ACQUIRED SKILLS</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
              <Layers size={18} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>
            {profile?.skills?.length || 0} Skills Tagged
          </h3>
          <Link to="/profile-setup" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Manage skills matrix <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main Dashboard Two Column Split */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
        {/* Left Column: Top 3 Recommendations Preview */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Compass size={20} color="var(--primary)" /> Top Ranked Matches
            </h3>
            <Link to="/recommendations" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
              View All ({recommendations?.length || 0}) →
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recommendations?.slice(0, 3).map((rec, idx) => (
              <Link
                key={rec.careerRole._id}
                to="/recommendations"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: idx === 0 ? 'var(--accent-amber)' : 'var(--text-muted)' }}>
                      #{idx + 1}
                    </span>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {rec.careerRole.title}
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {rec.matchedSkillsCount} of {rec.totalRequiredSkillsCount} skills matched
                  </span>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: rec.matchScore >= 80 ? 'var(--accent-emerald)' : 'var(--primary)' }}>
                    {rec.matchScore}%
                  </span>
                  <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600 }}>MATCH</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Active Roadmap Quick Action Checklist */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Map size={20} color="var(--accent-emerald)" /> Roadmap Milestones
            </h3>
            <Link to="/roadmap" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
              Open Full Roadmap →
            </Link>
          </div>

          {!activeRoadmap ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '14px' }}>
                No active roadmap. Select your target role to start your learning journey.
              </p>
              <Link to="/recommendations" className="btn btn-primary btn-sm">
                Generate Roadmap
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Show first 4 tasks from stage 1 and stage 2 */}
              {activeRoadmap.stages?.flatMap((s) => s.tasks).slice(0, 4).map((task) => (
                <div
                  key={task.taskId}
                  onClick={() => toggleRoadmapTask(task.taskId, activeRoadmap._id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: task.isCompleted ? 'rgba(16, 185, 129, 0.08)' : 'var(--bg-secondary)',
                    border: task.isCompleted ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                  }}
                >
                  <CheckCircle2
                    size={20}
                    color={task.isCompleted ? 'var(--accent-emerald)' : 'var(--text-muted)'}
                  />
                  <div style={{ flex: 1 }}>
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: task.isCompleted ? 'var(--text-muted)' : 'var(--text-primary)',
                        textDecoration: task.isCompleted ? 'line-through' : 'none',
                      }}
                    >
                      {task.title}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {task.skillName} • ~{task.estimatedHours} hrs
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
