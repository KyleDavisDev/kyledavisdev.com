import * as React from "react";
import { IToolsItem } from "../../../../Data/tools";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ToolsContainer } from "./ProjectToolsStyles";

export interface IProjectTools {
  tools: Array<IToolsItem>;
}

const ProjectTools: React.FC<IProjectTools> = props => {
  const { tools } = props;

  return (
    <div>
      <SectionHeader>Tools</SectionHeader>
      <ToolsContainer>
        {tools.map(tool => {
          return (
            <div>
              <a href={tool.link} rel={"nofollow noopener"} target={"_blank"}>
                <img
                  key={tool.name}
                  src={tool.img}
                  title={tool.name}
                  alt={tool.name}
                />
              </a>
            </div>
          );
        })}
      </ToolsContainer>
    </div>
  );
};

export default ProjectTools;
