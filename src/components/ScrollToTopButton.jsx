import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      className="scroll-to-top-btn"
      onClick={scrollToTop}
      title="အပေါ်သို့ပြန်သွားပါ"
      aria-label="အပေါ်သို့ပြန်သွားပါ"
    >
      <ArrowUp size={16} strokeWidth={2.5} />
      <span>အပေါ်သို့ပြန်သွားပါ</span>
    </button>
  );
}
