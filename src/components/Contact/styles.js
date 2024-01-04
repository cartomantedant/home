import styled, { keyframes } from "styled-components";
import background from '../../assets/homeBtn.png';

const slideIn = keyframes`
  0% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
    height: 100vh;
    position: relative;

    display: grid;
    place-content: center;
    color: ${({ theme }) => theme.COLORS.COLOR_MAIN};

    main {
        display: grid;
        gap: 25%;

        .flex {
            margin-inline: 3.5rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 2rem;
            color: ${({ theme }) => theme.COLORS.COLOR_INNER};

            h1 {
                margin-right: 1rem;
            }

            .ball {
                display: grid;
                place-items: center;

                img {
                    width: 5.6rem;
                    height: 6.1rem;
                }
            }

            .contact {
                font-size: 1.2rem;

                display: flex;
                flex-direction: column;
                gap: 3.4rem;

                a {
                    display: flex;
                    gap: .5rem;
                    color: ${({ theme }) => theme.COLORS.COLOR_MAIN};
                }
            }
        }

        .homeBtn {
            background-image: url(${background});
            background-repeat: no-repeat;
            background-size: 100%;
            width: 5rem;
            height: 3rem;

            position: absolute;
            right: 3rem;
            bottom: 3rem;

            animation: ${slideIn} 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate both;
        }
    }

    main p {
        max-width: 29rem;
        font-size: 1.4rem;
        text-align: center;
        margin: auto;
    }

    footer {
        background: rgba(217, 217, 217, 0.5);
        text-align: start;
        padding: .8rem;
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    @media (min-width: 600px) {
        main img {
            height: 23rem;
        }

        main .flex {
            gap: 5rem;
        }

        main .flex h1 {
            font-size: 6.4rem;
        }

        main .flex .ball img {
            width: 8.2rem;
            height: 9rem;
        }

        main .flex .contact {
            gap: 5.7rem;

            a {
                font-size: 1.6rem;
            }
        }

        main p {
            max-width: 38.5rem;
        }
    }    
`;
