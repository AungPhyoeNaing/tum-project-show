import React, { useState } from 'react';
import { MAJORS_DATA, SHOW_INFO } from '../data/mockData';
import MajorCard from '../components/MajorCard';
import ProjectCard from '../components/ProjectCard';
import { Search, X, Calendar, MapPin, Sparkles, Layers } from 'lucide-react';

export default function Home({ bookmarks, onToggleBookmark }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all projects across all majors
  const allProjects = MAJORS_DATA.flatMap(m => 
    m.projects.map(p => ({ ...p, majorCode: m.shortCode, majorId: m.id, majorNameMm: m.nameMm }))
  );

  // Filter projects if search query exists
  const filteredProjects = searchQuery.trim() === '' 
    ? [] 
    : allProjects.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.titleMm.includes(searchQuery) ||
        p.description.includes(searchQuery) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.majorCode.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const filteredMajors = searchQuery.trim() === ''
    ? MAJORS_DATA
    : MAJORS_DATA.filter(m => 
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.nameMm.includes(searchQuery) ||
        m.shortCode.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-pill">
          <Sparkles size={14} />
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
            <span>TUM Campus, Mandalay</span>
          </div>
        </div>
      </section>

      {/* Global Search Bar */}
      <div className="search-container">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            className="search-input"
            placeholder="မေဂျာ၊ ပရောဂျက်အမည် သို့မဟုတ် နည်းပညာ ရှာဖွေပါ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="main-content">
        {/* If user is searching, display matching search results */}
        {searchQuery.trim() !== '' ? (
          <div>
            <div className="section-header">
              <h3 className="section-title">
                <Search size={18} />
                ရှာဖွေတွေ့ရှိချက်များ
              </h3>
              <span className="section-badge">{filteredProjects.length} Projects</span>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="project-list">
                {filteredProjects.map(project => (
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
                <p>"{searchQuery}" နှင့် ကိုက်ညီသော ပရောဂျက် သို့မဟုတ် မေဂျာ မရှိသေးပါ။</p>
              </div>
            )}
          </div>
        ) : (
          /* Default View: 10 Majors Grid */
          <div>
            <div className="section-header">
              <h3 className="section-title">
                <Layers size={18} />
                မေဂျာ (၁၀) ခု
              </h3>
              <span className="section-badge">10 Departments</span>
            </div>

            <div className="major-grid">
              {filteredMajors.map(major => (
                <MajorCard key={major.id} major={major} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
