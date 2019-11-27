import * as React from "react";

import profilePic from "../../../../images/profile/profile-pic.jpg";
import {
  StyledContainer,
  StyledImageContainer,
  StyledImage,
  StyledHeaderContainer,
  StyledTextContainer,
  StyledName,
  StyledAttribute
} from "./HeaderStyles";

export interface IHeaderProps {}

export default class Header extends React.PureComponent<IHeaderProps> {
  public render() {
    return (
      <StyledContainer>
        <StyledHeaderContainer>
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
          </StyledTextContainer>
        </StyledHeaderContainer>
      </StyledContainer>
    );
  }
}
