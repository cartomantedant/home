import { useRef, useState } from 'react';
import useScrollSnap from "react-use-scroll-snap";

import { Container } from './styles';

import { Home } from '../../components/Home';
import { Services } from '../../components/Services';
import { AboutMe } from '../../components/AboutMe';
import { Feedback } from '../../components/Feedback';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

export function App() {
  const [currentSlide, setCurrentSlide] = useState(null);

  const handleNavigateToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });


  return (
    <Container className="App" ref={scrollRef}>
        <Home onNavigateToSlide={handleNavigateToSlide} id="home"/>
        <Services currentSlide={currentSlide} id="services"/>
        <AboutMe />
        <Feedback />
        <Contact />
      <Footer />
    </Container>
  );
}
