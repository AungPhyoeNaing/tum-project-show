import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layers, Bookmark, Info } from 'lucide-react';

export default function FooterNav() {
  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={19} />
        <span>ပင်မ</span>
      </NavLink>

      <NavLink to="/majors" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Layers size={19} />
        <span>မေဂျာများ</span>
      </NavLink>

      <NavLink to="/bookmarks" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Bookmark size={19} />
        <span>သိမ်းဆည်းထားမှု</span>
      </NavLink>

      <NavLink to="/info" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Info size={19} />
        <span>အချက်အလက်</span>
      </NavLink>
    </nav>
  );
}
