import * as React from "react";
import Link from "next/Link";

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
                <Link
                  href={`project/${project.url}`}
                  passHref={false}
                  prefetch={true}
                >
                  <StyledAnchor>
                    <StyledImage
                      src={project.img}
                      title={project.name}
                      alt={project.name}
                      height={300}
                      width={300}
                    />
                    <span>{project.name}</span>
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
