import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [['About', 'about'], ['Education', 'education'], ['Experience', 'experience'], ['Expertise', 'expertise'], ['Services', 'services'], ['Work', 'work']];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className="site-header">
    <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">GK</span><span>Golu Kumar<span className="brand-dot">.</span></span></a>
    <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a></nav>
  </header>;
}

export default Header;
