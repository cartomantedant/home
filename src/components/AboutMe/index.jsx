import { Container } from './styles';
import aboutMe from '../../assets/about-me.png';

export function AboutMe() {
  return (
    <Container id="aboutMe">
      <img className="profile" src={aboutMe} alt="Foto de perfil de Dant" />
      <div className="text">
        <p>
          Sou Dant, terapeuta holística e taróloga com anos de experiência,
          mergulhando nas energias do esotérico. Especializo-me em Tarot,
          Baralho Cigano Lenormand e Baralho de Esquerda, oferecendo leituras
          profundas. Além disso, utilizo ferramentas como pêndulo radiestésico,
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
          Convido você a explorar sua jornada de autoconhecimento comigo, seja
          por meio do Tarot, radiestesia ou numerologia. Minha missão vai além
          de prever o futuro; busco guiar cada pessoa rumo ao empoderamento
          pessoal, conectando-as ao universo que as cerca. Descubra as diversas
          facetas do seu ser por meio de leituras que vão além das cartas
          tradicionais.
        </p>
      </div>
    </Container>
  );
}
