import React from 'react';
import { MAJORS_DATA } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';
import { Bookmark, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Bookmarks({ bookmarks, onToggleBookmark }) {
  // Find all bookmarked projects across all majors
  const bookmarkedProjects = [];

  for (const m of MAJORS_DATA) {
    for (const p of m.projects) {
      if (bookmarks.includes(p.id)) {
        bookmarkedProjects.push({ ...p, majorCode: m.shortCode, majorId: m.id });
      }
    }
  }

  return (
    <div className="main-content" style={{ paddingTop: '16px' }}>
      <div className="section-header">
        <h3 className="section-title">
          <Bookmark size={18} fill="#f59e0b" color="#f59e0b" />
          သိမ်းဆည်းထားသော ပရောဂျက်များ
        </h3>
        <span className="section-badge">{bookmarkedProjects.length} Saved</span>
      </div>

      {bookmarkedProjects.length > 0 ? (
        <div className="project-list">
          {bookmarkedProjects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              majorCode={project.majorCode}
              isBookmarked={true}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Bookmark size={42} />
          <h3>သိမ်းဆည်းထားသော ပရောဂျက် မရှိသေးပါ</h3>
          <p>ပရောဂျက်များ ဖတ်ရှုစဉ် Bookmark ခလုတ်ကို နှိပ်၍ နောက်မှ ကြည့်ရှုလိုသော ပရောဂျက်များကို အလွယ်တကူ စာရင်းမှတ်သားနိုင်ပါသည်။</p>
          <Link to="/" className="back-btn" style={{ marginTop: '16px', display: 'inline-flex' }}>
            <Layers size={16} /> မေဂျာများနှင့် ပရောဂျက်များ ကြည့်ရှုရန်
          </Link>
        </div>
      )}
    </div>
  );
}
