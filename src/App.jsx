import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FooterNav from './components/FooterNav';
import Home from './pages/Home';
import MajorsDirectory from './pages/MajorsDirectory';
import Major from './pages/Major';
import ProjectDetail from './pages/ProjectDetail';
import Bookmarks from './pages/Bookmarks';
import Info from './pages/Info';

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

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header bookmarkCount={bookmarks.length} />

        <Routes>
          <Route path="/" element={<Home bookmarks={bookmarks} onToggleBookmark={toggleBookmark} />} />
          <Route path="/majors" element={<MajorsDirectory />} />
          <Route path="/major/:majorId" element={<Major bookmarks={bookmarks} onToggleBookmark={toggleBookmark} />} />
          <Route path="/project/:projectId" element={<ProjectDetail bookmarks={bookmarks} onToggleBookmark={toggleBookmark} />} />
          <Route path="/bookmarks" element={<Bookmarks bookmarks={bookmarks} onToggleBookmark={toggleBookmark} />} />
          <Route path="/info" element={<Info />} />
        </Routes>

        <FooterNav />
      </div>
    </BrowserRouter>
  );
}
