import * as React from "react";
import Link from "next/link";

import {
  StyledNav,
  StyledContainer,
  StyledName,
  StyledMenu
} from "./NavStyles";

export interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = () => {
  return (
    <StyledNav>
      <StyledContainer>
        <StyledName>
          <Link href={"/"}>
            <a>Kyle Davis</a>
          </Link>
        </StyledName>

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

export default NavBar;
