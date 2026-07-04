import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

/** Reset scroll on route change. SPAs keep scroll Y otherwise — doc pages opened mid-page land at the bottom. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const timer = window.setTimeout(() => scrollToSection(hash), 80);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return null;
}