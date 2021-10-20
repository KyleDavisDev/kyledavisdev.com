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
          working with JavaScript and C# as much as possible. Often, however,
          you will find me learning new languages and technologies as well!
        </p>

        <p>
          I primarily focus on the front-end, where I make pixel-perfect,
          minimalistic designs, but I also enjoy working with databases and
          server logic. The majority of my projects are internal tooling (behind
          login pages) and so I cannot demo them. The project section below,
          however, include some of my projects I've created in my off time
          either for fun or for learning!
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
