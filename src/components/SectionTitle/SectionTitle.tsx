import * as React from "react";
import styled from "../../theme/styled-components";

interface ISectionTitleProps {
  children: string;
  className?: string;
}

const StyledH2 = styled.h2`
  color: ${props => props.theme.black};
  font-weight: 700;
  font-family: DroidSansBold, Helvetica, Arial, sans-serif;
  margin-bottom: 0.5em;
  font-size: 1.5em;
`;

const SectionTitle: React.FunctionComponent<ISectionTitleProps> = props => {
  return <StyledH2 className={props.className}>{props.children}</StyledH2>;
};

export default SectionTitle;
