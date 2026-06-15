import { useEffect, useRef, useState } from 'react';

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'certs', 'contact'];
const LABELS   = ['Hero', 'About', 'Skills', 'Projects', 'Certs', 'Contact'];

export default function ChessNavDots() {
  const [active, setActive] = useState('hero');
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chess-nav" id="chessNav">
      {SECTIONS.map((id, i) => (
        <div
          key={id}
          className={`chess-nav-dot${active === id ? ' active' : ''}`}
          data-label={LABELS[i]}
          onClick={() => scrollTo(id)}
        />
      ))}
    </div>
  );
}
