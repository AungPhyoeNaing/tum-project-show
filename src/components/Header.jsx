import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';

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
        <Link to="/bookmarks" className="icon-btn" title="Saved Projects">
          <Bookmark size={18} />
          {bookmarkCount > 0 && (
            <span className="badge-counter">
              {bookmarkCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
