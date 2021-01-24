import styled from "../../../../theme/styled-components";

export const StyledImageContainer = styled.div`
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;

  > div {
    padding-right: 25px;
  }

  //tablets
  @media (min-width: ${props => props.theme.extraSmallToSmall}) {
  }

  // desktop
  @media (min-width: ${props => props.theme.mediumToLarge}) {
  }

  img {
    //margin: 0 15px !important;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
`;
