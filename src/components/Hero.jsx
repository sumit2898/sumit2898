import { useEffect, useRef } from 'react';

export default function Hero() {
  const cursorRef = useRef(null);

  // Blinking cursor animation via JS
  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    let visible = true;
    const id = setInterval(() => {
      visible = !visible;
      el.style.opacity = visible ? '1' : '0';
    }, 530);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero">

      {/* ── Ambient glow orbs ── */}
      <div style={{
        position: 'absolute', width: '700px', height: '700px',
        borderRadius: '50%', filter: 'blur(140px)', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none',
        background: 'rgba(51,68,255,0.07)',
        top: '20%', right: '10%', zIndex: 0,
      }} />

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>

        {/* Greeting chip */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          fontFamily: "'Space Mono', monospace", fontSize: '0.72rem',
          letterSpacing: '0.25em', color: 'var(--gold)',
          textTransform: 'uppercase',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '999px',
          padding: '0.45rem 1.2rem',
          background: 'rgba(201,168,76,0.06)',
          marginBottom: '2rem',
          animation: 'fadeUp 0.7s ease both',
          animationDelay: '0.1s',
        }}>
          <span style={{ fontSize: '0.9rem' }}>♟</span>
          <span>Hi, I&apos;m Sumit — Frontend Developer &amp; CS Student</span>
        </div>

        {/* Name */}
        <h1 className="hero-name" style={{ marginBottom: '0' }}>
          Sumit<br />Kumar.
        </h1>

        {/* Animated sub-headline */}
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(0.82rem, 1.8vw, 1.05rem)',
          letterSpacing: '0.12em',
          color: 'var(--text-muted)',
          marginTop: '1.6rem',
          animation: 'fadeUp 0.8s ease both',
          animationDelay: '0.6s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
        }}>
          <span style={{ color: 'var(--gold-dark)' }}>&gt;</span>
          <span style={{ color: 'rgba(232,224,208,0.55)' }}>crafting</span>
          <span style={{ color: 'var(--gold)' }}>clean interfaces</span>
          <span style={{ color: 'rgba(232,224,208,0.55)' }}>with</span>
          <span style={{ color: 'var(--gold)' }}>algorithmic logic</span>
          <span ref={cursorRef} style={{ color: 'var(--gold)', fontWeight: 700 }}>_</span>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          lineHeight: '1.85',
          color: 'rgba(232,224,208,0.6)',
          maxWidth: '560px',
          margin: '2rem auto 0',
          animation: 'fadeUp 0.8s ease both',
          animationDelay: '0.75s',
        }}>
          B.Sc. Computer Science student at{' '}
          <span style={{ color: 'var(--text)', fontWeight: 500 }}>Dyal Singh College, Delhi University</span>.
          {' '}Bridging robust DSA logic with polished, user-centric experiences — one move at a time.
        </p>

        {/* Stat pills */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '2.4rem',
          animation: 'fadeUp 0.8s ease both',
          animationDelay: '0.9s',
        }}>
          {[
            { num: '4+', label: 'Projects' },
            { num: '5+', label: 'Hackathons' },
            { num: '3', label: 'Languages' },
            { num: '2024', label: 'Cohort' },
          ].map(s => (
            <div key={s.label} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '0.8rem 1.4rem',
              background: 'rgba(201,168,76,0.05)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '10px',
              minWidth: '80px',
            }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)',
              }}>{s.num}</span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem', letterSpacing: '0.14em',
                color: 'var(--text-muted)', textTransform: 'uppercase',
                marginTop: '0.2rem',
              }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero-btns" style={{ justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>

        {/* Scroll hint */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '0.5rem', marginTop: '3.5rem',
          animation: 'fadeUp 1s ease both', animationDelay: '1.3s',
        }}>
          <div style={{
            width: '1px', height: '48px',
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.5))',
          }} />
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: '0.58rem',
            letterSpacing: '0.22em', color: 'rgba(255,255,255,0.2)',
            textTransform: 'uppercase',
          }}>Scroll · Drag · Explore</span>
        </div>

      </div>
    </section>
  );
}
