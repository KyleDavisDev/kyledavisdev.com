import * as React from "react";
import BannerBar from "../../../BannerBar/BannerBar";

import { StyledLink } from "./ProjectBannerStyles";

export interface IProjectBanner {
  name: string;
  link: string;
}

const ProjectBanner: React.FC<IProjectBanner> = props => {
  const { name, link } = props;

  return (
    <BannerBar>
      <div>
        <h2>{name}</h2>
        <StyledLink href="/">&larr; Back</StyledLink>
      </div>
      <StyledLink href={link} target="_blank" rel="nofollow">
        View &rarr;
      </StyledLink>
    </BannerBar>
  );
};

export default ProjectBanner;
