import * as React from "react";

import {
  StyledNav,
  StyledContainer,
  StyledName,
  StyledMenu,
} from "./NavStyles";

export interface INavProps {
  className?: string;
}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  return (
    <StyledNav>
      <StyledContainer>
        <StyledName>Kyle Davis</StyledName>

        <StyledMenu>
          <li>
            <a target="_blank" href="#">
              <h3>Resume</h3>
            </a>
          </li>
        </StyledMenu>
      </StyledContainer>
    </StyledNav>
  );
};

export default Nav;
