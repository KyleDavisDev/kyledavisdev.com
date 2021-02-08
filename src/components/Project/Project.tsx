import * as React from "react";
import { useRouter } from "next/router";

import ProjectList from "../../Data/Data";
import {
  StyledContentContainer,
  StyledProjectInfoContainer
} from "./ProjectStyles";
import ProjectBanner from "./components/ProjectBanner/ProjectBanner";
import ProjectImages from "./components/ProjectImages/ProjectImages";
import ProjectTools from "./components/ProjectTools/ProjectTools";
import ProjectBlurb from "./components/ProjectBlurb/ProjectBlurb";

const Project: React.FC<any> = () => {
  const router = useRouter();
  const { url } = router.query;
  const project = ProjectList.find(proj => proj.url === url);

  if (!project || Object.keys(project).length === 0) {
    return <p>Could not find project</p>;
  }

  const { name, images, tools, description, purpose, results } = project;

  return (
    <>
      <ProjectBanner {...project.external} year={project.pubYear} />

      <StyledProjectInfoContainer>
        <StyledContentContainer>
          <ProjectImages name={name} images={images} />
          <ProjectBlurb title={"Purpose"} text={purpose} />
          <ProjectBlurb title={"Description"} text={description} />
          <ProjectBlurb title={"Results"} text={results} />
          <ProjectTools tools={tools} />
        </StyledContentContainer>
      </StyledProjectInfoContainer>
    </>
  );
};

export default Project;
