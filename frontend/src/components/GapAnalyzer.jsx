import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import TaskLearningResources from './TaskLearningResources';

const GapAnalyzer = ({ matchAnalysis, careerRole, loading = false }) => {
  const [filter, setFilter] = useState('All');
  const [expandedSkill, setExpandedSkill] = useState(null);

  if (loading) {
    return (
      <div className="glass-card" style={{ padding: '50px', textAlign: 'center' }}>
        <div style={{ width: '36px', height: '36px', border: '3px solid rgba(99, 102, 241, 0.2)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 14px' }} />
        <p style={{ color: 'var(--text-secondary)' }}>Analyzing skill gaps and industry match matrix for {careerRole?.title || 'role'}...</p>
      </div>
    );
  }

  if (!matchAnalysis) {
    return (
      <div className="glass-card" style={{ padding: '30px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Select a career role to view the skill gap breakdown.</p>
      </div>
    );
  }

  const { matchedSkills = [], missingSkills = [], matchScore, skillMatchScore } = matchAnalysis;

  // Filter skills
  const filterList = (list) => {
    if (filter === 'All') return list;
    return list.filter((s) => s.importance === filter);
  };

  const filteredMatched = filterList(matchedSkills);
  const filteredMissing = filterList(missingSkills);

  const toggleSkillResources = (skillName) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Overview Metric Banner */}
      <div className="glass-card" style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)', border: '1px solid var(--border-active)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '6px' }}>Skill Gap Diagnostic</span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Target Role: {careerRole?.title}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
              You currently possess <strong>{matchedSkills.length}</strong> of the <strong>{matchedSkills.length + missingSkills.length}</strong> core industry requirements.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ textAlign: 'center', background: 'var(--bg-secondary)', padding: '12px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>{matchedSkills.length}</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Acquired</span>
            </div>
            <div style={{ textAlign: 'center', background: 'var(--bg-secondary)', padding: '12px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-rose)' }}>{missingSkills.length}</span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Missing Gap</span>
            </div>
          </div>
        </div>
      </div>

      {/* Importance Filter Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Filter Importance:</span>
        <div className="toggle-group">
          {['All', 'Critical', 'Core', 'GoodToHave'].map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setFilter(lvl)}
              className={`toggle-item ${filter === lvl ? 'active' : ''}`}
            >
              {lvl === 'GoodToHave' ? 'Good to Have' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Side by Side Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {/* Acquired Skills Card */}
        <div className="glass-card" style={{ padding: '20px', borderTop: '4px solid var(--accent-emerald)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <CheckCircle2 size={20} color="var(--accent-emerald)" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Acquired Skills ({filteredMatched.length})</h3>
          </div>

          {filteredMatched.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>No matching skills found in this category.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filteredMatched.map((skill) => {
                const isExpanded = expandedSkill === skill.name;
                const resources = getSkillLearningResources(skill.name);

                return (
                  <div
                    key={skill.name}
                    style={{
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      onClick={() => toggleSkillResources(skill.name)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        cursor: 'pointer',
                      }}
                    >
                      <div>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{skill.name}</span>
                        <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)' }}>{skill.category}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
                          Level: {skill.studentProficiency}
                        </span>
                        <span className="badge badge-primary" style={{ fontSize: '0.68rem' }}>
                          {skill.importance}
                        </span>
                        {isExpanded ? <ChevronUp size={16} color="var(--text-muted)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                      </div>
                    </div>

                    {isExpanded && (
                      <div style={{ padding: '12px 14px', background: 'var(--bg-tertiary)', borderTop: '1px dashed var(--border-subtle)' }}>
                        <TaskLearningResources skillName={skill.name} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Missing / Gap Skills Card */}
        <div className="glass-card" style={{ padding: '20px', borderTop: '4px solid var(--accent-rose)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <XCircle size={20} color="var(--accent-rose)" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Skill Gap to Learn ({filteredMissing.length})</h3>
          </div>

          {filteredMissing.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontStyle: 'italic' }}>
              🎉 Incredible! You have zero missing skills in this category.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filteredMissing.map((skill) => {
                const isExpanded = expandedSkill === skill.name;

                return (
                  <div
                    key={skill.name}
                    style={{
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid rgba(244, 63, 94, 0.25)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      onClick={() => toggleSkillResources(skill.name)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        cursor: 'pointer',
                      }}
                    >
                      <div>
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent-rose)' }}>{skill.name}</span>
                        <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {skill.category} • <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Click for free tutorials</span>
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="badge badge-rose" style={{ fontSize: '0.72rem' }}>
                          Target: {skill.requiredMin}
                        </span>
                        <span
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            background: skill.importance === 'Critical' ? 'rgba(244, 63, 94, 0.25)' : 'var(--bg-tertiary)',
                            color: skill.importance === 'Critical' ? '#fb7185' : 'var(--text-secondary)'
                          }}
                        >
                          {skill.importance}
                        </span>
                        {isExpanded ? <ChevronUp size={16} color="var(--text-muted)" /> : <ChevronDown size={16} color="var(--text-muted)" />}
                      </div>
                    </div>

                    {isExpanded && (
                      <div style={{ padding: '12px 14px', background: 'var(--bg-tertiary)', borderTop: '1px dashed var(--border-subtle)' }}>
                        <TaskLearningResources skillName={skill.name} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GapAnalyzer;
