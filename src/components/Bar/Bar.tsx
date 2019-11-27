import * as React from "react";
import { BackgroundContainer, ContentContainer } from "./BarStyles";

interface IBarProps {
  children: any;
}

const Bar: React.FunctionComponent<IBarProps> = props => {
  return (
    <BackgroundContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </BackgroundContainer>
  );
};

export default Bar;
