import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Sparkles } from 'lucide-react';

export default function Header({ bookmarkCount = 0 }) {
  return (
    <header className="navbar">
      <Link to="/" className="nav-brand">
        <div className="brand-badge">TUM</div>
        <div className="brand-info">
          <h1>Project Show 2026</h1>
          <p>Technological University Mandalay</p>
        </div>
      </Link>
      
      <div className="header-actions">
        <Link to="/bookmarks" className="icon-btn" title="Saved Projects" style={{ position: 'relative' }}>
          <Bookmark size={20} />
          {bookmarkCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              background: '#ef4444',
              color: 'white',
              fontSize: '0.65rem',
              fontWeight: 700,
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {bookmarkCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
