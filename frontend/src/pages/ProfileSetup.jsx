import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API from '../services/api';
import SkillPicker from '../components/SkillPicker';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Target
} from 'lucide-react';

const DOMAIN_OPTIONS = [
  'Web Development',
  'Artificial Intelligence',
  'Data Science & Analytics',
  'Cloud & DevOps',
  'Cybersecurity',
  'Mobile App Development',
  'Software Engineering'
];

const ProfileSetup = () => {
  const { profile, refreshProfile, user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [saving, setSaving] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    college: '',
    branch: 'Computer Science & Engineering',
    academicYear: '3rd Year',
    semester: 5,
    cgpa: 8.0,
    preferredDomains: ['Web Development'],
    targetCareerRole: 'Full Stack Developer',
    timelineGoal: '6 Months (Standard)',
    weeklyHours: 15,
    skills: [],
    bio: '',
  });

  // Populate existing profile data if available
  useEffect(() => {
    if (profile) {
      setFormData({
        college: profile.college || '',
        branch: profile.branch || 'Computer Science & Engineering',
        academicYear: profile.academicYear || '3rd Year',
        semester: profile.semester || 5,
        cgpa: profile.cgpa || 8.0,
        preferredDomains: profile.preferredDomains?.length ? profile.preferredDomains : ['Web Development'],
        targetCareerRole: profile.targetCareerRole || 'Full Stack Developer',
        timelineGoal: profile.timelineGoal || '6 Months (Standard)',
        weeklyHours: profile.weeklyHours || 15,
        skills: profile.skills || [],
        bio: profile.bio || '',
      });
    }
  }, [profile]);

  const handleDomainToggle = (domain) => {
    if (formData.preferredDomains.includes(domain)) {
      setFormData({
        ...formData,
        preferredDomains: formData.preferredDomains.filter((d) => d !== domain),
      });
    } else {
      setFormData({
        ...formData,
        preferredDomains: [...formData.preferredDomains, domain],
      });
    }
  };

  const handleSaveProfile = async (proceedTo = '/assessment') => {
    setSaving(true);
    try {
      await API.put('/profile', formData);
      await refreshProfile();
      navigate(proceedTo);
    } catch (err) {
      console.error('Error saving profile:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '820px', paddingTop: '40px', paddingBottom: '70px' }}>
      {/* Wizard Progress Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="badge badge-primary" style={{ marginBottom: '8px' }}>
          Step {currentStep} of 3 • Profile & Skills Builder
        </span>
        <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Complete Your Student Profile</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
          Our AI uses your exact academic level and skills matrix to calculate precise career matches.
        </p>

        {/* 3-Step Tracker Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
          {[
            { num: 1, label: '1. Academic Info' },
            { num: 2, label: '2. Goals & Time' },
            { num: 3, label: '3. Skills Matrix' },
          ].map((s) => (
            <div
              key={s.num}
              onClick={() => setCurrentStep(s.num)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                background: currentStep === s.num ? 'var(--primary)' : 'var(--bg-secondary)',
                color: currentStep === s.num ? '#ffffff' : 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card" style={{ padding: '32px', border: '1px solid var(--border-medium)' }}>
        {/* STEP 1: Academic Background */}
        {currentStep === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={22} color="var(--primary)" /> Academic Details
            </h3>

            <div className="form-group">
              <label className="form-label">College / University Name</label>
              <input
                type="text"
                placeholder="e.g. National Institute of Technology / Stanford"
                className="form-input"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Engineering Branch / Major</label>
                <select
                  className="form-select"
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                >
                  <option value="Computer Science & Engineering">Computer Science & Engineering (CSE)</option>
                  <option value="Information Technology">Information Technology (IT)</option>
                  <option value="Artificial Intelligence & Data Science">AI & Data Science (AI/DS)</option>
                  <option value="Electronics & Communication">Electronics & Communication (ECE)</option>
                  <option value="Electrical Engineering">Electrical Engineering (EE)</option>
                  <option value="Mechanical / Civil Engineering">Mechanical / Civil Engineering</option>
                  <option value="BCA / MCA / Other Computer Studies">BCA / MCA / Other Computer Studies</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Current Academic Year</label>
                <select
                  className="form-select"
                  value={formData.academicYear}
                  onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                >
                  <option value="1st Year">1st Year (Freshman)</option>
                  <option value="2nd Year">2nd Year (Sophomore)</option>
                  <option value="3rd Year">3rd Year (Junior)</option>
                  <option value="Final Year">Final Year (Senior)</option>
                  <option value="Graduated">Graduated / Job Seeking</option>
                  <option value="Self-Taught">Self-Taught Developer</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Current Semester (1-8)</label>
                <input
                  type="number"
                  min={1}
                  max={8}
                  className="form-input"
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: Number(e.target.value) })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Current CGPA / Academic Score (out of 10)</label>
                <input
                  type="number"
                  step="0.1"
                  min={0}
                  max={10}
                  className="form-input"
                  value={formData.cgpa}
                  onChange={(e) => setFormData({ ...formData, cgpa: Number(e.target.value) })}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <button type="button" onClick={() => setCurrentStep(2)} className="btn btn-primary">
                Next: Goals & Timeline <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Goals, Preferred Domains & Available Study Time */}
        {currentStep === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Target size={22} color="var(--accent-cyan)" /> Career Domains & Time Commitment
            </h3>

            {/* Preferred Domains Multi-select */}
            <div className="form-group">
              <label className="form-label">Preferred Tech Domains (Select all that interest you)</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {DOMAIN_OPTIONS.map((domain) => {
                  const isSelected = formData.preferredDomains.includes(domain);
                  return (
                    <button
                      key={domain}
                      type="button"
                      onClick={() => handleDomainToggle(domain)}
                      style={{
                        padding: '10px 16px',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        border: isSelected ? '1.5px solid var(--border-active)' : '1px solid var(--border-subtle)',
                        background: isSelected ? 'var(--primary-light)' : 'var(--bg-secondary)',
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      {isSelected ? <CheckCircle2 size={16} color="var(--accent-emerald)" /> : null}
                      {domain}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Desired Roadmap Pacing</label>
                <select
                  className="form-select"
                  value={formData.timelineGoal}
                  onChange={(e) => setFormData({ ...formData, timelineGoal: e.target.value })}
                >
                  <option value="3 Months (Fast-Track)">⚡ 3 Months (Fast-Track / Intensive)</option>
                  <option value="6 Months (Standard)">🎯 6 Months (Standard University Pace)</option>
                  <option value="12 Months (Comprehensive)">📚 12 Months (Comprehensive / Deep-Dive)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Weekly Study Hours ({formData.weeklyHours} hrs/week)</label>
                <input
                  type="range"
                  min={5}
                  max={40}
                  step={1}
                  style={{ width: '100%', marginTop: '10px' }}
                  value={formData.weeklyHours}
                  onChange={(e) => setFormData({ ...formData, weeklyHours: Number(e.target.value) })}
                />
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  ~{(formData.weeklyHours / 7).toFixed(1)} hours/day dedicated study
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <button type="button" onClick={() => setCurrentStep(1)} className="btn btn-secondary">
                <ArrowLeft size={18} /> Back
              </button>
              <button type="button" onClick={() => setCurrentStep(3)} className="btn btn-primary">
                Next: Select Skills Matrix <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Interactive Skills & Proficiency Grid */}
        {currentStep === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={22} color="var(--accent-emerald)" /> Select Your Technical Skills
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '4px' }}>
                Click any skill to add it. Use the level toggle <strong>[B / I / A]</strong> to set your proficiency.
              </p>
            </div>

            {/* Interactive Skill Picker */}
            <SkillPicker
              selectedSkills={formData.skills}
              onChange={(newSkills) => setFormData({ ...formData, skills: newSkills })}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
              <button type="button" onClick={() => setCurrentStep(2)} className="btn btn-secondary">
                <ArrowLeft size={18} /> Back
              </button>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => handleSaveProfile('/recommendations')}
                  className="btn btn-secondary"
                >
                  Save & View Matches
                </button>

                <button
                  type="button"
                  disabled={saving}
                  onClick={() => handleSaveProfile('/assessment')}
                  className="btn btn-primary"
                >
                  {saving ? 'Saving...' : 'Save & Take Quiz Assessment'} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSetup;
