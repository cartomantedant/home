import styled from "styled-components";

export const Container = styled.div`
    height: 100svh;
    margin-inline: auto;
    padding: 1rem 2.8rem 1rem 3.9rem;
    display: flex;
    align-items: center;
    gap: 2.3rem;

    img {
        max-width: 34.6rem;
    }

    .text {
        max-width: 50rem;
    }

    p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.COLOR_MAIN};
    }

    .indent {
        text-indent: 3ch;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            max-width: 24rem;
            position: relative;
            left: -5%;
        }
    }
`;
