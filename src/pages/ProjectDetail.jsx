import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MAJORS_DATA } from '../data/mockData';
import { CEIT_PAMPHLETS } from '../data/ceitPamphlets';
import PamphletLightboxModal from '../components/PamphletLightboxModal';
import { 
  ArrowLeft, Users, Award, Bookmark, Share2, Check, 
  Sparkles, AlertTriangle, FileText, Maximize2, Download 
} from 'lucide-react';

export default function ProjectDetail({ bookmarks, onToggleBookmark }) {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Find project across all majors
  let project = null;
  let major = null;

  for (const m of MAJORS_DATA) {
    const p = m.projects.find(proj => proj.id === projectId);
    if (p) {
      project = p;
      major = m;
      break;
    }
  }

  if (!project) {
    return (
      <div className="main-content" style={{ paddingTop: '20px' }}>
        <div className="empty-state">
          <AlertTriangle size={40} />
          <h3>ပရောဂျက် မတွေ့ရှိပါ</h3>
          <p>တောင်းဆိုထားသော ပရောဂျက် မရှိပါ။</p>
          <button onClick={() => navigate(-1)} className="back-btn" style={{ marginTop: '16px', display: 'inline-flex' }}>
            <ArrowLeft size={16} /> နောက်သို့ ပြန်သွားရန်
          </button>
        </div>
      </div>
    );
  }

  const isBookmarked = bookmarks.includes(project.id);
  const isCeit = major.id === 'ceit';
  const pamphletData = isCeit ? CEIT_PAMPHLETS[project.id] : null;
  const pages = pamphletData?.pageImages || [];
  const pageLabels = pamphletData?.pageLabels || [];
  const currentImage = pages[activePageIndex] || '';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.titleMm,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="main-content" style={{ paddingTop: '16px' }}>
      <button onClick={() => navigate(-1)} className="back-btn" style={{ marginBottom: '14px' }}>
        <ArrowLeft size={16} /> နောက်သို့ ပြန်သွားရန်
      </button>

      <div className="detail-header" style={{ background: 'white', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-color)', padding: '20px', boxShadow: 'var(--shadow-card)' }}>
        {/* Department Badge and Action Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
          <Link to={`/major/${major.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-light)', padding: '5px 12px', borderRadius: 'var(--radius-full)', border: '1px solid #bfdbfe' }}>
            {major.logo && (
              <img src={major.logo} alt="" style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'contain', background: 'white' }} />
            )}
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--primary)' }}>{major.shortCode} Department</span>
          </Link>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button 
              className={`bookmark-btn ${isBookmarked ? 'active' : ''}`}
              onClick={() => onToggleBookmark(project.id)}
              style={{ border: '1px solid var(--border-color)', padding: '7px 14px', borderRadius: 'var(--radius-sm)', display: 'flex', gap: '6px', fontSize: '0.82rem', fontWeight: 700 }}
              aria-label={isBookmarked ? "Remove Bookmark" : "Save Project"}
            >
              <Bookmark size={16} fill={isBookmarked ? "#f59e0b" : "none"} />
              {isBookmarked ? 'သိမ်းပြီး' : 'သိမ်းမည်'}
            </button>

            <button 
              onClick={handleShare}
              style={{ border: '1px solid var(--border-color)', padding: '7px 14px', borderRadius: 'var(--radius-sm)', display: 'flex', gap: '6px', fontSize: '0.82rem', fontWeight: 700, background: '#f8fafc' }}
              aria-label="Share project"
            >
              {copied ? <Check size={16} color="#16a34a" /> : <Share2 size={16} />}
              {copied ? 'ကူးယူပြီး' : 'မျှဝေရန်'}
            </button>
          </div>
        </div>

        {/* Titles */}
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px', lineHeight: '1.35' }}>
          {project.title}
        </h2>
        <h3 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '14px', lineHeight: '1.6' }}>
          {project.titleMm}
        </h3>

        {/* Pamphlet Viewer for CEIT */}
        {isCeit && pamphletData && (
          <div style={{ marginBottom: '20px' }}>
            {/* Page Switcher */}
            {pages.length > 1 && (
              <div className="pamphlet-page-switcher">
                {pages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`pamphlet-switch-tab ${activePageIndex === idx ? 'active' : ''}`}
                    onClick={() => setActivePageIndex(idx)}
                  >
                    <FileText size={13} />
                    <span>{pageLabels[idx] || `Page ${idx + 1}`}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Pamphlet Preview Image */}
            <div 
              className="pamphlet-preview-container"
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setIsLightboxOpen(true); }}
            >
              {currentImage && (
                <img
                  src={currentImage}
                  alt={`${project.title} - Page ${activePageIndex + 1}`}
                  className="pamphlet-preview-img"
                />
              )}
              <div className="pamphlet-expand-overlay">
                <div className="expand-pill">
                  <Maximize2 size={15} />
                  <span>နှိပ်၍ အကြီးချဲ့ကြည့်ရှုပါ (Tap to Zoom)</span>
                </div>
              </div>
            </div>

            {/* PDF Actions */}
            <div className="pamphlet-actions-row" style={{ marginTop: '10px' }}>
              <a
                href={pamphletData.pdfUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="pamphlet-pdf-link-btn"
              >
                <Download size={14} />
                <span>မူရင်း PDF ဒေါင်းလုဒ် (PDF)</span>
              </a>
              <button
                type="button"
                className="pamphlet-fullscreen-btn"
                onClick={() => setIsLightboxOpen(true)}
              >
                <Maximize2 size={14} />
                <span>အပြည့်ကြည့်ရှုရန်</span>
              </button>
            </div>
          </div>
        )}

        {/* Description */}
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '16px' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="project-tags" style={{ marginBottom: '16px' }}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className="tag-pill" style={{ fontSize: '0.74rem', padding: '4px 10px' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Team & Supervisor Section */}
        <div style={{ background: '#f8fafc', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
            <Users size={16} color="var(--primary)" />
            <span>ပြုလုပ်သည့် ကျောင်းသားအဖွဲ့</span>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: '1.5' }}>
            {project.team ? project.team.join('၊ ') : 'N/A'}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
            <Award size={16} color="var(--accent)" />
            <span>ကြီးကြပ်သူ ဆရာ/ဆရာမ</span>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            {project.supervisor}
          </p>
        </div>

        {/* Features Checklist */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} color="var(--accent-gold)" />
              အဓိက အင်္ဂါရပ်များ (Key Features)
            </h4>
            <ul className="modal-feature-list">
              {project.features.map((feat, i) => (
                <li key={i} className="modal-feature-item">
                  <Check size={16} className="modal-check-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <PamphletLightboxModal
          project={project}
          pamphletData={pamphletData}
          initialPageIndex={activePageIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}

      {/* Floating Toast Message */}
      {copied && (
        <div className="toast-notification">
          <Check size={16} color="#4ade80" />
          <span>ပရောဂျက်လင့်ခ်ကို ကူးယူပြီးပါပြီ</span>
        </div>
      )}
    </div>
  );
}
