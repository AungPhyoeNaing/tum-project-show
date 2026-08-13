import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MAJORS_DATA } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';
import { ArrowLeft, Search, Layers, AlertTriangle } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function Major({ bookmarks, onToggleBookmark }) {
  const { majorId } = useParams();
  const [filterQuery, setFilterQuery] = useState('');

  const major = MAJORS_DATA.find(m => m.id === majorId);

  if (!major) {
    return (
      <div className="main-content" style={{ paddingTop: '20px' }}>
        <div className="empty-state">
          <AlertTriangle size={40} />
          <h3>မေဂျာ မတွေ့ရှိပါ</h3>
          <p>တောင်းဆိုထားသော မေဂျာ မရှိပါ။</p>
          <Link to="/" className="back-btn" style={{ marginTop: '16px', display: 'inline-flex' }}>
            <ArrowLeft size={16} /> ပင်မစာမျက်နှာသို့ ပြန်သွားရန်
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[major.iconName] || Icons.Folder;

  const projects = major.projects.filter(p => 
    p.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    p.titleMm.includes(filterQuery) ||
    p.description.includes(filterQuery) ||
    p.tags.some(t => t.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="main-content" style={{ paddingTop: '16px' }}>
      <Link to="/" className="back-btn">
        <ArrowLeft size={16} /> မေဂျာများ သို့ ပြန်သွားရန်
      </Link>

      {/* Major Detail Header Banner */}
      <div className="detail-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div className="major-icon-box" style={{ backgroundColor: major.accentColor || '#1e3a8a', width: '44px', height: '44px' }}>
            <IconComponent size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>{major.shortCode} Major</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>{major.nameMm}</p>
          </div>
        </div>
        <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
          {major.description}
        </p>
      </div>

      {/* Search within Major */}
      <div className="search-box" style={{ marginBottom: '16px' }}>
        <Search size={18} className="search-icon" />
        <input 
          type="text"
          className="search-input"
          placeholder={`${major.shortCode} ပရောဂျက်များထဲမှ ရှာပါ...`}
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      </div>

      {/* Projects List */}
      <div className="section-header">
        <h3 className="section-title">
          <Layers size={18} />
          {major.shortCode} ပရောဂျက်များ
        </h3>
        <span className="section-badge">{projects.length} Projects</span>
      </div>

      {projects.length > 0 ? (
        <div className="project-list">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              majorCode={major.shortCode}
              isBookmarked={bookmarks.includes(project.id)}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={36} />
          <h3>ပရောဂျက် မတွေ့ရှိပါ</h3>
          <p>ဒီမေဂျာအောက်တွင် ရှာဖွေမှုနှင့် ကိုက်ညီသော ပရောဂျက် မရှိပါ။</p>
        </div>
      )}
    </div>
  );
}
