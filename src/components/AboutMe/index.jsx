import { Container } from './styles';
import aboutMe from '../../assets/about-me.png';

export function AboutMe() {
  return (
    <Container id="sobremim">
      <img className="profile" src={aboutMe} alt="Foto de perfil de Dant" />
      <div className="text">
        <p>
          Sou Dant, terapeuta holística e taróloga com anos de experiência.
          Especializo-me em Tarot, Baralho Cigano Lenormand e Baralho de Esquerda, oferecendo leituras
          profundas. Também tenho como ferramentas o Pêndulo Radiestésico,
          Mesa Radiônica de Saint Germain e Mapa Numerológico.
        </p>
        <br />
        <p className="indent">
          Minha abordagem intuitiva busca proporcionar clareza e entendimento,
          ultrapassando o convencional. Com sensibilidade única, estou sempre
          explorando novas abordagens para enriquecer a experiência do
          consultante.
        </p>
        <br />
        <p className="indent">
          Meu objetivo é te ajudar a explorar sua jornada de autoconhecimento, seja
          por meio do Tarot, radiestesia ou numerologia, busco guiar cada pessoa rumo ao empoderamento
          pessoal.
        </p>
      </div>
    </Container>
  );
}
