import * as React from "react";
import styled from "styled-components";

interface ISectionTitleProps {
  children: string;
  className?: string;
}

const StyledH2 = styled.h2`
  color: #3a4145;
  font-weight: 700;
  font-family: DroidSansBold, Helvetica, Arial, sans-serif;
  margin-bottom: 0.5em;
  font-size: 1.5em;
`;

const SectionTitle: React.FunctionComponent<ISectionTitleProps> = props => {
  return <StyledH2 className={props.className}>{props.children}</StyledH2>;
};

export default SectionTitle;