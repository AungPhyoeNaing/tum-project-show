import React, { useState } from 'react';
import { Bookmark, Users, Award, Maximize2, FileText, Download } from 'lucide-react';

export default function CeitPamphletCard({ 
  project, 
  pamphletData, 
  isBookmarked, 
  onToggleBookmark, 
  onOpenLightbox 
}) {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const pages = pamphletData?.pageImages || [];
  const pageLabels = pamphletData?.pageLabels || [];
  const currentImage = pages[activePageIndex] || '';

  return (
    <div className="ceit-pamphlet-card">
      {/* Project Header Info */}
      <div className="pamphlet-card-header">
        <div className="pamphlet-titles-block">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="pamphlet-dept-badge">CEIT Pamphlet</span>
            <span className="pamphlet-pages-pill">{pages.length} Pages</span>
          </div>
          <h3 className="pamphlet-project-title">{project.title}</h3>
          <h4 className="pamphlet-project-title-mm">{project.titleMm}</h4>
        </div>

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

      {/* Page Switcher Tabs (Front / Back) */}
      {pages.length > 1 && (
        <div className="pamphlet-page-switcher">
          {pages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`pamphlet-switch-tab ${activePageIndex === idx ? 'active' : ''}`}
              onClick={() => setActivePageIndex(idx)}
            >
              <FileText size={13} />
              <span>{pageLabels[idx] || `Page ${idx + 1}`}</span>
            </button>
          ))}
        </div>
      )}

      {/* High-Resolution Interactive Pamphlet Page Preview */}
      <div 
        className="pamphlet-preview-container"
        onClick={() => onOpenLightbox(project, activePageIndex)}
        role="button"
        tabIndex={0}
        aria-label="Tap to view pamphlet in full screen"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenLightbox(project, activePageIndex);
          }
        }}
      >
        {currentImage ? (
          <img
            src={currentImage}
            alt={`${project.title} - Page ${activePageIndex + 1}`}
            className="pamphlet-preview-img"
            loading="lazy"
          />
        ) : (
          <div className="empty-state" style={{ padding: '30px' }}>
            <FileText size={40} />
            <p>Pamphlet preview loading...</p>
          </div>
        )}

        {/* Hover / Tap to Zoom Overlay Hint */}
        <div className="pamphlet-expand-overlay">
          <div className="expand-pill">
            <Maximize2 size={15} />
            <span>နှိပ်၍ အကြီးချဲ့ကြည့်ရှုပါ (Tap to Zoom)</span>
          </div>
        </div>
      </div>

      {/* Team, Supervisor and Action Bar */}
      <div className="pamphlet-meta-footer">
        {project.supervisor && (
          <div className="pamphlet-supervisor">
            <Award size={14} className="supervisor-icon" />
            <span className="supervisor-label">ကြီးကြပ်သူ:</span>
            <span className="supervisor-name">{project.supervisor}</span>
          </div>
        )}

        {project.team && project.team.length > 0 && (
          <div className="pamphlet-team">
            <Users size={14} />
            <span>{project.team.join('၊ ')}</span>
          </div>
        )}

        {/* Action Links */}
        <div className="pamphlet-actions-row">
          {pamphletData?.pdfUrl && (
            <a
              href={pamphletData.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="pamphlet-pdf-link-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <Download size={14} />
              <span>မူရင်း PDF ဒေါင်းလုဒ် (PDF)</span>
            </a>
          )}

          <button
            type="button"
            className="pamphlet-fullscreen-btn"
            onClick={() => onOpenLightbox(project, activePageIndex)}
          >
            <Maximize2 size={14} />
            <span>အပြည့်ကြည့်ရှုရန်</span>
          </button>
        </div>
      </div>
    </div>
  );
}
