import * as React from "react";

import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import {
  StyledContainer,
  StyledImageContainer,
  StyledImage,
  StyledTextContainer,
  StyledName,
  StyledAttribute
} from "./HeaderStyles";
import BannerBar from "../BannerBar/BannerBar";

export interface IHeaderProps {}

export default class Header extends React.PureComponent<IHeaderProps> {
  public render() {
    return (
      <BannerBar>
        <StyledContainer>
          <StyledImageContainer href="#">
            <StyledImage
              src="/static/profile-pic.jpg"
              alt="me"
              height={116}
              width={116}
            />
          </StyledImageContainer>
          <StyledTextContainer>
            <StyledName>Kyle Davis</StyledName>
            <StyledAttribute>
              <strong>Software Engineer</strong>
            </StyledAttribute>
            <ul>
              <li>
                <a
                  href="/static/documents/Davis_Kyle_14MAR2022.pdf"
                  target="_blank"
                >
                  <FaFileAlt /> Resume
                </a>
              </li>
              <li>
                <a href="mailto:kyledavisdev@gmail.com">
                  <FaEnvelope /> Mail
                </a>
              </li>
              <li>
                <a href="https://github.com/kyledavisdev" target="_blank">
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kyle-davis-687276126/"
                  target="_blank"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
            </ul>
          </StyledTextContainer>
        </StyledContainer>
      </BannerBar>
    );
  }
}
