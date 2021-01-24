import styled from "../../theme/styled-components";

export const StyledProjectInfoContainer = styled.div`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;

  // desktop
  @media (min-width: ${props => props.theme.mediumToLarge}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledImageContainer = styled.div`
  box-sizing: border-box;
  padding: 0 15px;
  max-width: 350px !important;
  width: 100%;
  flex: 1;
  margin-bottom: 15px;

  //tablets
  @media (min-width: ${props => props.theme.extraSmallToSmall}) {
  }

  // desktop
  @media (min-width: ${props => props.theme.mediumToLarge}) {
    margin-bottom: 0;
  }

  img {
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`;

export const StyledContentContainer = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  padding: 0 15px;

  @media (min-width: ${props => props.theme.extraSmallToSmall}) {
  }

  // desktop
  @media (min-width: ${props => props.theme.mediumToLarge}) {
    flex: 3;
  }

  img {
    height: 50px;
    margin: 0 5px;
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 2em;
    line-height: 1.8;
  }
`;
