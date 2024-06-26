import * as React from "react";
import { IToolsItem } from "../../../../Data/tools";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ToolsContainer } from "./ProjectToolsStyles";

export interface IProjectTools {
  tools: Array<IToolsItem>;
}

const ProjectTools: React.FC<IProjectTools> = props => {
  const { tools } = props;

  if (tools.length === 0) return <></>;

  return (
    <div>
      <SectionHeader>Tools</SectionHeader>
      <ToolsContainer>
        {tools.map((tool, ind) => {
          return (
            <div key={`tool-${ind}`}>
              <a href={tool.link} rel={"nofollow noopener"} target={"_blank"}>
                <img key={tool.name} src={tool.img} title={tool.name} alt={tool.name} />
              </a>
            </div>
          );
        })}
      </ToolsContainer>
    </div>
  );
};

export default ProjectTools;
