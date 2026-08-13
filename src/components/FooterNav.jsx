import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layers, Bookmark, Info } from 'lucide-react';

export default function FooterNav() {
  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={20} />
        <span>ပင်မစာမျက်နှာ</span>
      </NavLink>

      <NavLink to="/majors" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Layers size={20} />
        <span>မေဂျာများ</span>
      </NavLink>

      <NavLink to="/bookmarks" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Bookmark size={20} />
        <span>သိမ်းထားသည်များ</span>
      </NavLink>

      <NavLink to="/info" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Info size={20} />
        <span>သတင်းအချက်အလက်</span>
      </NavLink>
    </nav>
  );
}
