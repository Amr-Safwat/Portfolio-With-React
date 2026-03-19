import React, {useState} from 'react';
import './navBar.css';
import {BsTelephoneFill} from 'react-icons/bs';
import {LuSquareMenu} from 'react-icons/lu';

function NavBar({activeSection}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {name: 'Home', link: '#home', section: 'home'},
    {name: 'About', link: '#about', section: 'about'},
    {name: 'Resume', link: '#resume', section: 'resume'},
    {name: 'Portfolio', link: '#portfolio', section: 'portfolio'},
    {name: 'Blog', link: '#blog', section: 'blog'},
    {name: 'Contact', link: '#contact', section: 'contact'},
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header>
      <div className="container">
        <div className="logo">Portfolio</div>
        <div className="nav center">
          <nav className={menuOpen ? 'open' : ''}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <a
                  key={link.name}
                  href={link.link}
                  className={isActive ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="number center">
            |
            <div className="icon">
              <BsTelephoneFill />
            </div>
            <span>+201033792397</span>
          </div>
          <div className="menu" onClick={toggleMenu}>
            <LuSquareMenu size={30} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
