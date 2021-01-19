import * as React from "react";
import { useRouter } from "next/router";
import ProjectList from "../../Data/Data";
import Bar from "../Bar/Bar";
import {
  StyledContentContainer,
  StyledImageContainer,
  StyledLink,
  StyledName,
  StyledProjectInfoContainer
} from "./ProjectStyles";

const Project: React.FC<{}> = () => {
  const router = useRouter();
  const { url } = router.query;
  const project = ProjectList.find(proj => proj.url === url);

  if (!project || Object.keys(project).length === 0) {
    return <p>Could not find project</p>;
  }

  const { name, img, tools, description, purpose, results } = project;
  const { linkPath, name: externalName } = project.external;
  return (
    <>
      <Bar>
        <div>
          <StyledName>{name}</StyledName>
          <StyledLink href="/">&larr; Back</StyledLink>
        </div>
        <StyledLink href={linkPath} target="_blank" rel="nofollow">
          View &rarr;
        </StyledLink>
      </Bar>
      <StyledProjectInfoContainer>
        <StyledImageContainer>
          <a
            href={linkPath}
            target="_blank"
            title={externalName}
            className="image-link"
          >
            <img
              src={img}
              title={name}
              alt={`Screenshot of project ${project.name}`}
            />
          </a>
        </StyledImageContainer>
        <StyledContentContainer>
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
          <div>
            <h2>Tools</h2>
            <p>
              {tools.map(tool => {
                return (
                  <img
                    key={tool.name}
                    src={tool.img}
                    className="technology-image"
                    title={tool.name}
                    alt={tool.name}
                  />
                );
              })}
            </p>
          </div>
        </StyledContentContainer>
      </StyledProjectInfoContainer>
    </>
  );
};

export default Project;
