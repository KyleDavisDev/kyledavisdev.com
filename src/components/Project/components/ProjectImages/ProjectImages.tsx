import * as React from "react";
import { StyledImageContainer } from "./ProjectImagesStyles";
import { IProjectImageItem } from "../../../../Data/Data";
import SectionHeader from "../SectionHeader/SectionHeader";

export interface IProjectImages {
  name: string;
  images: Array<IProjectImageItem>;
}

const ProjectImages: React.FC<IProjectImages> = props => {
  const { name, images } = props;

  return (
    <>
      <SectionHeader>Screenshots</SectionHeader>
      <StyledImageContainer>
        {images.map(image => {
          const { alt, path } = image;

          return (
            <div>
              <img
                src={path}
                title={name}
                alt={alt ? alt : `Screenshot from project ${name}`}
                width={"225"}
                height={"225"}
              />
            </div>
          );
        })}
      </StyledImageContainer>
    </>
  );
};

export default ProjectImages;
