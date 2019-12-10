import * as React from "react";

import profilePic from "../../images/profile/profile-pic.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  StyledImageContainer,
  StyledImage,
  StyledTextContainer,
  StyledName,
  StyledAttribute
} from "./HeaderStyles";
import Bar from "../Bar/Bar";

export interface IHeaderProps {}

export default class Header extends React.PureComponent<IHeaderProps> {
  public render() {
    return (
      <Bar>
        <StyledImageContainer href="#">
          <StyledImage src={profilePic} />
        </StyledImageContainer>
        <StyledTextContainer>
          <StyledName>Kyle Davis</StyledName>
          <StyledAttribute>
            <span>Full Stack Developer</span>
          </StyledAttribute>
          <StyledAttribute>
            Practicing <span>Coffee Drinker</span>
          </StyledAttribute>
          <ul>
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
      </Bar>
    );
  }
}
