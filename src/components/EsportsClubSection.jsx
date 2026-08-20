import React, { useState } from 'react';
import { Gamepad2, Maximize2, FileText } from 'lucide-react';
import PamphletLightboxModal from './PamphletLightboxModal';

const ESPORTS_DATA = {
  id: 'tum-esports',
  title: 'TUM Esports Club (TUMEA)',
  titleMm: 'နည်းပညာတက္ကသိုလ် (မန္တလေး) Esports Club',
  pages: [
    '/esports/esports-flyer-1.jpg',
    '/esports/esports-flyer-2.jpg',
  ],
  pageLabels: [
    'စာမျက်နှာ 1',
    'စာမျက်နှာ 2',
  ],
};

export default function EsportsClubSection() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const pamphletLightboxData = {
    pageImages: ESPORTS_DATA.pages,
    pageLabels: ESPORTS_DATA.pageLabels,
    pageCount: ESPORTS_DATA.pages.length,
  };

  const projectLightboxData = {
    id: ESPORTS_DATA.id,
    title: ESPORTS_DATA.title,
    titleMm: ESPORTS_DATA.titleMm,
  };

  return (
    <section className="esports-club-section" id="esports-club">
      {/* Section Header */}
      <div className="esports-header">
        <div className="section-pill-tag esports-pill">
          <Gamepad2 size={14} className="pill-sparkle" />
          <span>University Student Club</span>
        </div>
        <h2 className="esports-heading">{ESPORTS_DATA.title}</h2>
      </div>

      {/* Centered Clean Flyer Showcase */}
      <div className="esports-single-card">
        {/* Page Tabs */}
        <div className="pamphlet-page-switcher" style={{ marginBottom: '14px', justifyContent: 'center' }}>
          {ESPORTS_DATA.pageLabels.map((label, idx) => (
            <button
              key={idx}
              type="button"
              className={`pamphlet-switch-tab ${activePageIndex === idx ? 'active' : ''}`}
              onClick={() => setActivePageIndex(idx)}
            >
              <FileText size={13} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Flyer Preview Container (Tap to Zoom) */}
        <div
          className="pamphlet-preview-container esports-preview-box"
          onClick={() => setIsLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Tap to view TUM Esports Club flyer in full screen"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsLightboxOpen(true);
            }
          }}
        >
          <img
            src={ESPORTS_DATA.pages[activePageIndex]}
            alt={`${ESPORTS_DATA.title} - Page ${activePageIndex + 1}`}
            className="pamphlet-preview-img"
            loading="lazy"
          />

          {/* Hover / Tap to Zoom Overlay Hint */}
          <div className="pamphlet-expand-overlay">
            <div className="expand-pill">
              <Maximize2 size={15} />
              <span>နှိပ်၍ အကြီးချဲ့ကြည့်ရှုပါ (Tap to Zoom)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <PamphletLightboxModal
          project={projectLightboxData}
          pamphletData={pamphletLightboxData}
          initialPageIndex={activePageIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </section>
  );
}
