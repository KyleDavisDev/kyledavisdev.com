import styled from "../../theme/styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  // tablets
  @media (min-width: ${props => props.theme.exToSm}) {
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
  @media (min-width: ${props => props.theme.exToSm}) {
    display: inline-block;
  }
`;

export const StyledImage = styled.img`
  max-width: 100px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 7px;
  background-color: #ebebeb;

  &:hover,
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.5);
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
      padding: 5px 10px;

      a {
        font-family: DroidSans;
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

  > span {
    font-family: DroidSansBold, Helvetica, Arial, sans-serif;
    font-weight: 700;
  }
`;
