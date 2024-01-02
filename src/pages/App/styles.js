import styled from "styled-components";

export const Container = styled.div`
  
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    #aboutMe, #footer{
      grid-column: span 2;
    }
  }
`;