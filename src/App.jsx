import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Major from './pages/Major';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  // Load bookmarks from localStorage
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('tum_project_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Sync bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tum_project_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error("Failed to save bookmarks to localStorage", e);
    }
  }, [bookmarks]);

  const toggleBookmark = (projectId) => {
    setBookmarks(prev => 
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const handleResetToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="app-container single-tab-app">
        <Header 
          bookmarkCount={bookmarks.length}
          onOpenInfo={() => setIsInfoOpen(true)}
          onOpenBookmarks={() => setIsBookmarksOpen(true)}
          onResetToHome={handleResetToHome}
        />

        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                bookmarks={bookmarks} 
                onToggleBookmark={toggleBookmark}
                isInfoOpen={isInfoOpen}
                setIsInfoOpen={setIsInfoOpen}
                isBookmarksOpen={isBookmarksOpen}
                setIsBookmarksOpen={setIsBookmarksOpen}
              />
            } 
          />
          {/* Dedicated Major Page displaying all projects for that major */}
          <Route 
            path="/major/:majorId" 
            element={
              <Major 
                bookmarks={bookmarks} 
                onToggleBookmark={toggleBookmark}
                isInfoOpen={isInfoOpen}
                setIsInfoOpen={setIsInfoOpen}
                isBookmarksOpen={isBookmarksOpen}
                setIsBookmarksOpen={setIsBookmarksOpen}
              />
            } 
          />
          {/* Deep link / direct URL support for shared project links */}
          <Route 
            path="/project/:projectId" 
            element={
              <ProjectDetail 
                bookmarks={bookmarks} 
                onToggleBookmark={toggleBookmark} 
              />
            } 
          />
          {/* Fallback to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
