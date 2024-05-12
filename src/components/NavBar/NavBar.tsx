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
          <Link href={"/"}>Kyle Davis</Link>
        </StyledName>

        <StyledMenu>
          <li>
            <Link href={"/static/documents/Davis_Kyle_2024_05_07.pdf"} target={"_blank"}>
              <h3>Resume</h3>
            </Link>
          </li>
        </StyledMenu>
      </StyledContainer>
    </StyledNav>
  );
};

export default NavBar;
