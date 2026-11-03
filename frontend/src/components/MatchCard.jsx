import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle, TrendingUp, DollarSign, Sparkles, Award, ChevronDown, ChevronUp } from 'lucide-react';

const MatchCard = ({ recommendation, rank, onSelectRole, isSelected = false }) => {
  const [showAllMissing, setShowAllMissing] = useState(false);
  const [showAllMatched, setShowAllMatched] = useState(false);

  const {
    careerRole,
    matchScore,
    skillMatchScore,
    interestMatchScore,
    matchedSkills = [],
    missingSkills = [],
    matchReason,
  } = recommendation;

  // Medals for top 3
  const rankBadges = [
    { label: '🥇 Top Career Match', color: 'var(--accent-amber)', bg: 'rgba(245, 158, 11, 0.15)' },
    { label: '🥈 2nd Strong Match', color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.15)' },
    { label: '🥉 3rd Strong Match', color: '#cd7f32', bg: 'rgba(205, 127, 50, 0.15)' },
  ];
  const badgeInfo = rankBadges[rank - 1] || { label: `#${rank} Recommendation`, color: 'var(--primary)', bg: 'var(--primary-light)' };

  // Determine score color
  const getScoreColor = (score) => {
    if (score >= 80) return 'var(--accent-emerald)';
    if (score >= 60) return 'var(--primary)';
    if (score >= 40) return 'var(--accent-amber)';
    return 'var(--accent-rose)';
  };

  const scoreColor = getScoreColor(matchScore);
  const strokeDashoffset = 283 - (283 * matchScore) / 100;

  const displayedMissing = showAllMissing ? missingSkills : missingSkills.slice(0, 3);
  const displayedMatched = showAllMatched ? matchedSkills : matchedSkills.slice(0, 4);

  return (
    <div
      className="glass-card glass-card-hover"
      onClick={() => onSelectRole && onSelectRole(careerRole)}
      style={{
        padding: '24px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderLeft: `4px solid ${scoreColor}`,
        borderTop: isSelected ? '2px solid var(--primary)' : undefined,
        borderRight: isSelected ? '2px solid var(--primary)' : undefined,
        borderBottom: isSelected ? '2px solid var(--primary)' : undefined,
        boxShadow: isSelected ? '0 8px 30px rgba(99, 102, 241, 0.22)' : undefined,
        cursor: 'pointer',
        transition: 'all 0.25s ease',
      }}
    >
      <div>
        {/* Top Header: Rank & Domain */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: badgeInfo.color,
                background: badgeInfo.bg,
                border: `1px solid ${badgeInfo.color}33`,
              }}
            >
              {badgeInfo.label}
            </span>
            {isSelected && (
              <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '2px 8px', borderRadius: 'var(--radius-full)', background: 'var(--primary)', color: '#ffffff' }}>
                Active Target
              </span>
            )}
          </div>
          <span className="badge badge-cyan">{careerRole?.domain}</span>
        </div>

        {/* Title & Match Gauge Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '6px' }}>{careerRole?.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              {careerRole?.shortDescription}
            </p>
          </div>

          {/* Radial Match Score Gauge */}
          <div style={{ position: 'relative', width: '76px', height: '76px', flexShrink: 0 }}>
            <svg width="76" height="76" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="var(--bg-tertiary)"
                strokeWidth="9"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke={scoreColor}
                strokeWidth="9"
                strokeDasharray="283"
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
              />
            </svg>
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '1.05rem', fontWeight: 800, color: scoreColor, lineHeight: 1 }}>
                {matchScore}%
              </span>
              <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 600 }}>MATCH</span>
            </div>
          </div>
        </div>

        {/* Breakdown Stats Bar (Skill Score + Quiz Interest Score) */}
        <div style={{ background: 'var(--bg-secondary)', padding: '10px 14px', borderRadius: 'var(--radius-md)', marginBottom: '16px', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Skill Overlap (70%)</span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{skillMatchScore}%</span>
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Interest Affinity (30%)</span>
              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>{interestMatchScore}%</span>
            </div>
          </div>
          {skillMatchScore === 0 && interestMatchScore > 0 && (
            <div style={{ marginTop: '6px', paddingTop: '6px', borderTop: '1px dashed var(--border-subtle)', fontSize: '0.72rem', color: 'var(--primary)', fontWeight: 600 }}>
              💡 Score is 30% from Quiz Interest. Add your skills to unlock full 100%!
            </div>
          )}
        </div>

        {/* Explainable Match Reason */}
        <div style={{ background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.2)', padding: '10px 14px', borderRadius: 'var(--radius-md)', marginBottom: '16px', display: 'flex', gap: '10px' }}>
          <Sparkles size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.8rem', color: 'var(--text-primary)', lineHeight: 1.4, fontWeight: 500 }}>
            {matchReason}
          </p>
        </div>

        {/* Skills Matched vs Gap */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
            <span>Skills You Have ({matchedSkills.length})</span>
            <span>Skill Gap ({missingSkills.length})</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
            {displayedMatched.map((s) => (
              <span key={s.name} className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
                <CheckCircle2 size={12} /> {s.name}
              </span>
            ))}
            {matchedSkills.length > 4 && (
              <button
                type="button"
                onClick={() => setShowAllMatched(!showAllMatched)}
                style={{
                  border: 'none',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--accent-emerald)',
                  cursor: 'pointer',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                }}
              >
                {showAllMatched ? 'Less' : `+${matchedSkills.length - 4} more`}
              </button>
            )}

            {displayedMissing.map((s) => (
              <span key={s.name} className="badge badge-rose" style={{ fontSize: '0.72rem' }}>
                <XCircle size={12} /> {s.name}
              </span>
            ))}
            {missingSkills.length > 3 && (
              <button
                type="button"
                onClick={() => setShowAllMissing(!showAllMissing)}
                style={{
                  border: 'none',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  transition: 'all 0.2s ease',
                }}
                title={showAllMissing ? 'Show fewer skills' : 'View all missing skills'}
              >
                {showAllMissing ? 'Show less' : `+${missingSkills.length - 3} more`}
                {showAllMissing ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
            )}
          </div>
        </div>

        {/* Salary & Demand Info */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <DollarSign size={14} color="var(--accent-emerald)" />
            <span>{careerRole?.avgSalary?.freshers}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <TrendingUp size={14} color="var(--accent-cyan)" />
            <span>{careerRole?.marketDemand} Demand</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (onSelectRole) onSelectRole(careerRole);
        }}
        className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
        style={{
          width: '100%',
          justifyContent: 'center',
          gap: '8px',
          fontWeight: 700,
          background: isSelected ? 'var(--primary)' : 'rgba(99, 102, 241, 0.1)',
          color: isSelected ? '#ffffff' : 'var(--primary)',
          borderColor: isSelected ? 'var(--primary)' : 'rgba(99, 102, 241, 0.3)',
        }}
      >
        <span>{isSelected ? 'Viewing Skill Gap & Diagnostics ↓' : 'Analyze Skill Gap & Roadmap'}</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default MatchCard;
