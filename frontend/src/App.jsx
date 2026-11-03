import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AdvisorProvider } from './context/AdvisorContext';

// Components
import Navbar from './components/Navbar';
import AIChatDrawer from './components/AIChatDrawer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfileSetup from './pages/ProfileSetup';
import Assessment from './pages/Assessment';
import Recommendations from './pages/Recommendations';
import RoadmapView from './pages/RoadmapView';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AdvisorProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Student Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile-setup"
                  element={
                    <ProtectedRoute>
                      <ProfileSetup />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/assessment"
                  element={
                    <ProtectedRoute>
                      <Assessment />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/recommendations"
                  element={
                    <ProtectedRoute>
                      <Recommendations />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/roadmap"
                  element={
                    <ProtectedRoute>
                      <RoadmapView />
                    </ProtectedRoute>
                  }
                />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Slide-out AI Assistant Copilot */}
            <AIChatDrawer />

            {/* Global Footer */}
            <footer className="glass-panel" style={{ borderTop: '1px solid var(--border-subtle)', padding: '24px 0', textAlign: 'center', marginTop: 'auto' }}>
              <div className="container">
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  🎓 <strong>Student Career Advisor</strong> • AI-Powered Personalized Career Guidance System
                </p>
              </div>
            </footer>
          </div>
        </AdvisorProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
