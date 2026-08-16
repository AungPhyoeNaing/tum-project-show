import React, { useState } from 'react';
import { MAJORS_DATA } from '../data/mockData';
import MajorCard from '../components/MajorCard';
import { Layers, Search, X } from 'lucide-react';

export default function MajorsDirectory() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMajors = searchQuery.trim() === ''
    ? MAJORS_DATA
    : MAJORS_DATA.filter(m => 
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.nameMm.includes(searchQuery) ||
        m.shortCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="main-content" style={{ paddingTop: '16px' }}>
      {/* Page Header */}
      <div className="section-header" style={{ marginBottom: '12px' }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Layers size={22} color="var(--primary)" />
            အင်ဂျင်နီယာမေဂျာ (၁၀) ခု
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '2px' }}>
            Technological University (Mandalay) Departments Directory
          </p>
        </div>
        <span className="section-badge">{filteredMajors.length} Departments</span>
      </div>

      {/* Department Search */}
      <div className="search-box" style={{ marginBottom: '16px' }}>
        <Search size={18} className="search-icon" />
        <input 
          type="text" 
          className="search-input"
          placeholder="မေဂျာအမည် သို့မဟုတ် နည်းပညာနယ်ပယ် ရှာဖွေပါ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className="clear-search" onClick={() => setSearchQuery('')} aria-label="Clear Search">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Majors Grid */}
      {filteredMajors.length > 0 ? (
        <div className="major-grid">
          {filteredMajors.map(major => (
            <MajorCard key={major.id} major={major} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={36} />
          <h3>မေဂျာ ရှာမတွေ့ပါ</h3>
          <p>"{searchQuery}" နှင့် ကိုက်ညီသော မေဂျာ မရှိသေးပါ။ အခြားစကားလုံးဖြင့် ရှာဖွေကြည့်ပါ။</p>
        </div>
      )}
    </div>
  );
}
