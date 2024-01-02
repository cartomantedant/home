import styled, {keyframes} from "styled-components";
import hamburguer from '../../../assets/hamburguer.png'

const opening = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }

  100% {
    height: 67rem;
    opacity: 1;
  }
`;

export const Container = styled.div`
    background-image: url(${hamburguer});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 3.6rem;
    height: 3.2rem;

    position: absolute;
    top: 2.6rem;
    left: 2.8rem;
  
    z-index: 1;
    color: #000; 
    cursor: pointer;

    .close {
        cursor: pointer;
    }

    .hidden {
        display: none;
    }

    .menu.open {
        position: absolute;
        left: -1.3rem;
        top: -1.3rem;
    }

    .menu {
        animation: ${opening} 500ms forwards;

        box-shadow: 5rem 0 5rem 20rem rgba(46, 17, 82, 0.5);
        cursor: default;

        position: relative;
        left: -20%;

        background: #D9D9D9;
        min-height: max-content;
        width: 70vw;

        border-radius: 1rem;

        padding: 3rem 3rem 0 3rem;

        .close {
            width:max-content;
            position: absolute;
            left: 1.5rem;
            top: 1.8rem;
        }

        h1 {
            font-size: 4.4rem;
            text-align: center;
            color: #000;
        }

        li {
            font-size: 2rem; 
            font-weight: 700;
            padding: 3rem 0;
            border-top: .05rem solid #A4A4A4;
        }
    }

    .services {
        
        li {
            font-size: 1.2rem; 
            font-weight: normal;
            padding: 0;
            margin-left: 15%;
            border-top: none;
        }
    }

    @media (min-width: 600px) {
        display: none;
    }
`;