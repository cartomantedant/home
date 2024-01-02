import styled, { keyframes } from "styled-components";

const opening = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }

  100% {
    height: 11.1rem;
    opacity: 1;
  }
`;

export const Container = styled.footer`
  position: relative;
  font-size: 1.2rem;
  background: rgba(217, 217, 217, 0.5);
  text-align: start;
  padding: 0.8rem 0 0.8rem 3rem;

  .credits {
    position: relative;
    padding: 2rem 5rem 3rem 7rem;
    border-radius: 1rem;
    background: #D9D9D9;
    cursor: default;
    box-shadow: 5rem 0 5rem 400rem rgba(46, 17, 82, 0.5);
  }

  .credits.open {
    position: absolute;
    bottom: 5rem;
    left: 2rem;
    animation: ${opening} 100ms backwards;
  }

  .hidden {
    display: none;
  }

  .credits h1 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-family: ${({ theme }) => theme.FONTS.FONT_INNER};
    font-weight: 600;
  }

  .credits .close {
    cursor: pointer;
    position: absolute;
    left: 3rem;
    top: 2.5rem;
  }
`;
