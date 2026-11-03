import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAdvisor } from '../context/AdvisorContext';
import { useAuth } from '../context/AuthContext';
import API from '../services/api';
import MatchCard from '../components/MatchCard';
import GapAnalyzer from '../components/GapAnalyzer';
import {
  Compass,
  Sparkles,
  Map,
  Filter,
  RefreshCw,
  Award,
  Layers,
  ArrowRight,
  TrendingUp,
  Briefcase
} from 'lucide-react';

const Recommendations = () => {
  const navigate = useNavigate();
  const { recommendations, fetchRecommendations, loadingRecs, setActiveRoadmap } = useAdvisor();
  const { profile } = useAuth();
  const [selectedRole, setSelectedRole] = useState(null);
  const [roleDetailAnalysis, setRoleDetailAnalysis] = useState(null);
  const [activeDomainFilter, setActiveDomainFilter] = useState('All');
  const [generatingRoadmap, setGeneratingRoadmap] = useState(false);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  // When recommendations arrive, select the #1 top match by default without scrolling
  useEffect(() => {
    if (recommendations && recommendations.length > 0 && !selectedRole) {
      handleSelectRole(recommendations[0].careerRole, false);
    }
  }, [recommendations]);

  const [loadingRoleDetail, setLoadingRoleDetail] = useState(false);

  const handleSelectRole = async (careerRole, autoScroll = true) => {
    if (!careerRole) return;
    setSelectedRole(careerRole);
    setLoadingRoleDetail(true);
    try {
      const res = await API.get(`/recommendations/role/${careerRole.slug}`);
      if (res.data.success) {
        setRoleDetailAnalysis(res.data.matchAnalysis);
      }
    } catch (err) {
      console.error('Error fetching role details:', err);
    } finally {
      setLoadingRoleDetail(false);
    }

    if (autoScroll) {
      setTimeout(() => {
        const el = document.getElementById('gap-analyzer-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleGenerateRoadmap = async () => {
    if (!selectedRole) return;
    setGeneratingRoadmap(true);
    try {
      const res = await API.post('/roadmap/generate', {
        careerRoleId: selectedRole._id,
        duration: profile?.timelineGoal || '6 Months (Standard)',
      });
      if (res.data.success) {
        setActiveRoadmap(res.data.data);
        navigate('/roadmap');
      }
    } catch (err) {
      console.error('Error generating roadmap:', err);
    } finally {
      setGeneratingRoadmap(false);
    }
  };

  // Filter recommendations by domain
  const domains = ['All', ...new Set(recommendations.map((r) => r.careerRole?.domain).filter(Boolean))];
  const filteredRecs = activeDomainFilter === 'All'
    ? recommendations
    : recommendations.filter((r) => r.careerRole?.domain === activeDomainFilter);

  return (
    <div className="container" style={{ maxWidth: '1180px', paddingTop: '40px', paddingBottom: '70px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'var(--primary-light)', border: '1px solid var(--border-active)', marginBottom: '8px' }}>
            <Award size={15} color="var(--primary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#818cf8' }}>Ranked by Explainable Matching Engine</span>
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Your Career Recommendations</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Based on your <strong>{profile?.skills?.length || 0} skills</strong> and academic profile in <strong>{profile?.branch || 'Engineering'}</strong>.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={fetchRecommendations} className="btn btn-secondary btn-sm">
            <RefreshCw size={15} /> Refresh Engine
          </button>
          <Link to="/profile-setup" className="btn btn-secondary btn-sm">
            Edit Skills
          </Link>
        </div>
      </div>

      {/* Domain Filters Bar */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '28px', paddingBottom: '4px' }}>
        {domains.map((dom) => (
          <button
            key={dom}
            type="button"
            onClick={() => setActiveDomainFilter(dom)}
            className={`toggle-item ${activeDomainFilter === dom ? 'active' : ''}`}
            style={{
              padding: '6px 16px',
              fontSize: '0.825rem',
              whiteSpace: 'nowrap',
              background: activeDomainFilter === dom ? 'var(--primary)' : 'var(--bg-secondary)',
              color: activeDomainFilter === dom ? '#ffffff' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              cursor: 'pointer'
            }}
          >
            {dom}
          </button>
        ))}
      </div>

      {loadingRecs ? (
        <div className="glass-card" style={{ padding: '60px', textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '3px solid rgba(99, 102, 241, 0.2)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--text-secondary)' }}>Calculating multi-variable career compatibility matrix...</p>
        </div>
      ) : recommendations.length === 0 ? (
        <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>No recommendations yet. Please complete your skills setup.</p>
          <Link to="/profile-setup" className="btn btn-primary">Setup Skills Now</Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Top Ranked Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '22px' }}>
            {filteredRecs.map((rec, index) => (
              <MatchCard
                key={rec.careerRole?._id || index}
                recommendation={rec}
                rank={index + 1}
                isSelected={selectedRole?._id === rec.careerRole?._id || selectedRole?.slug === rec.careerRole?.slug}
                onSelectRole={(role) => handleSelectRole(role, true)}
              />
            ))}
          </div>

          {/* Deep-Dive Skill Gap & Roadmap Generation View for Selected Role */}
          {selectedRole && (
            <div id="gap-analyzer-section" style={{ borderTop: '2px solid var(--border-subtle)', paddingTop: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <span className="badge badge-emerald">Interactive Skill Diagnostic</span>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px' }}>
                    Skill Gap Breakdown for <span className="text-gradient">{selectedRole.title}</span>
                  </h2>
                </div>

                <button
                  type="button"
                  disabled={generatingRoadmap}
                  onClick={handleGenerateRoadmap}
                  className="btn btn-primary btn-lg"
                >
                  <Map size={18} />
                  <span>{generatingRoadmap ? 'Synthesizing...' : `Generate ${selectedRole.title} Roadmap`}</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Side-by-side Skill Gap Diagnostic */}
              <GapAnalyzer matchAnalysis={roleDetailAnalysis} careerRole={selectedRole} loading={loadingRoleDetail} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
