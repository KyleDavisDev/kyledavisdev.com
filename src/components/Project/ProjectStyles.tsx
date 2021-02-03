import styled from "../../theme/styled-components";

export const StyledProjectInfoContainer = styled.div`
  padding: 2em 0;
  width: 100%;
`;

export const StyledContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;

  @media (min-width: ${props => props.theme.extraSmallToSmall}) {
  }

  // desktop
  @media (min-width: ${props => props.theme.mediumToLarge}) {
  }

  p {
    margin-top: 0.5em;
    margin-bottom: 2em;
    line-height: 1.8;
  }
`;
