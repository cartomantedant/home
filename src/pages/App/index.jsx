import { useRef, useState } from 'react';
import useScrollSnap from 'react-use-scroll-snap';

import { Container } from './styles';

import { Home } from '../../components/Home';
import { Services } from '../../components/Services';
import { AboutMe } from '../../components/AboutMe';
import { Feedback } from '../../components/Feedback';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

export function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 30 });

  const [currentSlide, setCurrentSlide] = useState(null);

  const handleNavigateToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <Container className="App" ref={scrollRef}>
      <Home onNavigateToSlide={handleNavigateToSlide} />
      <Services currentSlide={currentSlide} />
      <AboutMe />
      <Feedback />
      <Contact />
      <Footer />
    </Container>
  );
}
