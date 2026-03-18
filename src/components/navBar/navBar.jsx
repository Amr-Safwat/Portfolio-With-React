import React, { useRef } from 'react'
import './navBar.css'
import {BsTelephoneFill} from 'react-icons/bs';
import {LuSquareMenu} from 'react-icons/lu';

function NavBar() {
  let menu = useRef();
  let navLinks = [
    {name: 'Home', link: '#home'},
    {name: 'About', link: '#about'},
    {name: 'Resume', link: '#resume'},
    {name: 'Portfolio', link: '#portfolio'},
    {name: 'Blog', link: '#blog'},
    {name: 'Contact', link: '#contact'},
  ];

  function openMenu() {
    menu.current.className !== 'open'
      ? (menu.current.className = 'open')
      : (menu.current.className = '');
  }
  return (
    <header>
      <div className="container">
        <div className="logo">Portfolio</div>
        <div className="nav center">
          <nav ref={menu}>
            {navLinks.map((link) => {
              return (
                <a key={link.name} href={link.link}>
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
          <div className="menu" onClick={openMenu}>
            <LuSquareMenu size={30} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar
