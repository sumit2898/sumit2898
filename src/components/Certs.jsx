const CERTS = [
  {
    icon: '🏆',
    name: 'MOSIP Decode Hackathon – Digital Governance Summit 2026',
    org: 'Shaastra 2026 · IIT Madras',
  },
  {
    icon: '⚔️',
    name: 'Code Slayer 2k25',
    org: 'Competitive Programming · 2025',
    delay: '0.08s',
  },
  {
    icon: '📊',
    name: 'Basics of Data Analytics',
    org: 'Certification Course · Analytics',
    delay: '0.14s',
  },
  {
    icon: '🔐',
    name: 'Deutsche Börse Cybersecurity Challenge – Offline Round',
    org: 'IIT Hyderabad · Cybersecurity Competition',
    delay: '0.2s',
  },
  {
    icon: '🐛',
    name: 'Debug Arena',
    org: 'Programming Competition · Debugging Challenge',
    delay: '0.26s',
  },
];

export default function Certs() {
  return (
    <section id="certs" className="section">
      <div
        className="glow-orb"
        style={{ width: '500px', height: '500px', background: 'rgba(26,42,94,0.2)', top: '-100px', left: '-100px' }}
      />
      <div className="section-inner">
        <div className="section-label">♛ 04 · Certifications</div>
        <h2 className="section-title">Honours &amp; Achievements</h2>
        <div className="certs-list">
          {CERTS.map((c) => (
            <div
              key={c.name}
              className="cert-item reveal"
              style={c.delay ? { transitionDelay: c.delay } : {}}
            >
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-content">
                <div className="cert-name">{c.name}</div>
                <div className="cert-org">{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
