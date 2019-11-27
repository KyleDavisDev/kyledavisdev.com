import * as React from "react";
import { StyledContainer, StyledProjectsContainer } from "./ProjectsStyles";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

import ProjectList from "./components/Data/Data";

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = props => {
  return (
    <StyledContainer>
      <StyledProjectsContainer>
        <SectionTitle>Projects</SectionTitle>
        <div>
          {ProjectList.map(
            project =>
              project.isActive && (
                <div>
                  <Link key={project.name} className="card" to={project.url}>
                    <img
                      src={project.img}
                      title={project.name}
                      alt={project.name}
                    />
                    {project.name}
                  </Link>
                </div>
              )
          )}
        </div>
      </StyledProjectsContainer>
    </StyledContainer>
  );
};

export default Projects;
