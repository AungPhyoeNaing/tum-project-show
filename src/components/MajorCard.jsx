import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export default function MajorCard({ major }) {
  // Dynamically get icon component or fallback to Folder
  const IconComponent = Icons[major.iconName] || Icons.Folder;

  return (
    <Link to={`/major/${major.id}`} className="major-card">
      <div className="major-card-img-wrapper">
        <img 
          src={major.image} 
          alt={major.name} 
          className="major-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80";
          }}
        />
        <div className="major-card-overlay" />
        <span className="major-tag">{major.shortCode}</span>
      </div>

      <div className="major-card-body">
        <div className="major-card-header">
          <div className="major-icon-box" style={{ backgroundColor: major.accentColor || '#1e3a8a' }}>
            <IconComponent size={20} />
          </div>
          <div>
            <h3 className="major-name-title">{major.shortCode}</h3>
            <p className="major-name-mm">{major.nameMm}</p>
          </div>
        </div>

        <p className="major-desc">{major.description}</p>

        <div className="major-card-footer">
          <span>{major.projects?.length || 0} Projects Available</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            ကြည့်ရန် <Icons.ChevronRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
