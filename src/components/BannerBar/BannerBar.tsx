import * as React from "react";
import { BackgroundContainer, ContentContainer } from "./BannerBarStyles";

interface IBarProps {
  children: any;
}

const BannerBar: React.FunctionComponent<IBarProps> = props => {
  return (
    <BackgroundContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </BackgroundContainer>
  );
};

export default BannerBar;
