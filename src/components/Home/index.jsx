import { Container } from './styles';
import { Hamburguer } from '../Common/Hamburguer';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';import logo from '../../assets/home-logo.svg';

export function Home({ onNavigateToSlide }) {
  const handleLinkClick = (slideIndex) => {
    onNavigateToSlide(slideIndex);
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(`#${sectionId}`, {
      duration: 800,
      smooth: 'easeInOutQuad',
    });
  }

  return (
    <Container>
      <Hamburguer onNavigateToSlide={onNavigateToSlide} />
      <div id="home">
        <h1>Dant</h1>
        <p>Cartomante, taróloga e terapeuta holística</p>
        <img src={logo} alt="Logo de uma mão com uma estrela flutuando" />
      </div>

      <ul id="navigation">
        <li><a className='mobile' href='#tarot' onClick={() => handleLinkClick(0)}><span className="bullet">* </span>Tarot</a></li>
        <li><a className='mobile' href='#gypsy' onClick={() => handleLinkClick(1)}><span className="bullet">* </span>Baralho Cigano Lenormand</a></li>
        <li><a className='mobile' href='#table' onClick={() => handleLinkClick(2)}><span className="bullet">* </span>Mesa Radiônica de Saint German</a></li>
        <li><a className='mobile' href='#left' onClick={() => handleLinkClick(3)}><span className="bullet">* </span>Baralho de Esquerda</a></li>
        <li><a className='mobile' href='#pendulum' onClick={() => handleLinkClick(4)}><span className="bullet">* </span>Pêndulo Radiestésico</a></li>
        <li><a className='mobile' href='#map' onClick={() => handleLinkClick(5)}><span className="bullet">* </span>Mapa Numerológico</a></li>

        <li><ScrollLink to="servicos" smooth duration={800} className='desktop'><span className="bullet">* </span>Serviços</ScrollLink></li>
        <li><ScrollLink to="sobremim" smooth duration={800} className='desktop'><span className="bullet">* </span>Sobre Mim</ScrollLink></li>
        <li><ScrollLink to="feedbacks" smooth duration={800} className='desktop'><span className="bullet">* </span>Feedback</ScrollLink></li>
        <li><ScrollLink to="contato" smooth duration={800} className='desktop'><span className="bullet">* </span>Contato</ScrollLink></li>
      </ul>
    </Container>
  );
}
