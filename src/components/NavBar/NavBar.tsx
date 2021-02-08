import * as React from "react";
import Link from "next/link";
import Image from "next/image";

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
              <h3>
                <Image
                  src={"/documents/Davis_Kyle_09FEB2020.pdf"}
                  height={1}
                  width={1}
                />
              </h3>
            </a>
          </li>
        </StyledMenu>
      </StyledContainer>
    </StyledNav>
  );
};

export default NavBar;
