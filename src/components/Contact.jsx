export default function Contact() {
  return (
    <section id="contact" className="section">
      <div
        className="glow-orb"
        style={{
          width: '700px', height: '700px',
          background: 'rgba(14,45,61,0.2)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-label" style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span>♟ 05 · Contact</span>
        </div>

        <div className="contact-tagline reveal">Make Your Move.</div>
        <p className="contact-sub reveal" style={{ transitionDelay: '0.1s' }}>
          Whether you want to collaborate on a project, discuss an opportunity, or just talk code —
          I&apos;m always open to a good game.
        </p>

        <div className="contact-cards reveal" style={{ transitionDelay: '0.15s' }}>
          <a href="mailto:kumarsumit272006@gmail.com" className="contact-card">
            <div className="contact-card-icon">✉️</div>
            <div>
              <div className="contact-card-label">Email</div>
              <div className="contact-card-value">kumarsumit272006@gmail.com</div>
            </div>
          </a>
          <a href="https://linkedin.com/in/sumit-kumar-070096360" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-card-icon">🔗</div>
            <div>
              <div className="contact-card-label">LinkedIn</div>
              <div className="contact-card-value">sumit-kumar-070096360</div>
            </div>
          </a>
          <a href="https://github.com/sumit2898" target="_blank" rel="noreferrer" className="contact-card">
            <div className="contact-card-icon">🐙</div>
            <div>
              <div className="contact-card-label">GitHub</div>
              <div className="contact-card-value">github.com/sumit2898</div>
            </div>
          </a>
        </div>

        <div className="chess-divider reveal" style={{ transitionDelay: '0.2s' }}>
          ♟ ♞ ♝ ♜ ♛ ♚
        </div>
      </div>
    </section>
  );
}
