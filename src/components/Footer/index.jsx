import { useState, useRef, useEffect } from 'react';
import { Container } from './styles';

export function Footer() {
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const creditsRef = useRef(null);

  const openCredits = () => {
    setIsCreditsOpen(true);
  };

  const closeCredits = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setIsCreditsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (creditsRef.current && !creditsRef.current.contains(event.target)) {
      closeCredits();
    }
  };

  const handleTouchMove = (event) => {
    if (isCreditsOpen && creditsRef.current && !creditsRef.current.contains(event.target)) {
      closeCredits();
    }
  };

  const handleWheel = () => {
    if (isCreditsOpen) {
      closeCredits();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('wheel', handleWheel);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isCreditsOpen]);

  return (
    <Container id="footer">
      Site por <a target='blank' href="https://www.linkedin.com/in/laissanseverino/">Laís</a> e <a target='blank' href="https://www.linkedin.com/in/cristianvalim/">Cris </a>
     
      <button onClick={openCredits} ref={creditsRef}>
        / Créditos Imagens +
        <div className={`credits ${isCreditsOpen ? 'open' : 'hidden'}`}>
          <div className="close" onClick={closeCredits}>
            <svg width="21" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.44434 17L17.4443 2" stroke="black" strokeWidth="3" strokeLinecap="round" /><path d="M2 2L17 17" stroke="black" strokeWidth="3" strokeLinecap="round" /><script xmlns="" /></svg>
          </div>
          
          <h1>Créditos Imagens</h1>
          <ul>
            <li><a target='blank' href="https://br.freepik.com/autor/rawpixel-com">rawpixel.com</a> / Freepik</li>
            <li><a target='blank' href="https://br.freepik.com/autor/pikisuperstar">pikisuperstar</a> / Freepik</li>
          </ul>
        </div>
      </button>
    </Container>
  );
}
