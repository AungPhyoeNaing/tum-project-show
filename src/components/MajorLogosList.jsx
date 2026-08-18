import React from 'react';
import { Link } from 'react-router-dom';
import { MAJORS_DATA } from '../data/mockData';
import { Sparkles } from 'lucide-react';

export default function MajorLogosList() {
  return (
    <div className="major-logos-section" id="majors-hub">
      <div className="major-logos-header">
        <div className="major-logos-title-box">
          <div className="section-pill-tag">
            <Sparkles size={14} className="pill-sparkle" />
            <span>Select Major</span>
          </div>
          <h2 className="major-logos-heading">မေဂျာ Logo ရွေးချယ်ပါ</h2>
        </div>
      </div>

      {/* Grid of Clean, Tactile Logo Buttons */}
      <div className="logo-buttons-grid">
        {MAJORS_DATA.map((major) => (
          <Link
            key={major.id}
            to={`/major/${major.id}`}
            className="logo-button-card"
            aria-label={`View ${major.shortCode} projects`}
          >
            {/* Logo Display */}
            <div className="logo-button-avatar">
              <img
                src={major.logo || major.image}
                alt={`${major.shortCode} Logo`}
                className="logo-button-img"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/logos/CEIT_2026_logo.PNG';
                }}
              />
            </div>

            {/* Short Term Name & Tag */}
            <div className="logo-button-label">
              <span className="logo-short-code">{major.shortCode}</span>
              <span className="logo-count-badge">{major.projects.length} Projects</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
