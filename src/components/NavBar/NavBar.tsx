import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { StyledNav, StyledContainer, StyledName, StyledMenu } from "./NavStyles";

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
            <Link href={"/static/documents/Davis_Kyle_21MAR2022.pdf"}>
              <a>
                <h3>Resume</h3>
              </a>
            </Link>
          </li>
        </StyledMenu>
      </StyledContainer>
    </StyledNav>
  );
};

export default NavBar;
