import styled from "../../theme/styled-components";

export const StyledProjectInfoContainer = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 900px;

  // tablets
  @media (min-width: ${props => props.theme.exToSm}) {
    flex-direction: row;
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;

  // tablets
  @media (min-width: ${props => props.theme.exToSm}) {
    width: 33%;
  }
`;
