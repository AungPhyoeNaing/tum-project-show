import React from 'react';
import { Bookmark, Award, ChevronRight } from 'lucide-react';

export default function ProjectCard({ project, majorCode, isBookmarked, onToggleBookmark, onSelectProject }) {
  const handleClick = (e) => {
    // If user clicked bookmark button, don't open modal
    if (e.target.closest('.bookmark-btn')) return;
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <div 
      className="project-card" 
      onClick={handleClick} 
      role="button" 
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onSelectProject) onSelectProject(project);
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      <div className="project-card-header">
        <span className="project-major-badge">
          {majorCode || project.majorCode} Department
        </span>

        <button 
          type="button"
          className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(project.id);
          }}
          title={isBookmarked ? "စာရင်းမှ ဖျက်မည်" : "သိမ်းဆည်းမည်"}
          aria-label={isBookmarked ? "Remove Bookmark" : "Save Project"}
        >
          <Bookmark size={17} fill={isBookmarked ? "#f59e0b" : "none"} color={isBookmarked ? "#f59e0b" : "currentColor"} />
        </button>
      </div>

      <div className="project-card-titles">
        <h3 className="project-title">{project.title}</h3>
      </div>

      <p className="project-desc">{project.description}</p>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="project-tags">
          {project.tags.slice(0, 5).map((tag, idx) => (
            <span key={idx} className="tag-pill">{tag}</span>
          ))}
          {project.tags.length > 5 && (
            <span className="tag-pill more-tags">+{project.tags.length - 5}</span>
          )}
        </div>
      )}

      {/* Supervisor Preview if available */}
      {project.supervisor && (
        <div className="project-supervisor-snippet">
          <Award size={13} className="supervisor-icon" />
          <span className="supervisor-label">ကြီးကြပ်သူ:</span>
          <span className="supervisor-name">{project.supervisor}</span>
        </div>
      )}

      <div className="project-footer" style={{ justifyContent: 'flex-end' }}>
        <button 
          type="button" 
          className="project-view-btn"
          onClick={(e) => {
            e.stopPropagation();
            if (onSelectProject) onSelectProject(project);
          }}
        >
          <span>ကြည့်ရှုရန်</span>
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
