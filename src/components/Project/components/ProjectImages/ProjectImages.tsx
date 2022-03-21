import * as React from "react";
import Image from "react-image-enlarger";

import { StyledImageContainer } from "./ProjectImagesStyles";
import { IProjectImageItem } from "../../../../Data/Data";
import SectionHeader from "../SectionHeader/SectionHeader";

export interface IProjectImages {
  name: string;
  images: Array<IProjectImageItem>;
}

const ProjectImages: React.FC<IProjectImages> = props => {
  const { name, images } = props;

  const initialState: boolean[] = Array.from({ length: images.length }, () => false);
  const [zoomed, setZoomed] = React.useState(initialState);

  const zoom = (ind: number) => {
    let zoom: boolean[] = [...zoomed];
    zoom[ind] = true;
    setZoomed(zoom);
  };

  const unZoom = () => {
    setZoomed(initialState);
  };

  React.useEffect(() => {
    const listenToKeyboard = (event: KeyboardEvent) => {
      const key = event.key;

      const activeInd = zoomed.indexOf(true);

      if (key.toLowerCase() === "arrowright") {
        let zoom = [...zoomed];

        const nextInd = activeInd + 1 >= zoomed.length ? 0 : activeInd + 1;

        zoom[activeInd] = false;
        zoom[nextInd] = true;

        setZoomed(zoom);
      } else if (key.toLowerCase() === "arrowleft") {
        let zoom = [...zoomed];

        const nextInd = activeInd - 1 <= -1 ? zoomed.length - 1 : activeInd - 1;
        zoom[activeInd] = false;
        zoom[nextInd] = true;
        setZoomed(zoom);
      } else if (key.toLowerCase() === "escape") {
        unZoom();
      }
    };

    window.addEventListener("keyup", listenToKeyboard);
    return () => window.removeEventListener("keyup", listenToKeyboard);
  }, [zoomed]);

  return (
    <>
      <SectionHeader>Screenshots</SectionHeader>
      <StyledImageContainer>
        {images.map((image, ind) => {
          const { alt, thumbnailPath, largePath } = image;
          const isZoomed = zoomed[ind];

          return (
            <div key={`image-${ind}`}>
              <Image
                src={thumbnailPath}
                enlargedSrc={largePath}
                title={name}
                zoomed={isZoomed}
                style={{ width: "225px", height: "225px", maxWidth: "inherit" }}
                overlayColor={"rgba(0,0,0,0.8)"}
                onClick={() => zoom(ind)}
                onRequestClose={() => unZoom()}
              />
            </div>
          );
        })}
      </StyledImageContainer>
    </>
  );
};

export default ProjectImages;
