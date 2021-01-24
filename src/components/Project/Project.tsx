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

const Project: React.FC<any> = () => {
  const router = useRouter();
  const { url } = router.query;
  const project = ProjectList.find(proj => proj.url === url);

  if (!project || Object.keys(project).length === 0) {
    return <p>Could not find project</p>;
  }

  const { name, images, tools, description, purpose, results } = project;
  const { link, name: externalName } = project.external;
  return (
    <>
      <ProjectBanner link={link} name={externalName} />

      <StyledProjectInfoContainer>
        <StyledContentContainer>
          <ProjectImages name={name} images={images} />
          {purpose && (
            <div>
              <h2>Purpose</h2>
              <p dangerouslySetInnerHTML={{ __html: purpose }} />
            </div>
          )}
          <div>
            <h2>Description</h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          {results && (
            <div>
              <h2>Results</h2>
              <p dangerouslySetInnerHTML={{ __html: results }} />
            </div>
          )}
          <ProjectTools tools={tools} />
        </StyledContentContainer>
      </StyledProjectInfoContainer>
    </>
  );
};

export default Project;
