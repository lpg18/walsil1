import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiFillHome } from 'react-icons/ai';
import { BsEnvelopeHeartFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';
import { MdContactPhone } from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const currentSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > 0;
      });

      if (currentSection) {
        setActiveNav(`#${currentSection.id}`);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (navId) => {
    const previousActiveNav = document.querySelector('.nav a.active');
    if (previousActiveNav) {
      previousActiveNav.classList.remove('active');
    }
    setActiveNav(navId);
    document.activeElement.blur(); // Desenfoca el botón después de hacer clic
  };

  return (
    <div id="nav" className="nav-container">
      <nav className="nav">
        <a
          href="#header"
          onClick={() => handleNavClick('#header')}
          className={activeNav === '#header' ? 'active' : ''}
        >
          <AiFillHome />
        </a>
        <a
          href="#about"
          onClick={() => handleNavClick('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <BsEnvelopeHeartFill />
        </a>
        <a
          href="#info"
          onClick={() => handleNavClick('#info')}
          className={activeNav === '#info' ? 'active' : ''}
        >
          <AiOutlineInfoCircle />
        </a>
        <a
          href="#confirmation"
          onClick={() => handleNavClick('#confirmation')}
          className={activeNav === '#confirmation' ? 'active' : ''}
        >
          <GiConfirmed />
        </a>
        <a
          href="#contact"
          onClick={() => handleNavClick('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <MdContactPhone />
        </a>
      </nav>
      <div className="scroll-invitation">
        <svg className="scroll-invitation__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 42">
          <path d="M2,12H2V30a10,10,0,0,0,20,0V12A10,10,0,0,0,2,12ZM0,12a12,12,0,0,1,24,0V30A12,12,0,0,1,0,30V12Z"></path>
          <path className="scroll-invitation__svg-line" d="M11,7v4a1,1,0,0,0,2,0V7a1,1,0,0,0-2,0Z"></path>
        </svg>
        <span className="scroll-invitation__text1">Desliza hacia arriba</span>
        <span className="scroll-invitation__text2">Scroll hacia abajo</span>
      </div>
    </div>
  );
};

export default Nav;
