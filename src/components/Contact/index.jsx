import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Container } from './styles';
import arrowRight from '../../assets/arrow-right.svg';
import ball from '../../assets/ball.png';

export function Contact() {
  return (
    <Container id='contato'>
      <main>
        <div className="flex">
          <div className="ball">
            <h1>Contato</h1>
            <img src={ball} alt="Bola de cristal" />
          </div>

          <img src={arrowRight} alt="Flecha apontando para a direita" />
          
          <div className="contact">
            <a target='_blank' rel='noopener noreferrer' href='https://wa.me/5548996922443'>
              <span><FaWhatsapp /></span>(48) 99692-2443
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/daniella.telles/'>
              <span><FaInstagram /></span>daniella.telles
            </a>
          </div>
        </div>

        <p>
          <a target='_blank' rel='noopener noreferrer' href='https://wa.me/5548996922443'>
            Quer se conhecer melhor? Me chame e descubra o que as cartas têm para contar.
          </a>
        </p>

        <a className='homeBtn' href='#'></a>
      </main>
    </Container>
  );
}
