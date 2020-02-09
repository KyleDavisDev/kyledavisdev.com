import * as React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { StyledContainer, StyledTextContainer } from "./AboutMeStyles";

interface IAboutMeProps {}

const AboutMe: React.FunctionComponent<IAboutMeProps> = props => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <SectionTitle>About me</SectionTitle>
        <p>Hello world! Welcome to my portfolio website.</p>

        <p>
          I am a <span className="bold">Full-Stack Developer</span> that enjoys
          working with JavaScript as much as possible. You will, however, often
          find me learning new languages as well!
        </p>

        <p>
          I primarily focus on the front-end, where I make pixel-perfect,
          minimalistic designs, but I also enjoy working with databases and
          server logic. In my projects page, for example, you can find several
          applications where I wrote the entire stack!
        </p>

        <p>
          The majority of the updates to this site will be focused on the
          projects page. Stay tuned!
        </p>

        <p>-Kyle Davis</p>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default AboutMe;
