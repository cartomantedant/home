import { useState } from 'react';

import feedback1 from './assets/feedback1.png';
import feedback2 from './assets/feedback2.png';
import feedback3 from './assets/feedback3.png';
import feedback4 from './assets/feedback4.png';
import feedback5 from './assets/feedback5.png';
import feedback6 from './assets/feedback6.png';
import star from './assets/star.png';

import { Container, Carousel } from './styles';

export function Feedback() {
  const feedbackData = [
    { id: "1", src: feedback1 },
    { id: "2", src: feedback2 },
    { id: "3", src: feedback3 },
    { id: "4", src: feedback4 },
    { id: "5", src: feedback5 },
    { id: "6", src: feedback6 },
  ];

  const [feedbackSlide, setFeedbackSlide] = useState(0);
  const totalSlides = feedbackData.length;

  const [animation, setAnimation] = useState(null);

  const handlePrev = () => {
    setFeedbackSlide((nextSlide) => (nextSlide - 1 + totalSlides) % totalSlides);
    setAnimation("backwards");
  };

  const handleNext = () => {
    setFeedbackSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    setAnimation("forwards");
  };

  const handleLinkClick = (index) => {
    setFeedbackSlide(index);
  };

  return (
    <Container id='feedback'>
      {feedbackData.map((data, index) => (
        <div
          className='flex'
          key={data.id}
          style={{ display: index === feedbackSlide ? 'block' : 'none' }}
        >
          <div className="title">
            <img src={star} alt="Estrela decorativa" />
            <h1>Feedback</h1>
            <img src={star} alt="Estrela decorativa" />
          </div>
          <img className={`feedbackpic ${animation}`} src={data.src} alt={`Feedback ${index + 1}`} />
        </div>
      ))}

      <Carousel>
        <div className="carousel__nav">
          <button
            className="carousel__button carousel__button--left"
            onClick={handlePrev}
          >
            &lt;
          </button>

          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`carousel__indicator ${
                feedbackSlide === index ? 'current__slide' : ''
              }`}
              onClick={() => handleLinkClick(index)}
            ></button>
          ))}

          <button
            className="carousel__button carousel__button--right"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </Carousel>
    </Container>
  );
}
