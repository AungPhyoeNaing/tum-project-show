import React, { useState, useMemo } from 'react';
import { MAJORS_DATA, SHOW_INFO } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';
import { Search, X, Calendar, MapPin, Sparkles, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home({ bookmarks, onToggleBookmark }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMajorFilter, setSelectedMajorFilter] = useState('ALL');

  // Collect all projects across all majors
  const allProjects = useMemo(() => {
    return MAJORS_DATA.flatMap(m => 
      m.projects.map(p => ({ ...p, majorCode: m.shortCode, majorId: m.id, majorNameMm: m.nameMm }))
    );
  }, []);

  // Filter projects by search query and/or selected major filter
  const displayedProjects = useMemo(() => {
    let result = allProjects;

    if (selectedMajorFilter !== 'ALL') {
      result = result.filter(p => p.majorId === selectedMajorFilter || p.majorCode.toUpperCase() === selectedMajorFilter.toUpperCase());
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.titleMm.includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.majorCode.toLowerCase().includes(q) ||
        (p.supervisor && p.supervisor.toLowerCase().includes(q))
      );
    }

    return result;
  }, [allProjects, selectedMajorFilter, searchQuery]);

  const totalProjectsCount = allProjects.length;

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-pill">
          <Sparkles size={13} />
          <span>Project Show & Exhibition</span>
        </div>

        <h2 className="hero-title">{SHOW_INFO.titleMm}</h2>
        <p className="hero-sub">{SHOW_INFO.university}</p>

        <div className="hero-meta">
          <div className="meta-item">
            <Calendar size={14} />
            <span>{SHOW_INFO.date}</span>
          </div>
          <div className="meta-item">
            <MapPin size={14} />
            <span>{SHOW_INFO.location}</span>
          </div>
        </div>
      </section>

      {/* Event Stats Metric Bar */}
      <div className="event-stats-bar">
        <Link to="/majors" className="stat-item" style={{ cursor: 'pointer' }}>
          <span className="stat-number">10</span>
          <span className="stat-label">မေဂျာများ (ကြည့်ရန်)</span>
        </Link>
        <div className="stat-item">
          <span className="stat-number">{totalProjectsCount}</span>
          <span className="stat-label">ပရောဂျက်များ</span>
        </div>
        <Link to="/info" className="stat-item" style={{ cursor: 'pointer' }}>
          <span className="stat-number">7</span>
          <span className="stat-label">ပြခန်းဆောင် လမ်းညွှန်</span>
        </Link>
      </div>

      {/* Global Search Bar */}
      <div className="search-container">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            className="search-input"
            placeholder="မေဂျာ၊ ပရောဂျက် သို့မဟုတ် ကြီးကြပ်ဆရာမ အမည် ရှာပါ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')} aria-label="Clear Search">
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Department Filter Chips Carousel */}
      <div className="filter-carousel-wrapper">
        <div className="filter-chips">
          <button 
            className={`chip-btn ${selectedMajorFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedMajorFilter('ALL')}
          >
            အားလုံး (All Projects)
          </button>
          {MAJORS_DATA.map(major => (
            <button
              key={major.id}
              className={`chip-btn ${selectedMajorFilter === major.id ? 'active' : ''}`}
              onClick={() => setSelectedMajorFilter(selectedMajorFilter === major.id ? 'ALL' : major.id)}
            >
              {major.logo && (
                <img src={major.logo} alt="" className="chip-logo" />
              )}
              <span>{major.shortCode}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Project Showcase Feed */}
      <div className="main-content">
        <div className="section-header">
          <h3 className="section-title">
            <Layers size={18} />
            {searchQuery 
              ? `"${searchQuery}" ရှာဖွေတွေ့ရှိချက်များ` 
              : selectedMajorFilter !== 'ALL' 
                ? `${selectedMajorFilter.toUpperCase()} ပရောဂျက်များ` 
                : 'ပြပွဲ ပရောဂျက်များ အားလုံး'}
          </h3>
          <span className="section-badge">{displayedProjects.length} Projects</span>
        </div>

        {displayedProjects.length > 0 ? (
          <div className="project-list">
            {displayedProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project}
                majorCode={project.majorCode}
                isBookmarked={bookmarks.includes(project.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={36} />
            <h3>ရှာဖွေမှုမတွေ့ရှိပါ</h3>
            <p>"{searchQuery}" နှင့် ကိုက်ညီသော ပရောဂျက် မရှိသေးပါ။ အခြားစကားလုံးဖြင့် ထပ်မံရှာဖွေကြည့်ပါ။</p>
          </div>
        )}
      </div>
    </div>
  );
}
