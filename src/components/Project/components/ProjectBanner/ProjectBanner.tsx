import * as React from "react";
import BannerBar from "../../../BannerBar/BannerBar";

import { StyledLink } from "./ProjectBannerStyles";
import { IExternalData } from "../../../../Data/Data";

export interface IProjectBanner extends IExternalData {}

const ProjectBanner: React.FC<IProjectBanner> = props => {
  const { name, link, linkText, isActive } = props;

  return (
    <BannerBar>
      <div>
        <h2>{name}</h2>
        <StyledLink href="/">&larr; Back</StyledLink>
      </div>
      {isActive && (
        <StyledLink href={link} target="_blank" rel="nofollow">
          {linkText ? linkText : "View"} &rarr;
        </StyledLink>
      )}
    </BannerBar>
  );
};

export default ProjectBanner;
