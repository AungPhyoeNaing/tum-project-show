import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Bookmark, Users, Award, Maximize2, FileText, Download } from 'lucide-react';

export default function PamphletCard({ 
  project, 
  majorCode,
  pamphletData, 
  isBookmarked, 
  onToggleBookmark, 
  onOpenLightbox 
}) {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const pageCount = pamphletData?.pageCount || pamphletData?.pageImages?.length || 1;
  const pageLabels = pamphletData?.pageLabels || Array.from({ length: pageCount }, (_, i) => `စာမျက်နှာ ${i + 1}`);
  const pages = pamphletData?.pageImages || [];
  const currentImage = pages[activePageIndex] || '';

  return (
    <div className="pamphlet-project-card">
      {/* Project Header Info */}
      <div className="pamphlet-card-header">
        <div className="pamphlet-titles-block">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="pamphlet-dept-badge">{majorCode || 'Project'} Pamphlet</span>
            <span className="pamphlet-pages-pill">{pageCount} Pages</span>
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
      {pageCount > 1 && (
        <div className="pamphlet-page-switcher">
          {Array.from({ length: pageCount }).map((_, idx) => (
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
        {pamphletData?.pdfUrl ? (
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
            <Document
              file={pamphletData.pdfUrl}
              loading={
                <div className="empty-state" style={{ padding: '30px' }}>
                  <FileText size={40} />
                  <p>Pamphlet preview loading...</p>
                </div>
              }
            >
              <Page
                pageNumber={activePageIndex + 1}
                width={360}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        ) : currentImage ? (
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

      {/* Team and Action Bar */}
      <div className="pamphlet-meta-footer">
        {/* Supervisor hidden for now */}
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
