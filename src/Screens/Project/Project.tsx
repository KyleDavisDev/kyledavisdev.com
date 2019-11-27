import * as React from "react";
import { Nav } from "../../components/Nav/Nav";
import Bar from "../../components/Bar/Bar";

interface IProjectProps {}

const Project: React.FunctionComponent<IProjectProps> = props => {
  return (
    <React.Fragment>
      <Nav />
      <Bar>Test contnet</Bar>
    </React.Fragment>
  );
};

export default Project;
