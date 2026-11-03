import React, { useState, useEffect } from 'react';
import { Search, Plus, Check, X, Sparkles, Tag, Sliders } from 'lucide-react';
import API from '../services/api';

const PROFICIENCIES = ['Beginner', 'Intermediate', 'Advanced'];

const SkillPicker = ({ selectedSkills = [], onChange }) => {
  const [catalog, setCatalog] = useState({});
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [customSkillName, setCustomSkillName] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch categorized skill taxonomy from backend
  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const res = await API.get('/profile/skills-catalog');
        if (res.data.success) {
          setCatalog(res.data.categorizedSkills || {});
          setCategories(['All', ...res.data.categories]);
        }
      } catch (err) {
        console.error('Error fetching skills catalog:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCatalog();
  }, []);

  // Map of currently selected skills for quick lookup
  const selectedSkillsMap = new Map();
  selectedSkills.forEach((s) => selectedSkillsMap.set(s.name.toLowerCase().trim(), s));

  // Toggle skill selection
  const handleToggleSkill = (skill) => {
    const key = skill.name.toLowerCase().trim();
    if (selectedSkillsMap.has(key)) {
      // Remove
      const updated = selectedSkills.filter((s) => s.name.toLowerCase().trim() !== key);
      onChange(updated);
    } else {
      // Add with Beginner default
      const newSkill = {
        name: skill.name,
        category: skill.category || 'Tools & Others',
        proficiency: 'Intermediate',
      };
      onChange([...selectedSkills, newSkill]);
    }
  };

  // Change proficiency level for an already selected skill
  const handleProficiencyChange = (skillName, newLevel, e) => {
    e.stopPropagation();
    const updated = selectedSkills.map((s) => {
      if (s.name.toLowerCase().trim() === skillName.toLowerCase().trim()) {
        return { ...s, proficiency: newLevel };
      }
      return s;
    });
    onChange(updated);
  };

  // Add custom write-in skill
  const handleAddCustomSkill = (e) => {
    e.preventDefault();
    if (!customSkillName.trim()) return;
    const trimmed = customSkillName.trim();
    const key = trimmed.toLowerCase();

    if (!selectedSkillsMap.has(key)) {
      const newSkill = {
        name: trimmed,
        category: 'Tools & Others',
        proficiency: 'Intermediate',
      };
      onChange([...selectedSkills, newSkill]);
    }
    setCustomSkillName('');
  };

  // Filter skills based on active category & search
  let skillsToDisplay = [];
  if (activeCategory === 'All') {
    Object.keys(catalog).forEach((cat) => {
      skillsToDisplay = [...skillsToDisplay, ...catalog[cat]];
    });
  } else if (catalog[activeCategory]) {
    skillsToDisplay = catalog[activeCategory];
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    skillsToDisplay = skillsToDisplay.filter(
      (s) => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Search & Custom Add Bar */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: '1', minWidth: '240px' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search skills (e.g., React, Python, Docker, SQL)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '42px' }}
          />
        </div>

        <form onSubmit={handleAddCustomSkill} style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            placeholder="Add other skill..."
            value={customSkillName}
            onChange={(e) => setCustomSkillName(e.target.value)}
            className="form-input"
            style={{ width: '170px' }}
          />
          <button type="submit" className="btn btn-secondary btn-sm" style={{ padding: '0 16px' }}>
            <Plus size={16} /> Add
          </button>
        </form>
      </div>

      {/* Category Pills Filter */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`toggle-item ${activeCategory === cat ? 'active' : ''}`}
            style={{
              padding: '6px 14px',
              fontSize: '0.8rem',
              whiteSpace: 'nowrap',
              background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-tertiary)',
              color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Selected Skills Summary Bar */}
      <div style={{ background: 'var(--bg-secondary)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
            Selected Skills ({selectedSkills.length}):
          </span>
          {selectedSkills.length > 0 && (
            <button
              type="button"
              onClick={() => onChange([])}
              style={{ background: 'none', border: 'none', color: 'var(--accent-rose)', fontSize: '0.78rem', cursor: 'pointer' }}
            >
              Clear All
            </button>
          )}
        </div>

        {selectedSkills.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            No skills selected yet. Click the tags below to add your skills and set proficiency levels.
          </p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {selectedSkills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                }}
              >
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{skill.name}</span>

                {/* 3-Way Level Pill Toggle */}
                <div style={{ display: 'flex', background: 'var(--bg-tertiary)', borderRadius: '12px', padding: '2px', border: '1px solid var(--border-subtle)' }}>
                  {PROFICIENCIES.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={(e) => handleProficiencyChange(skill.name, lvl, e)}
                      style={{
                        padding: '2px 8px',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        background: skill.proficiency === lvl ? 'var(--primary)' : 'transparent',
                        color: skill.proficiency === lvl ? '#ffffff' : 'var(--text-muted)',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {lvl.charAt(0)}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleToggleSkill(skill)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  title="Remove skill"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Grid of Selectable Skill Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxHeight: '340px', overflowY: 'auto', padding: '4px' }}>
        {skillsToDisplay.map((skill) => {
          const isSelected = selectedSkillsMap.has(skill.name.toLowerCase().trim());
          const currentSkill = selectedSkillsMap.get(skill.name.toLowerCase().trim());

          return (
            <div
              key={skill.name}
              onClick={() => handleToggleSkill(skill)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'all 0.2s ease',
                background: isSelected ? 'var(--primary-light)' : 'var(--bg-secondary)',
                border: isSelected ? '1px solid var(--border-active)' : '1px solid var(--border-subtle)',
                boxShadow: isSelected ? 'var(--primary-glow)' : 'none',
              }}
            >
              <div style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isSelected ? 'var(--primary)' : 'var(--bg-tertiary)',
                color: '#ffffff'
              }}>
                {isSelected ? <Check size={12} strokeWidth={3} /> : <Plus size={12} color="var(--text-muted)" />}
              </div>

              <span style={{ fontSize: '0.875rem', fontWeight: isSelected ? 700 : 500, color: 'var(--text-primary)' }}>
                {skill.name}
              </span>

              {isSelected && (
                <span className="badge badge-primary" style={{ fontSize: '0.68rem', padding: '1px 6px' }}>
                  {currentSkill?.proficiency || 'Intermediate'}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillPicker;
