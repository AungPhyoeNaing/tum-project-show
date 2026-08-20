import React, { useState } from 'react';
import { Gamepad2, Trophy, Send, Phone, Sparkles, Maximize2, FileText, CheckCircle2 } from 'lucide-react';
import PamphletLightboxModal from './PamphletLightboxModal';

const ESPORTS_DATA = {
  id: 'tum-esports',
  title: 'TUM Esports Club (TUMEA)',
  titleMm: 'နည်းပညာတက္ကသိုလ် (မန္တလေး) Esports Athletics & Gaming Community',
  tagline: 'ဂိမ်းကစားရင်း သူငယ်ချင်းအသစ်တွေရှာဖွေပြီး မမေ့နိုင်တဲ့ University Life အမှတ်တရတွေ ဖန်တီးလိုက်ပါ',
  pages: [
    '/esports/esports-flyer-1.jpg',
    '/esports/esports-flyer-2.jpg',
  ],
  pageLabels: [
    'စာမျက်နှာ 1 (Join Team & Hiring)',
    'စာမျက်နှာ 2 (About & Activities)',
  ],
  games: [
    { name: 'Mobile Legends: Bang Bang', icon: '⚔️' },
    { name: 'PUBG Mobile', icon: '🎯' },
    { name: 'eFootball', icon: '⚽' },
  ],
  hiring: [
    'Content Creator — 1 Post',
    'Video Editor — 1 Post',
    'Talent (Male) — 2 Posts',
    'Talent (Female) — 2 Posts',
  ],
  benefits: [
    'Prize Pool ပါဝင်သော Online & Offline Tournaments များတွင် အခမဲ့ (Free Entry) ပါဝင်ယှဉ်ပြိုင်နိုင်ခြင်း',
    'University ပေါင်းစုံ Inter-University Tournaments များတွင် TUM ကိုယ်စားပြုအဖြစ် ပါဝင်ခွင့်',
    'Game Night, Gaming Activities နှင့် Community Events များတွင် တက်ကြွစွာ ပါဝင်နိုင်ခြင်း',
    'Teamwork, Communication နှင့် Gaming Management Skills များ တိုးတက်စေခြင်း',
  ],
  contacts: {
    phone: '09 766 723 537',
    channel: '@tumesports',
    channelUrl: 'https://t.me/tumesports',
    usernames: ['@ThetToeHein', '@edward4everyone'],
  },
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
        <p className="esports-subheading">{ESPORTS_DATA.tagline}</p>
      </div>

      <div className="esports-card-container">
        {/* Left Column: Interactive Flyer Showcase */}
        <div className="esports-flyer-block">
          {/* Page Tabs */}
          <div className="pamphlet-page-switcher" style={{ marginBottom: '12px' }}>
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

        {/* Right Column: Club Details, Hiring, & Join Info */}
        <div className="esports-info-block">
          {/* Supported Games Badges */}
          <div className="esports-games-group">
            <div className="esports-block-title">
              <Gamepad2 size={16} />
              <span>Supported Games</span>
            </div>
            <div className="esports-game-tags">
              {ESPORTS_DATA.games.map((g, idx) => (
                <span key={idx} className="esports-game-badge">
                  <span className="game-icon">{g.icon}</span>
                  <span>{g.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Hiring / Recruitment Section */}
          <div className="esports-hiring-group">
            <div className="esports-block-title hiring-title">
              <Sparkles size={16} />
              <span>We Are Hiring — Join Our Team!</span>
            </div>
            <div className="esports-hiring-grid">
              {ESPORTS_DATA.hiring.map((pos, idx) => (
                <div key={idx} className="hiring-item">
                  <CheckCircle2 size={14} className="check-icon" />
                  <span>{pos}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Become a Member */}
          <div className="esports-benefits-group">
            <div className="esports-block-title">
              <Trophy size={16} />
              <span>What We Do & Activities</span>
            </div>
            <ul className="esports-benefits-list">
              {ESPORTS_DATA.benefits.map((b, idx) => (
                <li key={idx}>
                  <span className="bullet">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Telegram Action Bar */}
          <div className="esports-contact-bar">
            <a
              href={ESPORTS_DATA.contacts.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="esports-btn-telegram"
            >
              <Send size={16} />
              <span>Join Telegram Channel ({ESPORTS_DATA.contacts.channel})</span>
            </a>

            <div className="esports-contact-details">
              <div className="contact-sub-item">
                <Phone size={13} />
                <span>{ESPORTS_DATA.contacts.phone}</span>
              </div>
              <div className="contact-sub-item">
                <Send size={13} />
                <span>{ESPORTS_DATA.contacts.usernames.join(' , ')}</span>
              </div>
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
