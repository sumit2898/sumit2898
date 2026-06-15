import { useEffect } from 'react';

/**
 * Wires IntersectionObserver to all .reveal elements.
 * When an element enters the viewport it gets class "visible".
 * Skill bar fills (data-width) are animated at the same time.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
              bar.style.width = bar.dataset.width;
            });
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
