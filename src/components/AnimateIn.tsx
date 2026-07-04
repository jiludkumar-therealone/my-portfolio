import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article';
};

export function AnimateIn({ children, className = '', delay = 0, as: Tag = 'div' }: Props) {
  const { ref, inView } = useInView<HTMLElement>({ once: true });

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${inView ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}