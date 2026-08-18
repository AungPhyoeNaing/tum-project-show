import React from 'react';
import { Bookmark, Info } from 'lucide-react';

export default function Header({ bookmarkCount = 0, onOpenInfo, onOpenBookmarks, onResetToHome }) {
  return (
    <header className="navbar">
      <div className="nav-brand-wrapper" onClick={onResetToHome} style={{ cursor: 'pointer' }}>
        <div className="brand-info">
          <div className="brand-title-row">
            <h1>Project Show 2026</h1>
            <span className="live-pill">
              <span className="live-dot" />
              Live
            </span>
          </div>
          <p className="brand-subtitle">Technological University Mandalay</p>
        </div>
      </div>
      
      <div className="header-actions">
        {/* Info Modal Trigger Button */}
        <button 
          type="button"
          className="header-action-btn info-btn"
          onClick={onOpenInfo}
          title="Event Information"
          aria-label="Event Information"
        >
          <Info size={18} />
          <span className="action-label">ပြပွဲ အချက်အလက်</span>
        </button>

        {/* Bookmarks Modal Trigger Button */}
        <button 
          type="button"
          className="header-action-btn bookmark-btn-header" 
          onClick={onOpenBookmarks}
          title="Saved Projects"
          aria-label="Saved Projects"
        >
          <Bookmark size={18} fill={bookmarkCount > 0 ? '#f59e0b' : 'none'} color={bookmarkCount > 0 ? '#f59e0b' : 'currentColor'} />
          <span className="action-label">သိမ်းဆည်းမှု</span>
          {bookmarkCount > 0 && (
            <span className="badge-counter">
              {bookmarkCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
