import React from 'react';
import { Link } from 'react-router-dom';
import { MAJORS_DATA } from '../data/mockData';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function MajorLogosList() {
  return (
    <section className="major-logos-section" id="majors-hub">
      <div className="major-logos-header">
        <div className="section-pill-tag" style={{ marginBottom: 0 }}>
          <Sparkles size={13} className="pill-sparkle" />
          <span>Departments Directory</span>
        </div>
      </div>

      {/* Grid of Clean, Tactile Logo Buttons */}
      <div className="logo-buttons-grid">
        {MAJORS_DATA.map((major) => (
          <Link
            key={major.id}
            to={`/major/${major.id}`}
            className="logo-button-card"
            aria-label={`View ${major.shortCode} - ${major.nameMm} projects`}
          >
            {/* Top Badge with Project Count */}
            <div className="logo-card-top-bar">
              <span className="logo-count-badge">
                {major.id === 'ep' ? 10 : major.projects.length} Projects
              </span>
            </div>

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

            {/* Department Info & Labels */}
            <div className="logo-button-label">
              <span className="logo-short-code">{major.shortCode}</span>
              <span className="logo-name-mm">{major.nameMm}</span>
            </div>

            {/* Action CTA */}
            <div className="logo-card-action">
              <span>ကြည့်ရှုရန်</span>
              <ChevronRight size={14} className="action-arrow" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
