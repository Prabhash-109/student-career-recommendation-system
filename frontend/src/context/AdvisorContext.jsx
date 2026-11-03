import React, { createContext, useContext, useState, useEffect } from 'react';
import API from '../services/api';
import { useAuth } from './AuthContext';

const AdvisorContext = createContext();

export const AdvisorProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [activeRoadmap, setActiveRoadmap] = useState(null);
  const [loadingRoadmap, setLoadingRoadmap] = useState(false);
  const [loadingRecs, setLoadingRecs] = useState(false);

  // Sync theme attribute to HTML document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Fetch student recommendations
  const fetchRecommendations = async () => {
    if (!isAuthenticated) return;
    setLoadingRecs(true);
    try {
      const res = await API.get('/recommendations');
      if (res.data.success) {
        setRecommendations(res.data.recommendations || []);
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoadingRecs(false);
    }
  };

  // Fetch active roadmap
  const fetchActiveRoadmap = async () => {
    if (!isAuthenticated) return;
    setLoadingRoadmap(true);
    try {
      const res = await API.get('/roadmap/active');
      if (res.data.success) {
        setActiveRoadmap(res.data.data);
      }
    } catch (error) {
      console.error('Error fetching active roadmap:', error);
    } finally {
      setLoadingRoadmap(false);
    }
  };

  // Toggle task completion
  const toggleRoadmapTask = async (taskId, roadmapId) => {
    try {
      const res = await API.put(`/roadmap/task/${taskId}/toggle`, { roadmapId });
      if (res.data.success) {
        setActiveRoadmap(res.data.data);
        return res.data.data;
      }
    } catch (error) {
      console.error('Error toggling task:', error);
      throw error;
    }
  };

  return (
    <AdvisorContext.Provider
      value={{
        theme,
        toggleTheme,
        isAIChatOpen,
        setIsAIChatOpen,
        recommendations,
        setRecommendations,
        activeRoadmap,
        setActiveRoadmap,
        loadingRoadmap,
        loadingRecs,
        fetchRecommendations,
        fetchActiveRoadmap,
        toggleRoadmapTask,
      }}
    >
      {children}
    </AdvisorContext.Provider>
  );
};

export const useAdvisor = () => useContext(AdvisorContext);
