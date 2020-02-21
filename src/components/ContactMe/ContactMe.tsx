import * as React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { StyledContainer, StyledTextContainer } from "./ContactMeStyles";

import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface IContactMeProps {}

const ContactMe: React.FunctionComponent<IContactMeProps> = props => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <SectionTitle>Contact me</SectionTitle>
        <div id="contact-me" className="mb2">
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
        </div>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default ContactMe;
