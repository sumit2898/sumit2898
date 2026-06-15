export default function About() {
  return (
    <section id="about" className="section">
      <div
        className="glow-orb"
        style={{ width: '600px', height: '600px', background: 'rgba(14,61,46,0.15)', top: '-200px', left: '-200px' }}
      />
      <div className="section-inner">
        <div className="section-label">♞ 01 · About</div>
        <h2 className="section-title">The Player Behind the Board</h2>
        <div className="about-grid">

          {/* Info Card */}
          <div className="about-card reveal">
            <div className="about-name-big">Sumit Kumar</div>
            <div className="about-role">♟ Frontend Developer · DU · Delhi, India</div>

            <div className="about-info-row">
              <span className="about-info-label">Email</span>
              <span className="about-info-value">
                <a href="mailto:kumarsumit272006@gmail.com">kumarsumit272006@gmail.com</a>
              </span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Phone</span>
              <span className="about-info-value">+91 7042410113</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">LinkedIn</span>
              <span className="about-info-value">
                <a href="https://linkedin.com/in/sumit-kumar-070096360" target="_blank" rel="noreferrer">
                  sumit-kumar-070096360
                </a>
              </span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Location</span>
              <span className="about-info-value">Delhi, India</span>
            </div>

            <div className="edu-card">
              <div className="edu-card-title">Dyal Singh College, University of Delhi</div>
              <div className="edu-card-sub">B.Sc. (H) Computer Science &amp; Information Sciences</div>
              <div className="edu-card-date">Aug 2024 – June 2027</div>
            </div>
          </div>

          {/* Text */}
          <div className="about-text reveal" style={{ transitionDelay: '0.15s' }}>
            <p>
              Computer Science student at Delhi University with a focus on{' '}
              <strong style={{ color: 'var(--gold)' }}>Frontend Development</strong> and{' '}
              <strong style={{ color: 'var(--gold)' }}>Algorithmic Logic</strong>.
            </p>
            <p>
              Like a chess player studying the board before each move, I approach every project with
              strategic thinking — analysing requirements, planning architecture, and executing with precision.
            </p>
            <p>
              I am passionate about building{' '}
              <strong style={{ color: 'var(--gold)' }}>clean, user-centric applications</strong> and
              constantly expanding my technical horizon. Currently looking for opportunities to contribute
              to impactful projects and grow as a developer.
            </p>

            <div style={{
              marginTop: '2rem', padding: '1.5rem 2rem',
              background: 'rgba(201,168,76,0.05)', border: '1px solid var(--border)', borderRadius: '10px'
            }}>
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: '0.68rem',
                letterSpacing: '0.18em', color: 'var(--gold)', marginBottom: '1rem'
              }}>
                // TECH STACK
              </div>
              <div style={{
                display: 'grid', gridTemplateColumns: 'auto 1fr',
                gap: '0.4rem 1.5rem', fontSize: '0.85rem', color: 'rgba(232,224,208,0.75)'
              }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>Languages</span>
                <span>C++, Python, JavaScript</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>Web</span>
                <span>React, HTML5, CSS3</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>Core</span>
                <span>Data Structures &amp; Algorithms</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>Tools</span>
                <span>Git, GitHub, Power BI, Excel</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
