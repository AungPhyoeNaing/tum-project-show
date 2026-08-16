import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Users, ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, majorCode, isBookmarked, onToggleBookmark }) {
  return (
    <div className="project-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        {majorCode ? (
          <span className="project-booth-badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)', borderColor: '#bfdbfe', fontWeight: 800 }}>
            {majorCode} Department
          </span>
        ) : <div />}

        <button 
          className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleBookmark(project.id);
          }}
          title={isBookmarked ? "Remove Bookmark" : "Save Project"}
          aria-label={isBookmarked ? "Remove Bookmark" : "Save Project"}
        >
          <Bookmark size={17} fill={isBookmarked ? "#f59e0b" : "none"} />
        </button>
      </div>

      <Link to={`/project/${project.id}`} style={{ display: 'block' }}>
        <h3 className="project-title">{project.title}</h3>
        <h4 className="project-title-mm">{project.titleMm}</h4>

        <p className="project-desc">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag-pill">{tag}</span>
          ))}
        </div>

        <div className="project-footer">
          <div className="project-team">
            <Users size={14} />
            <span>{project.team ? project.team.join(', ') : 'Student Team'}</span>
          </div>

          <span style={{ color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '2px' }}>
            ကြည့်ရှုရန် <ChevronRight size={14} />
          </span>
        </div>
      </Link>
    </div>
  );
}
