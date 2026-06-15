export default function Navbar() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        <span className="chess-icon">♟</span>
        <span>PORTFOLIO</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certs">Certs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
