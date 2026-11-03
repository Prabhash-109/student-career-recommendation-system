import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Circle,
  Calendar,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  CheckCheck,
  BookOpen
} from 'lucide-react';
import TaskLearningResources from './TaskLearningResources';

const RoadmapTimeline = ({ roadmap, onToggleTask, onDurationChange, isUpdating }) => {
  const [expandedStages, setExpandedStages] = useState({ 1: true, 2: true, 3: true, 4: true });

  if (!roadmap) {
    return (
      <div className="glass-card" style={{ padding: '36px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>No active roadmap found. Generate one from Career Matches.</p>
      </div>
    );
  }

  const {
    careerTitle,
    timelineDuration,
    stages = [],
    totalTasks,
    completedTasksCount,
    completionPercentage,
    nextRecommendedSkill,
  } = roadmap;

  const toggleStageAccordion = (stageNum) => {
    setExpandedStages((prev) => ({
      ...prev,
      [stageNum]: !prev[stageNum],
    }));
  };

  const handleTaskClick = async (taskId) => {
    const updated = await onToggleTask(taskId, roadmap._id);
    if (updated && updated.completionPercentage === 100) {
      // Fire celebration confetti!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Banner: Progress & Duration Switcher */}
      <div className="glass-card" style={{ padding: '24px', border: '1px solid var(--border-active)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="badge badge-primary">Personalized Learning Roadmap</span>
              <span className="badge badge-emerald">{stages.length} Structured Stages</span>
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{careerTitle}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Adaptive study plan personalized to your current skill proficiencies.
            </p>
          </div>

          {/* Duration Toggle Switcher */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Timeline Pacing:</span>
            <div className="toggle-group">
              {[
                { label: '⚡ 3M Fast Track', value: '3 Months (Fast-Track)' },
                { label: '🎯 6M Standard', value: '6 Months (Standard)' },
                { label: '📚 12M Deep', value: '12 Months (Comprehensive)' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  disabled={isUpdating}
                  onClick={() => onDurationChange(opt.value)}
                  className={`toggle-item ${timelineDuration === opt.value ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Progress Bar */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.875rem' }}>
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
              Overall Milestone Completion: {completedTasksCount} / {totalTasks} Tasks
            </span>
            <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.1rem' }}>
              {completionPercentage}%
            </span>
          </div>

          <div style={{ height: '12px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-full)', overflow: 'hidden', border: '1px solid var(--border-subtle)', position: 'relative' }}>
            <div
              style={{
                height: '100%',
                width: `${completionPercentage}%`,
                background: 'var(--gradient-brand)',
                borderRadius: 'var(--radius-full)',
                transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 0 12px rgba(99, 102, 241, 0.6)',
              }}
            />
          </div>
        </div>

        {/* Next Recommended Skill Highlight Pill */}
        {nextRecommendedSkill && (
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.25)', padding: '10px 16px', borderRadius: 'var(--radius-md)' }}>
            <Sparkles size={18} color="var(--primary)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              <strong>Immediate Next Priority:</strong> Focus on mastering <span style={{ color: '#818cf8', fontWeight: 700 }}>{nextRecommendedSkill}</span>
            </span>
          </div>
        )}
      </div>

      {/* Structured Roadmap Stages Accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {stages.map((stage) => {
          const isExpanded = expandedStages[stage.stageNumber] ?? true;
          const stageDone = stage.tasks.every((t) => t.isCompleted);

          return (
            <div
              key={stage.stageNumber}
              className="glass-card"
              style={{
                overflow: 'hidden',
                borderLeft: stageDone ? '4px solid var(--accent-emerald)' : '4px solid var(--primary)',
              }}
            >
              {/* Stage Header Accordion Toggle */}
              <div
                onClick={() => toggleStageAccordion(stage.stageNumber)}
                style={{
                  padding: '18px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  background: 'var(--bg-secondary)',
                  userSelect: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: stageDone ? 'var(--accent-emerald-light)' : 'var(--primary-light)',
                      color: stageDone ? 'var(--accent-emerald)' : 'var(--primary)',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                    }}
                  >
                    {stageDone ? <CheckCheck size={18} /> : stage.stageNumber}
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{stage.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Focus: {stage.focusArea} • Estimated {stage.durationWeeks} Weeks
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className={`badge ${stageDone ? 'badge-emerald' : 'badge-primary'}`}>
                    {stage.tasks.filter((t) => t.isCompleted).length}/{stage.tasks.length} Completed
                  </span>
                  {isExpanded ? <ChevronUp size={20} color="var(--text-muted)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                </div>
              </div>

              {/* Stage Tasks List */}
              {isExpanded && (
                <div style={{ padding: '18px 24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {stage.tasks.map((task) => (
                    <div
                      key={task.taskId}
                        onClick={() => handleTaskClick(task.taskId)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '14px',
                          padding: '16px 20px',
                          borderRadius: 'var(--radius-md)',
                          background: task.isCompleted ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-card)',
                          border: task.isCompleted ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {/* Checkbox Icon */}
                        <button
                          type="button"
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            marginTop: '2px',
                            color: task.isCompleted ? 'var(--accent-emerald)' : 'var(--text-muted)',
                          }}
                          title={task.isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}
                        >
                          {task.isCompleted ? <CheckCircle2 size={22} /> : <Circle size={22} />}
                        </button>

                        {/* Task Content */}
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                            <span
                              style={{
                                fontWeight: 700,
                                fontSize: '0.95rem',
                                color: task.isCompleted ? 'var(--text-muted)' : 'var(--text-primary)',
                                textDecoration: task.isCompleted ? 'line-through' : 'none',
                              }}
                            >
                              {task.title}
                            </span>

                            <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                              {task.skillName}
                            </span>

                            {task.isAlreadyKnown && (
                              <span className="badge badge-cyan" style={{ fontSize: '0.68rem' }}>
                                ⚡ Mastered from Profile
                              </span>
                            )}
                          </div>

                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '8px' }}>
                            {task.description}
                          </p>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Clock size={13} /> ~{task.estimatedHours} hrs study
                            </span>
                          </div>

                          {/* Live Dynamic YouTube & Docs Learning Resources */}
                          <TaskLearningResources skillName={task.skillName} taskTitle={task.title} />
                        </div>
                      </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapTimeline;
