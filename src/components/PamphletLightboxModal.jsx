import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, ChevronLeft, ChevronRight, FileText, Move } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PamphletLightboxModal({ project, pamphletData, initialPageIndex = 0, onClose }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(initialPageIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 800);

  const viewportRef = useRef(null);
  const imgRef = useRef(null);

  // Gesture tracking refs
  const gestureRef = useRef({
    startDist: 0,
    startZoom: 1,
    startPan: { x: 0, y: 0 },
    startCenter: { x: 0, y: 0 },
    lastSingleTouch: null,
    swipeStartX: 0,
    swipeStartY: 0,
    lastTapTime: 0,
    lastTapPos: { x: 0, y: 0 },
    isMouseDown: false,
    mouseStart: { x: 0, y: 0 },
  });

  const pages = pamphletData?.pageImages || [];
  const pageLabels = pamphletData?.pageLabels || [];
  const currentImage = pages[currentPageIndex] || '';

  const resetZoom = useCallback(() => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    setIsInteracting(false);
  }, []);

  const clampPan = useCallback((currentZoom, pos = position) => {
    if (currentZoom <= 1.05) {
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
      return;
    }
    const viewport = viewportRef.current;
    if (!viewport) return;

    const vRect = viewport.getBoundingClientRect();
    const maxPanX = Math.max(0, (vRect.width * (currentZoom - 1)) / 1.8 + 120);
    const maxPanY = Math.max(0, (vRect.height * (currentZoom - 1)) / 1.8 + 120);

    setPosition({
      x: Math.min(Math.max(pos.x, -maxPanX), maxPanX),
      y: Math.min(Math.max(pos.y, -maxPanY), maxPanY),
    });
  }, [position]);

  // Keyboard navigation & zoom shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && currentPageIndex < pages.length - 1) {
        setCurrentPageIndex(prev => prev + 1);
        resetZoom();
      } else if (e.key === 'ArrowLeft' && currentPageIndex > 0) {
        setCurrentPageIndex(prev => prev - 1);
        resetZoom();
      } else if (e.key === '+' || e.key === '=') {
        setZoomLevel(prev => Math.min(prev + 0.4, 5));
      } else if (e.key === '-' || e.key === '_') {
        setZoomLevel(prev => {
          const next = Math.max(prev - 0.4, 1);
          if (next === 1) setPosition({ x: 0, y: 0 });
          return next;
        });
      } else if (e.key === '0' || e.key === 'r' || e.key === 'R') {
        resetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentPageIndex, pages.length, onClose, resetZoom]);

  // Prevent native browser pinch-to-zoom on iOS/Android devices
  useEffect(() => {
    const blockNativeZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
    };
    // iOS Safari uses gesturestart/gesturechange for pinch - must block these too
    const blockGesture = (e) => { e.preventDefault(); };
    
    document.addEventListener('touchmove', blockNativeZoom, { passive: false });
    document.addEventListener('gesturestart', blockGesture, { passive: false });
    document.addEventListener('gesturechange', blockGesture, { passive: false });
    return () => {
      document.removeEventListener('touchmove', blockNativeZoom);
      document.removeEventListener('gesturestart', blockGesture);
      document.removeEventListener('gesturechange', blockGesture);
    };
  }, []);

  // Track viewport width for responsive PDF sizing
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse wheel & trackpad pinch zoom
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.18 : 0.85;
      setZoomLevel((prevZoom) => {
        const nextZoom = Math.min(Math.max(prevZoom * zoomFactor, 1), 5);
        if (nextZoom === 1) {
          setPosition({ x: 0, y: 0 });
        }
        return nextZoom;
      });
    };

    viewport.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      viewport.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  // Touch handlers: Pinch-to-zoom + 1-finger move/drag + swipe
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const now = Date.now();
      const lastTap = gestureRef.current.lastTapPos;
      const distFromLastTap = Math.hypot(touch.clientX - lastTap.x, touch.clientY - lastTap.y);

      // Double tap detected
      if (now - gestureRef.current.lastTapTime < 320 && distFromLastTap < 40) {
        if (zoomLevel > 1.1) {
          resetZoom();
        } else {
          setZoomLevel(2.5);
          const rect = viewportRef.current?.getBoundingClientRect();
          if (rect) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tapOffsetX = touch.clientX - rect.left - centerX;
            const tapOffsetY = touch.clientY - rect.top - centerY;
            setPosition({
              x: -tapOffsetX * 1.2,
              y: -tapOffsetY * 1.2,
            });
          }
        }
        gestureRef.current.lastTapTime = 0;
        return;
      }

      gestureRef.current.lastTapTime = now;
      gestureRef.current.lastTapPos = { x: touch.clientX, y: touch.clientY };
      gestureRef.current.lastSingleTouch = { x: touch.clientX, y: touch.clientY };
      gestureRef.current.swipeStartX = touch.clientX;
      gestureRef.current.swipeStartY = touch.clientY;
      setIsInteracting(true);
    } else if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      const center = {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2,
      };

      gestureRef.current.startDist = dist;
      gestureRef.current.startZoom = zoomLevel;
      gestureRef.current.startPan = { ...position };
      gestureRef.current.startCenter = center;
      setIsInteracting(true);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && gestureRef.current.lastSingleTouch) {
      const touch = e.touches[0];
      const dx = touch.clientX - gestureRef.current.lastSingleTouch.x;
      const dy = touch.clientY - gestureRef.current.lastSingleTouch.y;

      if (zoomLevel > 1) {
        setPosition(prev => ({
          x: prev.x + dx,
          y: prev.y + dy,
        }));
        gestureRef.current.lastSingleTouch = { x: touch.clientX, y: touch.clientY };
      }
    } else if (e.touches.length === 2 && gestureRef.current.startDist > 0) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      const center = {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2,
      };

      const scaleRatio = dist / gestureRef.current.startDist;
      const newZoom = Math.min(Math.max(gestureRef.current.startZoom * scaleRatio, 1), 5);

      const centerDx = center.x - gestureRef.current.startCenter.x;
      const centerDy = center.y - gestureRef.current.startCenter.y;

      setZoomLevel(newZoom);
      if (newZoom <= 1.02) {
        setPosition({ x: 0, y: 0 });
      } else {
        setPosition({
          x: gestureRef.current.startPan.x + centerDx,
          y: gestureRef.current.startPan.y + centerDy,
        });
      }
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length === 0) {
      setIsInteracting(false);
      gestureRef.current.startDist = 0;

      // Page swipe when at 1x zoom
      if (zoomLevel <= 1.08 && gestureRef.current.swipeStartX) {
        const touch = e.changedTouches[0];
        if (touch) {
          const deltaX = touch.clientX - gestureRef.current.swipeStartX;
          const deltaY = touch.clientY - gestureRef.current.swipeStartY;

          if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
            if (deltaX < 0 && currentPageIndex < pages.length - 1) {
              setCurrentPageIndex(prev => prev + 1);
              resetZoom();
            } else if (deltaX > 0 && currentPageIndex > 0) {
              setCurrentPageIndex(prev => prev - 1);
              resetZoom();
            }
          }
        }
      }

      clampPan(zoomLevel);
    } else if (e.touches.length === 1) {
      const touch = e.touches[0];
      gestureRef.current.lastSingleTouch = { x: touch.clientX, y: touch.clientY };
      gestureRef.current.startDist = 0;
    }
  };

  // Mouse handlers (Desktop pan & drag)
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    gestureRef.current.isMouseDown = true;
    gestureRef.current.mouseStart = { x: e.clientX, y: e.clientY };
    gestureRef.current.startPan = { ...position };
    setIsInteracting(true);
  };

  const handleMouseMove = (e) => {
    if (!gestureRef.current.isMouseDown) return;
    const dx = e.clientX - gestureRef.current.mouseStart.x;
    const dy = e.clientY - gestureRef.current.mouseStart.y;
    if (zoomLevel > 1) {
      setPosition({
        x: gestureRef.current.startPan.x + dx,
        y: gestureRef.current.startPan.y + dy,
      });
    }
  };

  const handleMouseUp = () => {
    if (gestureRef.current.isMouseDown) {
      gestureRef.current.isMouseDown = false;
      setIsInteracting(false);
      clampPan(zoomLevel);
    }
  };

  // Double click on desktop
  const handleDoubleClick = (e) => {
    if (zoomLevel > 1.1) {
      resetZoom();
    } else {
      setZoomLevel(2.5);
      const rect = viewportRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tapOffsetX = e.clientX - rect.left - centerX;
        const tapOffsetY = e.clientY - rect.top - centerY;
        setPosition({
          x: -tapOffsetX * 1.2,
          y: -tapOffsetY * 1.2,
        });
      }
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
                title="Zoom Out (-)"
                disabled={zoomLevel <= 1}
                aria-label="Zoom Out"
              >
                <ZoomOut size={17} />
              </button>

              <button 
                type="button" 
                className="lightbox-zoom-badge-btn" 
                onClick={resetZoom} 
                title="Reset Zoom (0)"
                aria-label="Reset Zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>

              <button 
                type="button" 
                className="lightbox-btn" 
                onClick={handleZoomIn} 
                title="Zoom In (+)"
                disabled={zoomLevel >= 5}
                aria-label="Zoom In"
              >
                <ZoomIn size={17} />
              </button>

              {zoomLevel > 1 && (
                <button 
                  type="button" 
                  className="lightbox-btn" 
                  onClick={resetZoom} 
                  title="Reset (0)"
                  aria-label="Reset View"
                >
                  <RotateCcw size={15} />
                </button>
              )}
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
              title="Close (Esc)"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Pamphlet Viewport Area */}
        <div 
          ref={viewportRef}
          className="lightbox-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onDoubleClick={handleDoubleClick}
        >
          {pamphletData?.pdfUrl ? (
            <div 
              className="lightbox-img-transform-wrapper"
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${zoomLevel})`,
                transformOrigin: 'center center',
                transition: isInteracting ? 'none' : 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: zoomLevel > 1 ? (isInteracting ? 'grabbing' : 'grab') : 'zoom-in',
                willChange: 'transform',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Document
                file={pamphletData.pdfUrl}
                loading={
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.7)' }}>
                    <div className="pdf-spinner" style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                    <span>Loading High-Res PDF...</span>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  </div>
                }
                className="lightbox-pdf-document"
              >
                <Page
                  pageNumber={currentPageIndex + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="lightbox-pamphlet-pdf-page"
                  width={viewportWidth < 768 ? viewportWidth * 0.92 : viewportWidth * 0.7}
                  devicePixelRatio={4}
                />
              </Document>
            </div>
          ) : currentImage ? (
            <div 
              className="lightbox-img-transform-wrapper"
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${zoomLevel})`,
                transformOrigin: 'center center',
                transition: isInteracting ? 'none' : 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: zoomLevel > 1 ? (isInteracting ? 'grabbing' : 'grab') : 'zoom-in',
                willChange: 'transform',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <img
                ref={imgRef}
                src={currentImage}
                alt={`${project.title} - Page ${currentPageIndex + 1}`}
                className="lightbox-pamphlet-img"
                draggable={false}
              />
            </div>
          ) : (
            <div className="empty-state">
              <FileText size={48} />
              <p>Pamphlet page not available</p>
            </div>
          )}

          {/* Touch Gesture Floating Hint (disappears when zoomed) */}
          {zoomLevel <= 1 && (
            <div className="lightbox-gesture-pill">
              <Move size={13} />
              <span>Pinch သို့မဟုတ် ၂ ချက်နှိပ်၍ အကြီးချဲ့ကြည့်ရှုနိုင်ပါသည်</span>
            </div>
          )}

          {/* Quick Page Overlay Navigation Arrows (for easy touch access) */}
          {pages.length > 1 && (
            <>
              {currentPageIndex > 0 && (
                <button
                  type="button"
                  className="lightbox-floating-nav-btn prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPageIndex(prev => Math.max(prev - 1, 0));
                    resetZoom();
                  }}
                  aria-label="Previous Page"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {currentPageIndex < pages.length - 1 && (
                <button
                  type="button"
                  className="lightbox-floating-nav-btn next"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPageIndex(prev => Math.min(prev + 1, pages.length - 1));
                    resetZoom();
                  }}
                  aria-label="Next Page"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </>
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
