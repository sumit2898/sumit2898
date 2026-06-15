const PROJECTS = [
  {
    num: '01',
    icon: '♜',
    title: 'Chess Portfolio Engine',
    desc: 'A Three.js powered interactive 3D portfolio website with chess-themed design, floating pieces, drag-to-rotate scene, and section-based navigation. Built as a personal showcase.',
    techs: ['Three.js', 'HTML5', 'CSS3', 'JavaScript'],
    demo: '#',
    github: 'https://github.com/sumit2898',
    demoLabel: 'Live Demo ↗',
  },
  {
    num: '02',
    icon: '♞',
    title: 'DSA Visualizer',
    desc: 'An interactive web-based tool to visualise common Data Structures and Algorithms — sorting, graph traversal, trees — with step-by-step animations. Built with vanilla JS.',
    techs: ['JavaScript', 'HTML5', 'CSS3', 'DSA'],
    demo: '#',
    github: 'https://github.com/sumit2898',
    demoLabel: 'Live Demo ↗',
    delay: '0.1s',
  },
  {
    num: '03',
    icon: '♝',
    title: 'React Task Manager',
    desc: 'A full-featured task management application built with React, featuring drag-and-drop boards, priority tagging, local storage persistence, and a clean dark UI.',
    techs: ['React', 'JavaScript', 'CSS3'],
    demo: '#',
    github: 'https://github.com/sumit2898',
    demoLabel: 'Live Demo ↗',
    delay: '0.15s',
  },
  {
    num: '04',
    icon: '♟',
    title: 'Cybersecurity Dashboard',
    desc: 'A data analytics dashboard prototype developed during the IIT Hyderabad Deutsche Börse Cybersecurity Challenge, visualising threat data with Power BI-style charts.',
    techs: ['Python', 'Power BI', 'Data Analytics'],
    demo: '#',
    github: 'https://github.com/sumit2898',
    demoLabel: 'Case Study ↗',
    delay: '0.2s',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div
        className="glow-orb"
        style={{ width: '600px', height: '600px', background: 'rgba(61,26,14,0.18)', bottom: '-200px', right: '-150px' }}
      />
      <div className="section-inner">
        <div className="section-label">♚ 03 · Projects</div>
        <h2 className="section-title">Moves on the Board</h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div
              key={p.num}
              className="project-card reveal"
              data-icon={p.icon}
              style={p.delay ? { transitionDelay: p.delay } : {}}
            >
              <div className="project-number">{p.num} / Project</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-techs">
                {p.techs.map(t => <span key={t} className="project-tech">{t}</span>)}
              </div>
              <div className="project-links">
                <a href={p.demo} className="project-link">{p.demoLabel}</a>
                <a href={p.github} className="project-link" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
