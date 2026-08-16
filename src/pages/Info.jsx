import React from 'react';
import { SHOW_INFO } from '../data/mockData';
import { Calendar, Clock, MapPin, Phone, Globe, Navigation, Sparkles } from 'lucide-react';

export default function Info() {
  return (
    <div className="main-content" style={{ paddingTop: '16px' }}>
      <div className="detail-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <Sparkles size={18} color="var(--accent-gold)" />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            {SHOW_INFO.titleMm}
          </h2>
        </div>
        
        <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '14px', fontWeight: 500 }}>
          {SHOW_INFO.title} • {SHOW_INFO.university}
        </p>

        <p style={{ fontSize: '0.86rem', lineHeight: '1.6', color: 'var(--text-main)', marginBottom: '18px' }}>
          {SHOW_INFO.welcomeMessage}
        </p>

        {/* Schedule & Venue Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
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

        {/* Campus Map & Hall Guide */}
        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Navigation size={18} color="var(--primary)" />
          ပြခန်းဆောင်များ လမ်းညွှန် (Exhibition Hall Guide)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', marginBottom: '20px', fontSize: '0.84rem' }}>
          <div style={{ padding: '10px 14px', background: '#eff6ff', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid #3b82f6' }}>
            <strong style={{ color: '#1e40af' }}>Hall A (CEIT & Software Zone):</strong> Main Building (ပင်မဆောင်သစ်) ပထမထပ် ခန်းမ
          </div>
          <div style={{ padding: '10px 14px', background: '#fff7ed', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid #ea580c' }}>
            <strong style={{ color: '#9a3412' }}>Outdoor Mech Zone (ME):</strong> စက်မှုအဆောက်အအုံ ရှေ့ဝန်း
          </div>
          <div style={{ padding: '10px 14px', background: '#ecfeff', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid #0891b2' }}>
            <strong style={{ color: '#155e75' }}>Hall B (Mechatronics & Robotics):</strong> မက္ခာထရောနစ် ဓာတ်ခွဲခန်း
          </div>
          <div style={{ padding: '10px 14px', background: '#ecfdf5', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid #059669' }}>
            <strong style={{ color: '#065f46' }}>Hall C (Civil & Architecture Gallery):</strong> မြို့ပြဆောင် ခန်းမ
          </div>
          <div style={{ padding: '10px 14px', background: '#fefce8', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid #d97706' }}>
            <strong style={{ color: '#854d0e' }}>Hall D, E, F, G:</strong> EP, EC, PE, Mining & Chemical ခန်းမများ
          </div>
        </div>

        {/* Free Hosting Instructions Note */}
        <div style={{ padding: '14px', background: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px dashed #cbd5e1' }}>
          <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Globe size={16} color="var(--primary)" /> Vercel Free Hosting တင်နည်း လမ်းညွှန်
          </h4>
          <ol style={{ fontSize: '0.78rem', color: '#475569', paddingLeft: '18px', lineHeight: '1.6' }}>
            <li>GitHub တွင် Repository အသစ်တစ်ခု ပြုလုပ်ပြီး Project ကို Push လုပ်ပါ။</li>
            <li><a href="https://vercel.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: 600 }}>Vercel.com</a> သို့သွား၍ GitHub Account ဖြင့် Login ဝင်ပါ။</li>
            <li>"Add New Project" မှ GitHub Repo ကို ရွေးချယ်ပြီး Deploy နှိပ်ပါ (Vite automatic configuration သုံးပါမည်)။</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
