import * as React from "react";
import styled from "../../../../theme/styled-components";

const StyledH2 = styled.h2`
  margin-bottom: 0.5em;
`;

export interface ISectionHeader {
  children: string;
}

const SectionHeader: React.FC<ISectionHeader> = props => {
  return <StyledH2>{props.children}</StyledH2>;
};

export default SectionHeader;
