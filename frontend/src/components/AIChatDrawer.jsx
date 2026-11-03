import React, { useState, useRef, useEffect } from 'react';
import { useAdvisor } from '../context/AdvisorContext';
import { useAuth } from '../context/AuthContext';
import API from '../services/api';
import {
  Bot,
  X,
  Send,
  Sparkles,
  User,
  Lightbulb,
  BookOpen,
  Code,
  Calendar
} from 'lucide-react';

const SUGGESTED_PROMPTS = [
  { text: 'Suggest 2 resume-worthy capstone projects', icon: 'Code' },
  { text: 'Create a 30-day study plan for my next milestone', icon: 'Calendar' },
  { text: 'What are top interview questions for my target role?', icon: 'Lightbulb' },
  { text: 'How do I bridge my missing skills gap faster?', icon: 'Sparkles' },
];

// Helper to format markdown text into JSX
const formatMarkdown = (text) => {
  if (!text) return '';

  const paragraphs = text.split('\n');

  return paragraphs.map((paragraph, pIdx) => {
    let cleanPara = paragraph.trim();

    if (!cleanPara) {
      return <div key={pIdx} style={{ height: '6px' }} />;
    }

    // Check for Markdown Headings (#, ##, ###)
    const isH3 = cleanPara.startsWith('### ');
    const isH2 = cleanPara.startsWith('## ');
    const isH1 = cleanPara.startsWith('# ');

    if (isH1 || isH2 || isH3) {
      const headingText = cleanPara.replace(/^#{1,3}\s+/, '');
      // Format any inner bold text inside heading
      const innerParts = headingText.split(/(\*{2,3}[^*]+\*{2,3}|`[^`]+`)/g);
      const renderedHeading = innerParts.map((part, idx) => {
        if ((part.startsWith('**') && part.endsWith('**')) || (part.startsWith('***') && part.endsWith('***'))) {
          return <span key={idx}>{part.replace(/^\*{2,3}/, '').replace(/\*{2,3}$/, '')}</span>;
        }
        return part;
      });

      return (
        <div
          key={pIdx}
          style={{
            fontWeight: 800,
            fontSize: isH1 ? '1.1rem' : isH2 ? '1.02rem' : '0.95rem',
            color: 'var(--text-primary)',
            marginTop: pIdx === 0 ? '0' : '10px',
            marginBottom: '4px',
            lineHeight: 1.35,
          }}
        >
          {renderedHeading}
        </div>
      );
    }

    // Check if it's a bullet point (*, -, •)
    const isBullet = cleanPara.startsWith('* ') || cleanPara.startsWith('- ') || cleanPara.startsWith('• ');
    if (isBullet) {
      cleanPara = cleanPara.replace(/^[\*\-•]\s+/, '');
    }

    // Parse bold text **word** or ***word***
    const parts = cleanPara.split(/(\*{2,3}[^*]+\*{2,3}|`[^`]+`)/g);

    const formattedContent = parts.map((part, idx) => {
      if ((part.startsWith('**') && part.endsWith('**')) || (part.startsWith('***') && part.endsWith('***'))) {
        const cleanBold = part.replace(/^\*{2,3}/, '').replace(/\*{2,3}$/, '');
        return (
          <strong key={idx} style={{ color: 'var(--text-primary)', fontWeight: 800 }}>
            {cleanBold}
          </strong>
        );
      } else if (part.startsWith('`') && part.endsWith('`')) {
        const cleanCode = part.slice(1, -1);
        return (
          <code
            key={idx}
            style={{
              background: 'var(--primary-light)',
              color: 'var(--primary)',
              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: '0.82rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)'
            }}
          >
            {cleanCode}
          </code>
        );
      }
      return part;
    });

    if (isBullet) {
      return (
        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', margin: '3px 0' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 800, lineHeight: 1.4 }}>•</span>
          <span style={{ flex: 1, lineHeight: 1.45 }}>{formattedContent}</span>
        </div>
      );
    }

    return (
      <p key={pIdx} style={{ margin: '4px 0', lineHeight: 1.45 }}>
        {formattedContent}
      </p>
    );
  });
};

const AIChatDrawer = () => {
  const { isAIChatOpen, setIsAIChatOpen, activeRoadmap } = useAdvisor();
  const { user, profile } = useAuth();
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hello ${user?.name?.split(' ')[0] || 'there'}! 👋 I am your **AI Career Copilot**.\n\nI have live context of your academic background, skills, and target goal: **${profile?.targetCareerRole || activeRoadmap?.careerTitle || 'Tech Careers'}**.\n\nHow can I help you accelerate your career today?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAIChatOpen) {
      scrollToBottom();
    }
  }, [messages, isAIChatOpen]);

  const handleSendMessage = async (customText = null) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || loading) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      const res = await API.post('/ai/chat', { message: textToSend });
      if (res.data.success) {
        const aiMsg = {
          id: Date.now() + 1,
          sender: 'ai',
          text: res.data.reply,
          provider: res.data.provider,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, aiMsg]);
      }
    } catch (error) {
      console.error('AI chat error:', error);
      const errorMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: 'I encountered an issue processing your request. Please check your network connection and try again.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  if (!isAIChatOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        maxWidth: '440px',
        backgroundColor: 'var(--bg-secondary)',
        borderLeft: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideInRight 0.3s ease-out',
      }}
    >
      {/* Drawer Header */}
      <div
        style={{
          padding: '18px 20px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--bg-tertiary)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--gradient-brand)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }}
          >
            <Bot size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>AI Career Copilot</h3>
              <span className="badge badge-emerald" style={{ fontSize: '0.62rem', padding: '1px 6px' }}>ONLINE</span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Context-Aware Student Advisor</p>
          </div>
        </div>

        <button
          onClick={() => setIsAIChatOpen(false)}
          className="btn btn-secondary btn-sm"
          style={{ padding: '6px', borderRadius: '50%' }}
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div
        style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '88%',
                padding: '12px 16px',
                borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                background: msg.sender === 'user' ? 'var(--primary)' : 'var(--bg-card)',
                color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                border: msg.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
                fontSize: '0.875rem',
                lineHeight: 1.5,
                boxShadow: msg.sender === 'user' ? '0 4px 14px rgba(99, 102, 241, 0.3)' : 'var(--shadow-sm)',
              }}
            >
              {formatMarkdown(msg.text)}
            </div>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '4px', padding: '0 4px' }}>
              {msg.time} {msg.provider && `• ${msg.provider}`}
            </span>
          </div>
        ))}

        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', background: 'var(--bg-card)', borderRadius: '18px', width: 'fit-content', border: '1px solid var(--border-subtle)' }}>
            <Sparkles size={16} color="var(--primary)" className="animate-pulse-glow" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Copilot is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Pills */}
      <div style={{ padding: '8px 16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '8px', overflowX: 'auto', background: 'var(--bg-tertiary)' }}>
        {SUGGESTED_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSendMessage(prompt.text)}
            style={{
              padding: '6px 12px',
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {prompt.text}
          </button>
        ))}
      </div>

      {/* Chat Input Bar */}
      <div style={{ padding: '14px 16px', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-secondary)' }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          style={{ display: 'flex', gap: '10px' }}
        >
          <input
            type="text"
            placeholder="Ask anything (e.g. projects, resume tips, roadmap)..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="form-input"
            style={{ borderRadius: 'var(--radius-full)', padding: '10px 18px', fontSize: '0.875rem' }}
          />
          <button
            type="submit"
            disabled={!inputMessage.trim() || loading}
            className="btn btn-primary"
            style={{ borderRadius: '50%', width: '42px', height: '42px', padding: 0, flexShrink: 0 }}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChatDrawer;
