import React, { useState, useEffect } from 'react';
import { useAdvisor } from '../context/AdvisorContext';
import { useAuth } from '../context/AuthContext';
import API from '../services/api';
import RoadmapTimeline from '../components/RoadmapTimeline';
import {
  Map,
  Compass,
  Sparkles,
  Bot,
  RefreshCw,
  Award,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RoadmapView = () => {
  const { activeRoadmap, fetchActiveRoadmap, toggleRoadmapTask, loadingRoadmap, setIsAIChatOpen } = useAdvisor();
  const { profile } = useAuth();
  const [isUpdatingDuration, setIsUpdatingDuration] = useState(false);

  useEffect(() => {
    fetchActiveRoadmap();
  }, []);

  const handleDurationChange = async (newDuration) => {
    if (!activeRoadmap?.careerRole) return;
    setIsUpdatingDuration(true);
    try {
      const res = await API.post('/roadmap/generate', {
        careerRoleId: activeRoadmap.careerRole._id || activeRoadmap.careerRole,
        duration: newDuration,
      });
      if (res.data.success) {
        await fetchActiveRoadmap();
      }
    } catch (err) {
      console.error('Error switching roadmap duration:', err);
    } finally {
      setIsUpdatingDuration(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '1080px', paddingTop: '40px', paddingBottom: '70px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-full)', background: 'var(--accent-emerald-light)', border: '1px solid rgba(16, 185, 129, 0.3)', marginBottom: '8px' }}>
            <Map size={15} color="var(--accent-emerald)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#34d399' }}>Live Interactive Learning Path</span>
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Your Personalized Roadmap</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Milestones and tasks tailored to your skills. Click tasks as you master them to update your progress!
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setIsAIChatOpen(true)} className="btn btn-primary btn-sm">
            <Bot size={16} /> Ask AI Copilot
          </button>
          <Link to="/recommendations" className="btn btn-secondary btn-sm">
            Switch Target Role
          </Link>
        </div>
      </div>

      {loadingRoadmap ? (
        <div className="glass-card" style={{ padding: '60px', textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '3px solid rgba(99, 102, 241, 0.2)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ color: 'var(--text-secondary)' }}>Loading your personalized learning roadmap...</p>
        </div>
      ) : !activeRoadmap ? (
        <div className="glass-card" style={{ padding: '48px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>No Active Roadmap Found</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Choose a target career from your recommendations to generate an adaptive step-by-step roadmap.
          </p>
          <Link to="/recommendations" className="btn btn-primary">
            Explore Career Recommendations <ArrowRight size={18} />
          </Link>
        </div>
      ) : (
        <RoadmapTimeline
          roadmap={activeRoadmap}
          onToggleTask={toggleRoadmapTask}
          onDurationChange={handleDurationChange}
          isUpdating={isUpdatingDuration}
        />
      )}
    </div>
  );
};

export default RoadmapView;
