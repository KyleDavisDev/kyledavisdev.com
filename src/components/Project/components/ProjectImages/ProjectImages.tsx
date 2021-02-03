import * as React from "react";
import Image from "next/image";
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
              <Image
                src={path}
                title={name}
                alt={alt ? alt : `Screenshot of project ${name}`}
                width={"225"}
                layout={"fixed"}
                height={"225"}
                onClick={() => console.log("yo")}
              />
            </div>
          );
        })}
      </StyledImageContainer>
    </>
  );
};

export default ProjectImages;
