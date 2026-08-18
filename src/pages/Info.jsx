import React from 'react';
import { SHOW_INFO } from '../data/mockData';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

export default function Info() {
  return (
    <div className="main-content" style={{ paddingTop: '16px' }}>
      <div className="detail-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            {SHOW_INFO.titleMm}
          </h2>
        </div>
        
        <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '14px', fontWeight: 500 }}>
          {SHOW_INFO.title} • {SHOW_INFO.university}
        </p>

        <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '20px' }}>
          {SHOW_INFO.welcomeMessage}
        </p>

        {/* Schedule & Venue Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <Calendar size={20} color="var(--primary)" />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>ကျင်းပမည့် ရက်စွဲ</span>
              <strong style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>{SHOW_INFO.date}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <Clock size={20} color="var(--accent)" />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>ကျင်းပမည့် အချိန်</span>
              <strong style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>{SHOW_INFO.time}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <MapPin size={20} color="var(--accent-gold)" />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>နေရာ</span>
              <strong style={{ fontSize: '0.86rem', color: 'var(--text-main)' }}>{SHOW_INFO.location}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <Phone size={20} color="var(--primary)" />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', fontWeight: 600 }}>ဆက်သွယ်ရန်</span>
              <strong style={{ fontSize: '0.86rem', color: 'var(--text-main)' }}>{SHOW_INFO.contact}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
