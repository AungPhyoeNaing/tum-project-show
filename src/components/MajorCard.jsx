import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Cog, Bot, Building2, Zap, Radio, 
  Compass, Flame, Pickaxe, FlaskConical, Landmark, 
  Folder, ChevronRight 
} from 'lucide-react';

const ICON_MAP = {
  Cpu,
  Cog,
  Bot,
  Building2,
  Zap,
  Radio,
  Compass,
  Flame,
  Pickaxe,
  FlaskConical,
  Landmark,
};

export default function MajorCard({ major }) {
  const IconComponent = ICON_MAP[major.iconName] || Folder;

  return (
    <Link to={`/major/${major.id}`} className="major-card">
      <div className="major-card-img-wrapper">
        <img 
          src={major.logo || major.image} 
          alt={major.name} 
          className="major-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/logos/CEIT_2026_logo.PNG";
          }}
        />
        <span className="major-tag">{major.shortCode}</span>
      </div>

      <div className="major-card-body">
        <div className="major-card-header">
          <div className="major-icon-box" style={{ backgroundColor: major.accentColor || '#0f3460' }}>
            <IconComponent size={18} />
          </div>
          <div>
            <h3 className="major-name-title">{major.shortCode}</h3>
            <p className="major-name-mm">{major.nameMm}</p>
          </div>
        </div>

        <p className="major-desc">{major.description}</p>

        <div className="major-card-footer">
          <span>{major.id === 'ep' ? 10 : (major.projects?.length || 0)} Projects</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            ကြည့်ရန် <ChevronRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}
