import * as React from "react";
import Image from 'next/image'
import { StyledContainer, StyledProjectsContainer } from "./ProjectsStyles";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

import ProjectList from "../../Data/Data";

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = props => {
  return (
    <StyledContainer>
      <StyledProjectsContainer>
        <SectionTitle>Projects</SectionTitle>
        <div>
          {ProjectList.map(project => {
            if (!project.isActive) return;
            return (
              <div key={project.url}>
                <Link
                  key={project.name}
                  className="card"
                  to={`project/${project.url}`}
                >
                  <Image
                    src={project.img}
                    title={project.name}
                    alt={project.name}
                    width="64" height="64"
                  />
                  {project.name}
                </Link>
              </div>
            );
          })}
        </div>
      </StyledProjectsContainer>
    </StyledContainer>
  );
};

export default Projects;
