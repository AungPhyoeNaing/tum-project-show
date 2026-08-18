import React, { useEffect } from 'react';
import { MAJORS_DATA } from '../data/mockData';
import { X, Bookmark, ExternalLink, Trash2 } from 'lucide-react';

export default function BookmarksModal({ isOpen, onClose, bookmarks, onToggleBookmark, onSelectProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Find all bookmarked projects across all majors
  const bookmarkedProjects = [];
  for (const m of MAJORS_DATA) {
    for (const p of m.projects) {
      if (bookmarks.includes(p.id)) {
        bookmarkedProjects.push({ ...p, majorCode: m.shortCode, majorId: m.id, majorNameMm: m.nameMm });
      }
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content bookmarks-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bookmarks-modal-title"
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Bookmark size={20} fill="#f59e0b" color="#f59e0b" />
            <h2 id="bookmarks-modal-title" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
              သိမ်းဆည်းထားသော ပရောဂျက်များ ({bookmarkedProjects.length})
            </h2>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {bookmarkedProjects.length > 0 ? (
            <div className="bookmarks-modal-list">
              {bookmarkedProjects.map((project) => (
                <div key={project.id} className="bookmark-modal-card">
                  <div className="bookmark-card-top">
                    <span className="bookmark-major-tag">{project.majorCode}</span>
                    <button
                      type="button"
                      className="bookmark-remove-btn"
                      onClick={() => onToggleBookmark(project.id)}
                      title="စာရင်းမှ ပယ်ဖျက်မည်"
                      aria-label="Remove bookmark"
                    >
                      <Trash2 size={15} />
                      <span>ဖျက်မည်</span>
                    </button>
                  </div>

                  <h3 className="bookmark-card-title">{project.title}</h3>
                  <p className="bookmark-card-title-mm">{project.titleMm}</p>

                  <div className="bookmark-card-actions">
                    <button
                      type="button"
                      className="bookmark-view-btn"
                      onClick={() => {
                        onClose();
                        onSelectProject(project);
                      }}
                    >
                      <span>အသေးစိတ် ကြည့်မည်</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state" style={{ padding: '36px 16px' }}>
              <Bookmark size={44} color="#94a3b8" />
              <h3>သိမ်းဆည်းထားသော ပရောဂျက် မရှိသေးပါ</h3>
              <p>
                ပရောဂျက်ကတ်များပေါ်ရှိ Bookmark ခလုတ်ကို နှိပ်၍ မိမိစိတ်ဝင်စားသော ပရောဂျက်များကို စာရင်းမှတ်ထားနိုင်ပါသည်။
              </p>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose} style={{ width: '100%' }}>
            ပိတ်မည်
          </button>
        </div>
      </div>
    </div>
  );
}
