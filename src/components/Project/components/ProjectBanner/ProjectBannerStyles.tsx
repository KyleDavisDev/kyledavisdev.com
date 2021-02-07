import styled from "../../../../theme/styled-components";

export const StyledLink = styled.a`
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: transparent;
    text-decoration: underline;
    cursor: pointer;
  }
`;
