import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAJORS_DATA, SHOW_INFO } from '../data/mockData';
import MajorLogosList from '../components/MajorLogosList';
import InfoModal from '../components/InfoModal';
import BookmarksModal from '../components/BookmarksModal';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Home({ 
  bookmarks, 
  onToggleBookmark, 
  isInfoOpen, 
  setIsInfoOpen, 
  isBookmarksOpen, 
  setIsBookmarksOpen 
}) {
  const navigate = useNavigate();

  // Total projects count across all majors
  const totalProjectsCount = useMemo(() => {
    return MAJORS_DATA.reduce((acc, m) => acc + (m.projects?.length || 0), 0);
  }, []);

  return (
    <div className="single-tab-layout">
      {/* Hero Exhibition Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <div className="hero-pill">
            <Sparkles size={14} className="hero-sparkle-icon" />
            <span>Graduation Project Exhibition 2026</span>
          </div>

          <h1 className="hero-title">{SHOW_INFO.titleMm}</h1>
          <p className="hero-sub">{SHOW_INFO.university} • Final Year Research Showcase</p>

          <div className="hero-meta">
            <div className="meta-item">
              <Calendar size={15} />
              <span>{SHOW_INFO.date}</span>
            </div>
            <div className="meta-item">
              <MapPin size={15} />
              <span>{SHOW_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Hero Quick Metric Bar */}
        <div className="event-stats-bar">
          <div className="stat-item">
            <span className="stat-number">{MAJORS_DATA.length}</span>
            <span className="stat-label">မေဂျာများ (Majors)</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{totalProjectsCount}</span>
            <span className="stat-label">စုစုပေါင်း ပရောဂျက်များ</span>
          </div>
          <div className="stat-item clickable" onClick={() => setIsInfoOpen(true)}>
            <span className="stat-number">21 Aug</span>
            <span className="stat-label">ပြပွဲရက်စွဲ (အသေးစိတ်)</span>
          </div>
        </div>
      </section>

      {/* Major Logos Showcase Section */}
      <MajorLogosList />

      {/* Event Info Modal */}
      <InfoModal 
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />

      {/* Bookmarks Modal */}
      <BookmarksModal 
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarks}
        onToggleBookmark={onToggleBookmark}
        onSelectProject={(p) => {
          setIsBookmarksOpen(false);
          navigate(`/project/${p.id}`);
        }}
      />
    </div>
  );
}
