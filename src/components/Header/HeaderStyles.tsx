import Image from "next/image";
import styled from "../../theme/styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  // tablets
  @media (min-width: ${props => props.theme.extraSmallToSmall}) {
    flex-direction: row;
    margin: 0;
  }
`;

export const StyledImageContainer = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;

  &:hover,
  &:focus {
    background-color: transparent;
  }

  // tablets
  @media (min-width: ${props => props.theme.extraSmallToSmall}) {
    display: inline-block;
  }
`;

export const StyledImage = styled(Image)`
  max-width: 100px;
  width: 100%;
  height: 100%;
  padding: 7px !important;
  background-color: #ebebeb;
  border: 1px solid rgba(0, 0, 0, 0.125) !important;
  border-radius: 50%;

  &:hover,
  &:focus {
    opacity: 0.8;
    border: 1px solid rgba(0, 0, 0, 0.5) !important;
  }

  // tablets
  @media (min-width: ${props => props.theme.extraSmallToSmall}) {
    height: auto;
  }
`;

export const StyledTextContainer = styled.div`
  padding: 5px 15px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      padding: 5px 10px 0 0;

      a {
        font-family: DroidSans, serif;
        text-decoration: none;

        &:hover,
        &:focus {
          background-color: transparent;
          text-decoration: underline;
        }
      }
    }
  }
`;

export const StyledName = styled.h1`
  color: ${props => props.theme.black};
  font-size: 3em;
  font-family: DroidSansBold, Helvetica, Arial, sans-serif;
`;

export const StyledAttribute = styled.h2`
  color: gray;
  font-size: 1.5em;
  font-weight: 400;
  font-family: DroidSans, Helvetica, Arial, sans-serif;
  > strong {
    font-family: DroidSansBold, Helvetica, Arial, sans-serif;
    font-weight: 700;
  }
`;
