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
          I am a <span className="bold">Software Engineer</span> who enjoys working with NodeJS and Java as much as
          possible. I especially enjoy working with TypeScript! Often times, however, you will find me learning new
          languages and technologies -- lately, I have been playing around with React Native.
        </p>

        <p>
          While I used to do a lot of full-stack work (for over 7 years!), I now primarily focus on the backend-end side
          of the stack such as designing (and building) performant APIs, working on business logic and architecting
          databases. The majority of my professional work private, and so I cannot demo them here, however, the project
          section below includes some of the projects I've created in my free time, either for fun or for self-learning!
        </p>

        <p>The majority of the updates to this site will be focused on the projects section. Stay tuned!</p>

        <p>-Kyle Davis</p>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default AboutMe;
