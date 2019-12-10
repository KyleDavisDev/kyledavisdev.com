import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 2em;
`;

export const StyledProjectsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > div {
      padding: 5px 10px 15px;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;

      // tablets
      @media (min-width: ${props => props.theme.exToSm}) {
        max-width: 50%;
      }

      // desktop
      @media (min-width: ${props => props.theme.mdToLg}) {
        max-width: 33%;
      }

      a {
        padding: 5px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;

        &:hover,
        &:focus {
          background-color: transparent;
        }

        img {
          max-width: 100%;
          margin-bottom: 5px;
        }
      }
    }
  }
`;
