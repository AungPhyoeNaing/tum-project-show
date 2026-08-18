import React, { useState, useEffect } from 'react';
import { X, Bookmark, Share2, Check, Users, Award, Sparkles, Tag } from 'lucide-react';

export default function ProjectDetailModal({ project, major, isBookmarked, onToggleBookmark, onClose }) {
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/project/${project.id}`;
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: `${project.title} - ${project.titleMm}`,
        url: shareUrl,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-major-badge">
            {major?.logo && (
              <img 
                src={major.logo} 
                alt="" 
                className="modal-major-logo"
                onError={(e) => { e.target.src = '/logos/CEIT_2026_logo.PNG'; }}
              />
            )}
            <div>
              <span className="modal-major-code">{major?.shortCode || project.majorCode} Department</span>
              <span className="modal-major-name-mm">{major?.nameMm || project.majorNameMm}</span>
            </div>
          </div>

          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Action Bar */}
          <div className="modal-actions-bar">
            <button 
              type="button"
              className={`modal-btn bookmark-action ${isBookmarked ? 'active' : ''}`}
              onClick={() => onToggleBookmark(project.id)}
            >
              <Bookmark size={16} fill={isBookmarked ? '#f59e0b' : 'none'} color={isBookmarked ? '#f59e0b' : 'currentColor'} />
              <span>{isBookmarked ? 'သိမ်းဆည်းပြီး' : 'မှတ်သားသိမ်းဆည်းမည်'}</span>
            </button>

            <button 
              type="button"
              className="modal-btn share-action"
              onClick={handleShare}
            >
              {copied ? <Check size={16} color="#16a34a" /> : <Share2 size={16} />}
              <span>{copied ? 'လင့်ခ်ကူးယူပြီးပါပြီ' : 'ပရောဂျက် မျှဝေရန်'}</span>
            </button>
          </div>

          {/* Project Titles */}
          <div className="modal-title-group">
            <h2 id="modal-project-title" className="modal-title-en">
              {project.title}
            </h2>
            <h3 className="modal-title-mm">
              {project.titleMm}
            </h3>
            {project.tagline && (
              <p className="modal-tagline">{project.tagline}</p>
            )}
          </div>

          {/* Description */}
          <div className="modal-section">
            <h4 className="modal-section-title">
              ပရောဂျက် ရှင်းလင်းချက် (Abstract)
            </h4>
            <p className="modal-description">{project.description}</p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <Sparkles size={16} className="feature-icon" />
                အဓိက အင်္ဂါရပ်များနှင့် လုပ်ဆောင်ချက်များ
              </h4>
              <ul className="modal-feature-list">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <Check size={16} className="modal-check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Team & Supervisor Details */}
          <div className="modal-metadata-grid">
            <div className="metadata-card">
              <div className="metadata-card-header">
                <Users size={16} />
                <span>ပြုလုပ်သည့် ကျောင်းသားအဖွဲ့ (Team)</span>
              </div>
              <p className="metadata-card-body">
                {project.team && project.team.length > 0 ? project.team.join('၊ ') : 'ကျောင်းသားအဖွဲ့'}
              </p>
            </div>

            <div className="metadata-card">
              <div className="metadata-card-header">
                <Award size={16} />
                <span>ကြီးကြပ်သူ ဆရာ/ဆရာမ (Supervisor)</span>
              </div>
              <p className="metadata-card-body supervisor-text">
                {project.supervisor || 'Department Faculty'}
              </p>
            </div>
          </div>

          {/* Technology Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">
                <Tag size={15} /> နည်းပညာ သော့ချက်စာလုံးများ (Tags)
              </h4>
              <div className="modal-tag-cloud">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="modal-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>
            ပိတ်မည်
          </button>
        </div>
      </div>
    </div>
  );
}
