import React, { useEffect } from 'react';
import { SHOW_INFO } from '../data/mockData';
import { X, Calendar, Clock, MapPin, Phone, Building } from 'lucide-react';

export default function InfoModal({ isOpen, onClose }) {
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content info-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-modal-title"
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2 id="info-modal-title" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary)' }}>
              ပြပွဲ အချက်အလက်များ
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

        <div className="modal-body">
          <div className="info-banner-card">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
              {SHOW_INFO.titleMm}
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>
              {SHOW_INFO.title}
            </p>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {SHOW_INFO.welcomeMessage}
            </p>
          </div>

          <div className="info-items-list">
            <div className="info-item-row">
              <div className="info-icon-box date-box">
                <Calendar size={18} />
              </div>
              <div>
                <span className="info-label">ကျင်းပမည့် ရက်စွဲ</span>
                <strong className="info-val">{SHOW_INFO.date}</strong>
              </div>
            </div>

            <div className="info-item-row">
              <div className="info-icon-box time-box">
                <Clock size={18} />
              </div>
              <div>
                <span className="info-label">ကျင်းပမည့် အချိန်</span>
                <strong className="info-val">{SHOW_INFO.time}</strong>
              </div>
            </div>

            <div className="info-item-row">
              <div className="info-icon-box loc-box">
                <MapPin size={18} />
              </div>
              <div>
                <span className="info-label">ကျင်းပမည့် နေရာ</span>
                <strong className="info-val">{SHOW_INFO.location}</strong>
              </div>
            </div>

            <div className="info-item-row">
              <div className="info-icon-box univ-box">
                <Building size={18} />
              </div>
              <div>
                <span className="info-label">တက္ကသိုလ်</span>
                <strong className="info-val">{SHOW_INFO.university}</strong>
              </div>
            </div>

            <div className="info-item-row">
              <div className="info-icon-box contact-box">
                <Phone size={18} />
              </div>
              <div>
                <span className="info-label">ဆက်သွယ်ရန်</span>
                <strong className="info-val">{SHOW_INFO.contact}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-primary" onClick={onClose} style={{ width: '100%' }}>
            နားလည်ပါပြီ
          </button>
        </div>
      </div>
    </div>
  );
}
