import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MAJORS_DATA } from '../data/mockData';
import { PAMPHLETS_DATA } from '../data/pamphletsData';
import ProjectCard from '../components/ProjectCard';
import PamphletCard from '../components/PamphletCard';
import PamphletLightboxModal from '../components/PamphletLightboxModal';
import ProjectDetailModal from '../components/ProjectDetailModal';
import InfoModal from '../components/InfoModal';
import BookmarksModal from '../components/BookmarksModal';
import { 
  ArrowLeft, Search, X, Layers, AlertTriangle, 
  Filter, RefreshCw, FileText
} from 'lucide-react';

export default function Major({ 
  bookmarks, 
  onToggleBookmark,
  isInfoOpen,
  setIsInfoOpen,
  isBookmarksOpen,
  setIsBookmarksOpen
}) {
  const { majorId } = useParams();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeLightbox, setActiveLightbox] = useState(null); // { project, initialPageIndex }

  const major = useMemo(() => {
    return MAJORS_DATA.find((m) => m.id === majorId);
  }, [majorId]);

  const hasPamphlets = useMemo(() => {
    return major?.projects.some(p => PAMPHLETS_DATA[p.id]);
  }, [major]);

  // Extract popular tags for this major
  const availableTags = useMemo(() => {
    if (!major?.projects) return [];
    
    const tagCountMap = {};
    major.projects.forEach((p) => {
      p.tags?.forEach((tag) => {
        tagCountMap[tag] = (tagCountMap[tag] || 0) + 1;
      });
    });

    return Object.entries(tagCountMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tag]) => tag);
  }, [major]);

  // Filter projects by tag and search query
  const displayedProjects = useMemo(() => {
    if (!major?.projects) return [];

    let result = major.projects.map((p) => ({
      ...p,
      majorCode: major.shortCode,
      majorId: major.id,
      majorNameMm: major.nameMm,
      majorName: major.name,
      majorLogo: major.logo || major.image,
    }));

    if (selectedTag !== 'ALL') {
      result = result.filter((p) => p.tags?.includes(selectedTag));
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.titleMm.includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.supervisor && p.supervisor.toLowerCase().includes(q)) ||
        (p.team && p.team.some((member) => member.toLowerCase().includes(q))) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    return result;
  }, [major, selectedTag, searchQuery]);

  if (!major) {
    return (
      <div className="main-content" style={{ paddingTop: '20px' }}>
        <div className="empty-state">
          <AlertTriangle size={42} />
          <h3>မေဂျာ မတွေ့ရှိပါ</h3>
          <p>တောင်းဆိုထားသော မေဂျာ မရှိပါ။</p>
          <Link to="/" className="back-btn" style={{ marginTop: '16px', display: 'inline-flex' }}>
            <ArrowLeft size={16} /> ပင်မစာမျက်နှာသို့ ပြန်သွားရန်
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content" style={{ paddingTop: '16px' }}>
      {/* Back Button to Home */}
      <Link to="/" className="back-btn" style={{ marginBottom: '14px' }}>
        <ArrowLeft size={16} /> မေဂျာများ စာရင်းသို့ ပြန်သွားရန်
      </Link>

      {/* Clean Compact Major Header Card */}
      <div className="selected-major-banner">
        <div className="selected-major-header-row" style={{ marginBottom: 0 }}>
          <div className="selected-major-logo-avatar">
            <img 
              src={major.logo || major.image} 
              alt={major.name}
              className="selected-major-logo-img"
              onError={(e) => { e.target.src = '/logos/CEIT_2026_logo.PNG'; }}
            />
          </div>

          <div className="selected-major-info">
            <div className="selected-major-title-line">
              <h2 className="selected-major-code-title">
                {major.shortCode} Department
              </h2>
              <span className="selected-major-count-pill">
                {major.projects.length} Projects
              </span>
              {hasPamphlets && (
                <span className="pdf-showcase-pill">
                  <FileText size={12} />
                  Original PDF Pamphlets
                </span>
              )}
            </div>
            <h3 className="selected-major-name-mm">{major.nameMm}</h3>
            <p className="selected-major-name-en">{major.name}</p>
          </div>
        </div>
      </div>

      {/* Search & Tag Filter within this Major */}
      <div className="search-filter-hub">
        {/* Search Box */}
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            className="search-input"
            placeholder={`${major.shortCode} ပရောဂျက်ခေါင်းစဉ်၊ ကြီးကြပ်သူ (Dr.) သို့မဟုတ် နည်းပညာ ရှာပါ...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              type="button"
              className="clear-search" 
              onClick={() => setSearchQuery('')} 
              aria-label="Clear Search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Quick Tag Pills */}
        {availableTags.length > 0 && (
          <div className="quick-tags-bar">
            <span className="quick-tags-label">
              <Filter size={13} />
              <span>စစ်ထုတ်ရန်:</span>
            </span>
            <button
              type="button"
              className={`quick-tag-chip ${selectedTag === 'ALL' ? 'active' : ''}`}
              onClick={() => setSelectedTag('ALL')}
            >
              အားလုံး ({major.projects.length})
            </button>
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`quick-tag-chip ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(selectedTag === tag ? 'ALL' : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter Status Line */}
      <div className="section-header">
        <div className="filter-status-text">
          <h3 className="section-title">
            <Layers size={18} />
            {searchQuery 
              ? `"${searchQuery}" ရှာဖွေတွေ့ရှိချက်များ` 
              : hasPamphlets 
                ? `${major.shortCode} ဘွဲ့ကြိုသုတေသန မူရင်း Pamphlet စာမျက်နှာများ` 
                : `${major.shortCode} ဌာန၏ ရရှိနိုင်သော ပရောဂျက်များ`}
          </h3>
          {selectedTag !== 'ALL' && (
            <span className="active-tag-indicator">Tag: {selectedTag}</span>
          )}
        </div>
        <span className="section-badge">{displayedProjects.length} Projects</span>
      </div>

      {/* Projects Grid Feed */}
      {displayedProjects.length > 0 ? (
        <div className={hasPamphlets ? "pamphlet-projects-list" : "project-list"}>
          {displayedProjects.map((project) => {
            const isBookmarked = bookmarks.includes(project.id);
            const pamphletData = PAMPHLETS_DATA[project.id];

            if (pamphletData) {
              return (
                <PamphletCard
                  key={project.id}
                  project={project}
                  majorCode={major.shortCode}
                  pamphletData={pamphletData}
                  isBookmarked={isBookmarked}
                  onToggleBookmark={onToggleBookmark}
                  onOpenLightbox={(proj, pageIdx) => {
                    setActiveLightbox({ project: proj, initialPageIndex: pageIdx, pamphletData });
                  }}
                />
              );
            }

            return (
              <ProjectCard 
                key={project.id}
                project={project}
                majorCode={major.shortCode}
                isBookmarked={isBookmarked}
                onToggleBookmark={onToggleBookmark}
                onSelectProject={(p) => setActiveModalProject(p)}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={42} />
          <h3>ပရောဂျက် ရှာမတွေ့ပါ</h3>
          <p>
            {searchQuery 
              ? `"${searchQuery}" နှင့် ကိုက်ညီသော ပရောဂျက် ${major.shortCode} တွင် မရှိသေးပါ။ အခြားစကားလုံးဖြင့် ရှာဖွေကြည့်ပါ။`
              : 'ရွေးချယ်ထားသော စစ်ထုတ်မှုနှင့် ကိုက်ညီသော ပရောဂျက် မရှိပါ။'}
          </p>
          <button 
            type="button" 
            className="btn-primary" 
            style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            onClick={() => {
              setSearchQuery('');
              setSelectedTag('ALL');
            }}
          >
            <RefreshCw size={15} /> ပရောဂျက်များ အားလုံး ပြန်ကြည့်မည်
          </button>
        </div>
      )}

      {/* Fullscreen Interactive Pamphlet Lightbox for Mobile & Desktop */}
      {activeLightbox && (
        <PamphletLightboxModal
          project={activeLightbox.project}
          pamphletData={activeLightbox.pamphletData}
          initialPageIndex={activeLightbox.initialPageIndex}
          onClose={() => setActiveLightbox(null)}
        />
      )}

      {/* Project Detail Modal for standard majors */}
      {activeModalProject && (
        <ProjectDetailModal 
          project={activeModalProject}
          major={major}
          isBookmarked={bookmarks.includes(activeModalProject.id)}
          onToggleBookmark={onToggleBookmark}
          onClose={() => setActiveModalProject(null)}
        />
      )}

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
