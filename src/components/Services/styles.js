import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100svh;
  
  @media (min-width: 600px) {
    left: -13%;
    width: 100%;
    padding-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

const flipAnimation = keyframes`
  0% {
    transform: rotateY(180deg);
  }

  50% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(180deg);
  }
`;

const hoverAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`

const deskAnimation = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
`

export const FlipCard = styled.div`
 h1 {
  width: 15rem;
  margin-inline: auto;
  height: 5.6rem;
  text-align: center;
  font-family: ${({theme}) => theme.FONTS.FONT_INNER};
  color: ${({theme}) => theme.COLORS.COLOR_MAIN};

  font-size: 1.6rem;
  font-weight: 600;
}

.card{
  max-width: 16rem;
  margin-inline: auto;
  will-change: transform;
  background: transparent;
  transform-style: preserve-3d;
}

.back, .front{
  backface-visibility: hidden;
  box-shadow: .6rem .6rem .6rem 0px rgba(0, 0, 0, 0.25); 
  border-radius: 1.7rem;
}

.back {
  position: absolute;
}

.front{
  transform: rotateY(180deg);
}

@media (max-width: 599px) {
  .card {
    animation:${flipAnimation} 1s forwards ease-out;
  }}
  
  @media (min-width: 600px) { 
    .card{
      animation:${deskAnimation} 1s forwards ease-in-out;
    }
    
    .card:hover {
      cursor: pointer;
    }

    .clicked{
      animation:${hoverAnimation} 1s forwards ease-out;
    }}
    
 @media (max-width: 600px) {
   width: 55vw;
   min-width: 22rem;
   height: 100vh;
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
  
 h1 {
   width: 22rem;
   font-size: 2.4rem;
   margin-top: 50%;
   display: flex;
   align-items: flex-end;
   justify-content: center;
  }

  .card {
    padding-top: 5rem;
    max-width: 100%;
  }

}
    `

export const Carousel = styled.div`
> .carousel__nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 600px) { 
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
  }
  
  > .carousel__button {
    font-family: ${({theme}) => theme.FONTS.FONT_MAIN};
    font-size: 6rem;
    color: ${({theme}) => theme.COLORS.COLOR_INNER};
  }
  
    > .carousel__indicator {
        border-radius: 50%;
        width: 1.1rem;
        height: 1.1rem;
        background: #D9D9D9;
    }

    > .current__slide {
        background: ${({theme}) => theme.COLORS.COLOR_INNER};
    }
}
@media (min-width: 600px) {
  display: none;
}
`;