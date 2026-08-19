import React, { useState, useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf';
import { Bookmark, Maximize2, FileText } from 'lucide-react';

export default function PamphletCard({ 
  project, 
  majorCode,
  pamphletData, 
  isBookmarked, 
  onToggleBookmark, 
  onOpenLightbox 
}) {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '350px 0px', // Pre-load 350px before scrolling into view
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pageCount = pamphletData?.pageCount || pamphletData?.pageImages?.length || 1;
  const pageLabels = pamphletData?.pageLabels || Array.from({ length: pageCount }, (_, i) => `စာမျက်နှာ ${i + 1}`);
  const pages = pamphletData?.pageImages || [];
  const currentImage = pages[activePageIndex] || '';

  const previewWidth = typeof window !== 'undefined' ? Math.min(window.innerWidth - 64, 520) : 340;

  return (
    <div className="pamphlet-project-card" ref={cardRef}>
      {/* Project Header Info */}
      <div className="pamphlet-card-header">
        <div className="pamphlet-titles-block">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span className="pamphlet-dept-badge">{majorCode || 'Project'} Pamphlet</span>
            <span className="pamphlet-pages-pill">{pageCount} Pages</span>
          </div>
          <h3 className="pamphlet-project-title">{project.title}</h3>
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
          isVisible ? (
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
              <Document
                file={pamphletData.pdfUrl}
                loading={
                  <div className="empty-state" style={{ padding: '30px', minHeight: '220px' }}>
                    <FileText size={40} />
                    <p>Pamphlet preview loading...</p>
                  </div>
                }
              >
                <Page
                  pageNumber={activePageIndex + 1}
                  width={previewWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </div>
          ) : (
            <div className="empty-state" style={{ padding: '40px 20px', minHeight: '220px' }}>
              <FileText size={40} color="var(--primary)" style={{ opacity: 0.4 }} />
              <p style={{ marginTop: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>Pamphlet Preview</p>
            </div>
          )
        ) : currentImage ? (
          <img
            src={currentImage}
            alt={`${project.title} - Page ${activePageIndex + 1}`}
            className="pamphlet-preview-img"
            loading="lazy"
          />
        ) : (
          <div className="empty-state" style={{ padding: '30px', minHeight: '220px' }}>
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

    </div>
  );
}
