import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAdvisor } from '../context/AdvisorContext';
import {
  GraduationCap,
  Compass,
  Map,
  Sparkles,
  LayoutDashboard,
  LogOut,
  User,
  Sun,
  Moon,
  Menu,
  X,
  Bot
} from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { theme, toggleTheme, setIsAIChatOpen } = useAdvisor();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--gradient-brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(99, 102, 241, 0.4)'
          }}>
            <GraduationCap size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.5px' }}>Career<span className="text-gradient">Advisor</span></span>
              {/* <span className="badge badge-cyan" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>AI</span> */}
            </div>
            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', margin: 0 }}>Smart Guidance Engine</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        {isAuthenticated && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
            <Link
              to="/dashboard"
              className="btn btn-sm"
              style={{
                background: isActive('/dashboard') ? 'var(--primary-light)' : 'transparent',
                color: isActive('/dashboard') ? 'var(--primary)' : 'var(--text-secondary)',
                border: isActive('/dashboard') ? '1px solid var(--border-active)' : '1px solid transparent',
              }}
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>

            <Link
              to="/recommendations"
              className="btn btn-sm"
              style={{
                background: isActive('/recommendations') ? 'var(--primary-light)' : 'transparent',
                color: isActive('/recommendations') ? 'var(--primary)' : 'var(--text-secondary)',
                border: isActive('/recommendations') ? '1px solid var(--border-active)' : '1px solid transparent',
              }}
            >
              <Compass size={16} />
              Career Matches
            </Link>

            <Link
              to="/roadmap"
              className="btn btn-sm"
              style={{
                background: isActive('/roadmap') ? 'var(--primary-light)' : 'transparent',
                color: isActive('/roadmap') ? 'var(--primary)' : 'var(--text-secondary)',
                border: isActive('/roadmap') ? '1px solid var(--border-active)' : '1px solid transparent',
              }}
            >
              <Map size={16} />
              My Roadmap
            </Link>

            <Link
              to="/assessment"
              className="btn btn-sm"
              style={{
                background: isActive('/assessment') ? 'var(--primary-light)' : 'transparent',
                color: isActive('/assessment') ? 'var(--primary)' : 'var(--text-secondary)',
                border: isActive('/assessment') ? '1px solid var(--border-active)' : '1px solid transparent',
              }}
            >
              <Sparkles size={16} />
              Quiz Assessment
            </Link>
          </nav>
        )}

        {/* Right Action Icons & Auth Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn btn-secondary btn-sm"
            style={{ padding: '8px', borderRadius: '50%', width: '38px', height: '38px' }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          {/* AI Copilot Trigger Button */}
          {isAuthenticated && (
            <button
              onClick={() => setIsAIChatOpen(true)}
              className="btn btn-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                color: '#c084fc',
                fontWeight: 600,
                position: 'relative'
              }}
            >
              <Bot size={17} className="animate-pulse-glow" />
              <span>AI Copilot</span>
              <span style={{
                position: 'absolute',
                top: '-3px',
                right: '-3px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-emerald)',
                boxShadow: '0 0 8px #10b981'
              }} />
            </button>
          )}

          {/* User Auth Info / Auth Buttons */}
          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Link
                to="/profile-setup"
                className="btn btn-secondary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                title="Edit Skills & Academic Profile"
              >
                <div style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'var(--gradient-brand)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}>
                  {user?.name?.charAt(0).toUpperCase() || 'S'}
                </div>
                <span style={{ fontSize: '0.85rem' }}>{user?.name?.split(' ')[0]}</span>
              </Link>

              <button
                onClick={handleLogout}
                className="btn btn-secondary btn-sm"
                style={{ padding: '8px', color: 'var(--accent-rose)' }}
                title="Logout"
              >
                <LogOut size={17} />
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Link to="/login" className="btn btn-secondary btn-sm">
                Log In
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Get Started Free
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-secondary btn-sm mobile-only"
            style={{ padding: '8px' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && isAuthenticated && (
        <div style={{ padding: '16px 24px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary btn-sm"
              style={{ justifyContent: 'flex-start' }}
            >
              <LayoutDashboard size={16} /> Dashboard
            </Link>
            <Link
              to="/recommendations"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary btn-sm"
              style={{ justifyContent: 'flex-start' }}
            >
              <Compass size={16} /> Career Matches
            </Link>
            <Link
              to="/roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary btn-sm"
              style={{ justifyContent: 'flex-start' }}
            >
              <Map size={16} /> My Roadmap
            </Link>
            <Link
              to="/assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary btn-sm"
              style={{ justifyContent: 'flex-start' }}
            >
              <Sparkles size={16} /> Quiz Assessment
            </Link>
            <Link
              to="/profile-setup"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-secondary btn-sm"
              style={{ justifyContent: 'flex-start' }}
            >
              <User size={16} /> Profile & Skills Setup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
