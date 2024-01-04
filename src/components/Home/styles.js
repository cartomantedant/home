import styled from "styled-components";

export const Container = styled.div`
    width: 18rem;
    min-height: 100vh;
    margin-inline: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.7rem;

    color: ${({theme}) => theme.COLORS.COLOR_MAIN};

    #home {
        position: relative;
        display: grid;
        place-items: center;
        margin-bottom: 3rem;
        
        img {
            position: relative;
            max-width: 7.3rem;
            left: 2rem;
        }
    }

    .desktop {
            display: none;
        }
    .mobile {
            display: block;
    }

    > div h1 {
        font-size: 8rem;
        text-align: center;
        color: #FFF;
    }

    > div p {
        font-size: 1.4rem;
        margin-bottom: 1.8rem;
        text-align: center;
    }

    > #navigation {
        text-align: center;
        width: 15rem;
        margin-inline: auto;
        font-size: 1.2rem;

        li {
            margin-bottom: 2rem;
            line-height: 1.4;
        }
    }

    @media (min-width: 600px) {
        width: 40rem;

        .desktop {
            display: block;
        }
        .mobile {
            display: none;
        }

        #home {
            width: 39.5rem;
            height: 22.6rem;
            line-height: 1;
            margin-bottom: 0;
            h1 {
                font-size: 16rem;

                position: absolute;
                top: 0.8rem;
                left: 0;
            }

            p {
                font-size: 2rem;
                max-width: 23.4rem;
                position: absolute;
                bottom: -1%;
                left: 3.4rem;

            }

            img {
                max-width: 13rem;
                position: absolute;
                bottom: 0;
                left: 100%;
                transform: translate(-100%);
            }
        }
    }
`;