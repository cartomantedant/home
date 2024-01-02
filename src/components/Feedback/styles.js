import styled, { keyframes } from "styled-components";

const forwardsAnimation = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 1;
  }
  25% {
    transform: translateX(50%);
    opacity: 0;
  }
  50% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(-50%);
  }
`;

const backwardsAnimation = keyframes`
  0% {
    transform: translateX(-50%);
    opacity: 1;
  }
  25% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(50%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(-50%);
  }
`;

export const Container = styled.div`
  height: 100svh;
  position: relative;

  .flex {
    position: relative;
    top: 20%;

    .feedbackpic {
      width: 29rem;
      position: relative;
      left: 50%;
      transform: translate(-50%);
    }

    .forwards {
      animation: ${forwardsAnimation} 800ms linear;
    }

    .backwards {
      animation: ${backwardsAnimation} 800ms linear;
    }
  }

  .title {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    color: ${({ theme }) => theme.COLORS.COLOR_INNER};

    img {
      max-width: 1.7rem;
      margin: auto 0;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 6.4rem;
    }

    .title img {
      max-width: 3rem;
    }

    .flex {
      top: 0;

      .feedbackpic {
        width: 41rem;
      }
    }
  }
`;

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
      font-family: ${({ theme }) => theme.FONTS.FONT_MAIN};
      font-size: 6rem;
      color: ${({ theme }) => theme.COLORS.COLOR_INNER};
    }

    > .carousel__indicator {
      border-radius: 50%;
      width: 1.1rem;
      height: 1.1rem;
      background: #D9D9D9;
    }

    > .current__slide {
      background: ${({ theme }) => theme.COLORS.COLOR_INNER};
    }
  }
`;
