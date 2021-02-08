import styled from "../../theme/styled-components";

export const StyledNav = styled.nav`
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
  min-height: 35px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;
  align-content: center;
  justify-content: space-between;
`;

export const StyledName = styled.h3`
  background-color: ${x => x.theme.sitePrimaryColor};
  color: rgb(0, 160, 227);
  padding: 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      background-color: transparent;
    }
  }
`;

export const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  align-items: stretch;

  > li {
    padding: 0 10px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;

    &:hover,
    &:focus {
      background-color: ${x => x.theme.sitePrimaryColor};
    }

    a {
      text-decoration: none;

      &:hover,
      &:focus {
        background-color: transparent;
      }
    }
  }
`;
