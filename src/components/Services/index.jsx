import { Container, FlipCard, Carousel } from './styles';
import { useEffect, useState } from 'react';

import tarot from './assets/tarot.png';
import gypsy from './assets/gypsy.png';
import table from './assets/table.png';
import left from './assets/left.png';
import pendulum from './assets/pendulum.png';
import map from './assets/map.png';

import tarotback from './assets/tarotback.png';
import gypsyback from './assets/gypsyback.png';
import tableback from './assets/tableback.png';
import leftback from './assets/leftback.png';
import pendulumback from './assets/pendulumback.png';
import mapback from './assets/mapback.png';

export function Services({ currentSlide }) {
  const cardData = [
    { id: 'tarot', title: `Tarot`, src: tarot, backCard: tarotback },
    { id: 'gypsy', title: 'Baralho Cigano Lenormand', src: gypsy, backCard: gypsyback },
    { id: 'table', title: 'Mesa Radiônica de Saint German', src: table, backCard: tableback },
    { id: 'left', title: 'Baralho de Esquerda', src: left, backCard: leftback },
    { id: 'pendulum', title: 'Pêndulo Radiestésico', src: pendulum, backCard: pendulumback },
    { id: 'map', title: 'Mapa Numerológico', src: map, backCard: mapback },
  ];

  const [slide, setSlide] = useState(0);
  const totalSlides = cardData.length;

  const [clickedCards, setClickedCards] = useState(Array(totalSlides).fill(false));

  const handleCardClick = (index) => {
    setClickedCards((prevClickedCards) => {
      const newClickedCards = [...prevClickedCards];
      newClickedCards[index] = !newClickedCards[index];
      return newClickedCards;
    });
  };

  useEffect(() => {
    if (currentSlide !== null) {
      setSlide(currentSlide);
    }
  }, [currentSlide]);

  const handlePrev = () => {
    setSlide((nextSlide) => (nextSlide - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handleLinkClick = (index) => {
    setSlide(index);
  };

  const isWideScreen = window.innerWidth > 600;

  return (
    <Container id="services">
      {cardData.map((card, index) => (
        <FlipCard
          className="cardContainer"
          key={card.id}
          style={{ display: isWideScreen ? 'block' : index === slide ? 'block' : 'none' }}
        >
          <div id={card.id} />
          <h1>{card.title}</h1>
          <div
            className={`card ${clickedCards[index] ? 'clicked' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="back">
              <img src={card.backCard} alt={card.title} />
            </div>
            <div className="middlePart"></div>
            <div className="front">
              <img src={card.src} alt={card.title} />
            </div>
          </div>
        </FlipCard>
      ))}

      <Carousel>
        <div className="carousel__nav">
          <button className="carousel__button carousel__button--left" onClick={handlePrev}>
            &lt;
          </button>

          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`carousel__indicator ${slide === index ? 'current__slide' : ''}`}
              onClick={() => handleLinkClick(index)}
            ></button>
          ))}

          <button className="carousel__button carousel__button--right" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </Carousel>
    </Container>
  );
}
