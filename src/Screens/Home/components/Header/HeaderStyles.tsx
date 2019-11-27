import styled from "../../../../theme/styled-components";

export const StyledImageContainer = styled.a`
  text-decoration: none;
  display: inline-block;
  &:hover,
  &:focus {
    background-color: transparent;
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
`;

export const StyledName = styled.h1`
  color: #3a4145;
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
