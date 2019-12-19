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

export const StyledName = styled.h2`
  color: #3a4145;
`;

export const StyledImageContainer = styled.div`
  margin-right: 0px;
  box-sizing: border-box;
  @media (min-width: ${props => props.theme.exToSm}) {
    margin-right: 10px;
  }

  img {
    height: 250px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
`;

export const StyledContentContainer = styled.div`
  margin: 0px;
  box-sizing: border-box;
  @media (min-width: ${props => props.theme.exToSm}) {
    margin-left: 10px;
  }

  img {
    height: 50px;
    margin: 0 5px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: transparent;
    text-decoration: underline;
  }
`;
