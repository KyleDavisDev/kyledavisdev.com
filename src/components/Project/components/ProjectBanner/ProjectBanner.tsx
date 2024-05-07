import * as React from "react";
import Link from "next/link";
import BannerBar from "../../../BannerBar/BannerBar";

import { StyledLink } from "./ProjectBannerStyles";
import { IExternalData } from "../../../../Data/Data";

export interface IProjectBanner extends IExternalData {
  year?: string;
}

const ProjectBanner: React.FC<IProjectBanner> = props => {
  const { name, link, linkText, isActive, year } = props;

  return (
    <BannerBar>
      <div>
        <h2>{`${name} ${year} && (${year})`}</h2>
        <Link href={"/"} legacyBehavior={true}>
          <StyledLink>&larr; Back</StyledLink>
        </Link>
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
