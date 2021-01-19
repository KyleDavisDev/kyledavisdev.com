import * as React from "react";

import NavBar from "../../src/components/NavBar/NavBar";
import Project from "../../src/components/Project/Project";

const ProjectPage: React.FC<{}> = () => {
  return (
    <>
      <NavBar />
      <Project />
    </>
  );
};

export default ProjectPage;
