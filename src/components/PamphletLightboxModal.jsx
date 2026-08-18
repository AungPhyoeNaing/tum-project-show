import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ChevronLeft, ChevronRight, FileText } from 'lucide-react';

export default function PamphletLightboxModal({ project, pamphletData, initialPageIndex = 0, onClose }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const pages = pamphletData?.pageImages || [];
  const pageLabels = pamphletData?.pageLabels || [];
  const currentImage = pages[currentPageIndex] || '';

  // Close on Escape, arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentPageIndex < pages.length - 1) {
        setCurrentPageIndex(prev => prev + 1);
        resetZoom();
      }
      if (e.key === 'ArrowLeft' && currentPageIndex > 0) {
        setCurrentPageIndex(prev => prev - 1);
        resetZoom();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentPageIndex, pages.length, onClose]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.35, 3.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const next = Math.max(prev - 0.35, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  // Drag / Pan handling
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Double tap / double click zoom
  const handleDoubleClick = () => {
    if (zoomLevel > 1) {
      resetZoom();
    } else {
      setZoomLevel(2);
    }
  };

  return (
    <div className="pamphlet-lightbox-overlay" onClick={onClose}>
      <div 
        className="pamphlet-lightbox-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Bar */}
        <div className="lightbox-topbar">
          <div className="lightbox-title-area">
            <h3 className="lightbox-project-title">{project.title}</h3>
            <span className="lightbox-page-indicator">
              {pageLabels[currentPageIndex] || `Page ${currentPageIndex + 1} / ${pages.length}`}
            </span>
          </div>

          <div className="lightbox-actions">
            {/* Zoom Controls */}
            <div className="lightbox-zoom-controls">
              <button 
                type="button" 
                className="lightbox-btn" 
                onClick={handleZoomOut} 
                title="Zoom Out"
                disabled={zoomLevel <= 1}
              >
                <ZoomOut size={18} />
              </button>
              <button 
                type="button" 
                className="lightbox-btn" 
                onClick={resetZoom} 
                title="Reset Zoom"
              >
                <RotateCcw size={16} />
              </button>
              <button 
                type="button" 
                className="lightbox-btn" 
                onClick={handleZoomIn} 
                title="Zoom In"
                disabled={zoomLevel >= 3.5}
              >
                <ZoomIn size={18} />
              </button>
            </div>

            {/* Download PDF Button */}
            {pamphletData?.pdfUrl && (
              <a
                href={pamphletData.pdfUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="lightbox-download-btn"
                title="Download Original PDF"
              >
                <Download size={16} />
                <span className="download-label">PDF</span>
              </a>
            )}

            {/* Close Button */}
            <button 
              type="button" 
              className="lightbox-close-btn" 
              onClick={onClose}
              title="Close"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Pamphlet Viewport Area */}
        <div 
          className="lightbox-viewport"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onDoubleClick={handleDoubleClick}
        >
          {currentImage ? (
            <img
              src={currentImage}
              alt={`${project.title} - Page ${currentPageIndex + 1}`}
              className="lightbox-pamphlet-img"
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
              }}
              draggable={false}
            />
          ) : (
            <div className="empty-state">
              <FileText size={48} />
              <p>Pamphlet page not available</p>
            </div>
          )}
        </div>

        {/* Bottom Navigation & Page Switcher */}
        {pages.length > 1 && (
          <div className="lightbox-bottombar">
            <button
              type="button"
              className="lightbox-nav-btn prev-btn"
              onClick={() => {
                setCurrentPageIndex(prev => Math.max(prev - 1, 0));
                resetZoom();
              }}
              disabled={currentPageIndex === 0}
            >
              <ChevronLeft size={18} />
              <span>ရှေ့စာမျက်နှာ</span>
            </button>

            <div className="lightbox-page-tabs">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`lightbox-page-tab ${currentPageIndex === idx ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentPageIndex(idx);
                    resetZoom();
                  }}
                >
                  {pageLabels[idx] || `Page ${idx + 1}`}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="lightbox-nav-btn next-btn"
              onClick={() => {
                setCurrentPageIndex(prev => Math.min(prev + 1, pages.length - 1));
                resetZoom();
              }}
              disabled={currentPageIndex === pages.length - 1}
            >
              <span>နောက်စာမျက်နှာ</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
