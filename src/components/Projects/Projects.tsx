import * as React from "react";
import Link from "next/link";

import {
  StyledContainer,
  StyledGrid,
  StyledProject,
  StyledProjectsContainer,
  StyledImage,
  StyledAnchor
} from "./ProjectsStyles";
import SectionTitle from "../SectionTitle/SectionTitle";

import ProjectList from "../../Data/Data";

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = () => {
  return (
    <StyledContainer>
      <StyledProjectsContainer>
        <SectionTitle>Projects</SectionTitle>
        <StyledGrid>
          {ProjectList.map(project => {
            if (!project.isActive) return;
            return (
              <StyledProject key={project.url}>
                <Link href={`project/${project.url}`} passHref={false}>
                  <StyledAnchor>
                    <StyledImage
                      src={project.images[0].path}
                      title={project.name}
                      alt={project.name}
                      height={300}
                      width={300}
                    />
                    <span>
                      {project.name} {project.pubYear && `(${project.pubYear})`}
                    </span>
                  </StyledAnchor>
                </Link>
              </StyledProject>
            );
          })}
        </StyledGrid>
      </StyledProjectsContainer>
    </StyledContainer>
  );
};

export default Projects;
