const SKILLS = [
  {
    icon: '⚡',
    name: 'Languages',
    tags: ['C++', 'Python', 'JavaScript'],
    bars: [
      { label: 'C++', pct: '80%' },
      { label: 'JavaScript', pct: '75%' },
      { label: 'Python', pct: '65%' },
    ],
  },
  {
    icon: '🌐',
    name: 'Web Technologies',
    tags: ['React', 'HTML5', 'CSS3', 'Three.js'],
    bars: [
      { label: 'React', pct: '72%' },
      { label: 'HTML / CSS', pct: '85%' },
    ],
    delay: '0.1s',
  },
  {
    icon: '🧠',
    name: 'CS Fundamentals',
    tags: ['DSA', 'OOP', 'Algorithms'],
    bars: [{ label: 'DSA', pct: '70%' }],
    delay: '0.2s',
  },
  {
    icon: '🔧',
    name: 'Tools & Platforms',
    tags: ['Git', 'GitHub', 'Power BI', 'VS Code'],
    bars: [],
    delay: '0.1s',
  },
  {
    icon: '📊',
    name: 'Data & Analytics',
    tags: ['Microsoft Power BI', 'Excel', 'Data Analytics'],
    bars: [],
    delay: '0.2s',
  },
  {
    icon: '♟',
    name: 'Soft Skills',
    tags: ['Strategic Thinking', 'Problem Solving', 'Team Collaboration', 'Fast Learner'],
    bars: [],
    delay: '0.3s',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div
        className="glow-orb"
        style={{ width: '500px', height: '500px', background: 'rgba(61,42,0,0.2)', top: '-100px', right: '-100px' }}
      />
      <div className="section-inner">
        <div className="section-label">♜ 02 · Skills</div>
        <h2 className="section-title">Pieces in the Arsenal</h2>
        <div className="skills-grid">
          {SKILLS.map((cat) => (
            <div
              key={cat.name}
              className="skill-category reveal"
              style={cat.delay ? { transitionDelay: cat.delay } : {}}
            >
              <span className="skill-category-icon">{cat.icon}</span>
              <div className="skill-category-name">{cat.name}</div>
              <div className="skill-tags">
                {cat.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
              {cat.bars.map((bar, idx) => (
                <div key={bar.label} className="skill-bar-row" style={idx > 0 ? { marginTop: '0.6rem' } : {}}>
                  <div className="skill-bar-label">
                    <span>{bar.label}</span><span>{bar.pct}</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" data-width={bar.pct} style={{ width: 0 }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
