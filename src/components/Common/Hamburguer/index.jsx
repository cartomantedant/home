import { useState, useRef, useEffect } from "react";
import { Container } from "./styles";

export function Hamburguer({ onNavigateToSlide }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const closeIconRef = useRef(null);

  const closeMenu = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const handleLinkClick = (slideIndex) => {
    onNavigateToSlide(slideIndex);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  const handleTouchMove = (event) => {
    if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMenuOpen]);

  return (
    <Container id="hamburguer" onClick={openMenu} ref={menuRef}>
      <ul className={`menu ${isMenuOpen ? 'open' : 'hidden'}`}>
        <div className="close" ref={closeIconRef} onClick={closeMenu}>
          <svg width="21" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.44434 17L17.4443 2" stroke="black" strokeWidth="3" strokeLinecap="round"/><path d="M2 2L17 17" stroke="black" strokeWidth="3" strokeLinecap="round"/><script xmlns=""/></svg>
        </div>
        <h1>Dant</h1>
        <li>
          <a href="#services">Serviços</a>
          <ul className="services">
            <li><a href='#tarot' onClick={() => handleLinkClick(0)}><span className="bullet">* </span>Tarot</a></li>
            <li><a href='#gypsy' onClick={() => handleLinkClick(1)}><span className="bullet">* </span>Baralho Cigano Lenormand</a></li>
            <li><a href='#table' onClick={() => handleLinkClick(2)}><span className="bullet">* </span>Mesa Radiônica de Saint German</a></li>
            <li><a href='#left' onClick={() => handleLinkClick(3)}><span className="bullet">* </span>Baralho de Esquerda</a></li>
            <li><a href='#pendulum' onClick={() => handleLinkClick(4)}><span className="bullet">* </span>Pêndulo Radiestésico</a></li>
            <li><a href='#map' onClick={() => handleLinkClick(5)}><span className="bullet">* </span>Mapa Numerológico</a></li>
          </ul>
        </li>
        <li><a href="#aboutMe">Sobre Mim</a></li>
        <li><a href="#feedback">Feedbacks</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </Container>
  );
}
