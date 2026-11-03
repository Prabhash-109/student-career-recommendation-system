import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Compass,
  Map,
  Sparkles,
  Bot,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Target,
  Zap
} from 'lucide-react';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingBottom: '80px' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '60px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 'var(--radius-full)', background: 'var(--primary-light)', border: '1px solid var(--border-active)', marginBottom: '24px' }}>
            <Sparkles size={16} color="var(--primary)" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#818cf8' }}>AI-Powered Smart Career Guidance for Engineering Students</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-1px', marginBottom: '20px', lineHeight: 1.15 }}>
            Discover Your Ideal Tech Career & Follow a <span className="text-gradient">Personalized Roadmap</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '36px', maxWidth: '750px', margin: '0 auto 36px' }}>
            Stop guessing what to learn next. Analyze your skills and interests to get transparent career match scores, pinpoint your missing skill gaps, and follow an adaptive step-by-step roadmap.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn btn-primary btn-lg">
                Go to Student Dashboard <ArrowRight size={18} />
              </Link>
            ) : (
              <>
                <Link to="/register" className="btn btn-primary btn-lg">
                  Start Free Assessment <ArrowRight size={18} />
                </Link>
                <Link to="/login" className="btn btn-secondary btn-lg">
                  Sign In to Profile
                </Link>
              </>
            )}
          </div>

          {/* Interactive Feature Teaser Preview Card */}
          <div className="glass-card" style={{ marginTop: '50px', padding: '24px', border: '1px solid var(--border-active)', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '8px' }}>Recommendation Engine Live Simulation</span>
              </div>
              <span className="badge badge-emerald">92% Match Calculated</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Top Matched Role</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '2px' }}>Frontend Developer</h4>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <span className="badge badge-emerald">HTML ✓</span>
                  <span className="badge badge-emerald">CSS ✓</span>
                  <span className="badge badge-emerald">React ✓</span>
                </div>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(244, 63, 94, 0.25)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Identified Skill Gap</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fb7185', marginTop: '2px' }}>3 Missing Skills</h4>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <span className="badge badge-rose">TypeScript ✗</span>
                  <span className="badge badge-rose">Next.js ✗</span>
                </div>
              </div>

              <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Personalized Roadmap</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '2px' }}>Stage 1 Active</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                  Skipped beginner React → Focus on TypeScript & Next.js App Router.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (The 4-Step Architecture Flow) */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge badge-cyan" style={{ marginBottom: '8px' }}>System Architecture</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>How the Career Advisor Works</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '6px' }}>A smart, transparent recommendation loop that adapts to your learning pace.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {[
            {
              step: '01',
              title: 'Profile & Skills Grid',
              desc: 'Select your technical skills with 1-click proficiency toggles (Beginner, Intermediate, Advanced).',
              icon: Target,
              gradient: 'from-blue-600 to-cyan-500'
            },
            {
              step: '02',
              title: 'Interest Assessment',
              desc: 'Take a quick 5-min scenario quiz to calculate your domain affinity across Web, AI/ML, Cloud, and Security.',
              icon: Compass,
              gradient: 'from-purple-600 to-indigo-500'
            },
            {
              step: '03',
              title: 'Explainable Matching',
              desc: 'Our recommendation engine calculates weighted compatibility scores and pinpoints your exact missing skills.',
              icon: Sparkles,
              gradient: 'from-pink-600 to-rose-500'
            },
            {
              step: '04',
              title: 'Adaptive Roadmap & AI',
              desc: 'Follow a customized study timeline, check off completed milestones, and get 24/7 AI career coaching.',
              icon: Bot,
              gradient: 'from-emerald-600 to-teal-500'
            },
          ].map((item) => (
            <div key={item.step} className="glass-card glass-card-hover" style={{ padding: '28px', position: 'relative' }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: 'rgba(255, 255, 255, 0.08)', position: 'absolute', top: '16px', right: '20px' }}>
                {item.step}
              </span>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '18px' }}>
                <item.icon size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="glass-card" style={{ padding: '48px 36px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(6, 182, 212, 0.15) 100%)', border: '1px solid var(--border-active)' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '14px' }}>Ready to Accelerate Your Tech Career?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 28px' }}>
            Join thousands of engineering students discovering clarity and landing high-paying developer roles.
          </p>
          <Link to="/register" className="btn btn-primary btn-lg">
            Create Your Profile Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
