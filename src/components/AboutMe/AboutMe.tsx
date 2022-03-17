import * as React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { StyledContainer, StyledTextContainer } from "./AboutMeStyles";

interface IAboutMeProps {}

const AboutMe: React.FunctionComponent<IAboutMeProps> = props => {
  return (
    <StyledContainer>
      <StyledTextContainer>
        <SectionTitle>About me</SectionTitle>
        <p>Welcome to my portfolio website.</p>

        <p>
          I am a <span className="bold">Software Engineer</span> who enjoys
          working with JavaScript and C# as much as possible. Often, however,
          you will find me learning new languages and technologies! Lately, I have
          been playing around with React Native.
        </p>

        <p>
          I primarily focus on the front-end, where I make pixel-perfect,
          minimalistic designs, but I also enjoy working with databases and
          server logic. The majority of my work is internal tooling
          (behind login pages), so I cannot demo them here; however, the
          project section below includes some of the projects I've created
          in my free time, either for fun or for self-learning!
        </p>

        <p>
          The majority of the updates to this site will be focused on the
          projects section. Stay tuned!
        </p>

        <p>-Kyle Davis</p>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default AboutMe;
