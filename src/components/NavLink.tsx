import type { MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';

export function NavLink({
  hash,
  label,
  className = '',
  onNavigate,
}: {
  hash: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    onNavigate?.();

    if (location.pathname === '/') {
      window.history.pushState(null, '', hash);
      scrollToSection(hash);
    } else {
      navigate('/' + hash);
    }
  };

  return (
    <a href={hash} onClick={handleClick} className={className}>
      {label}
    </a>
  );
}