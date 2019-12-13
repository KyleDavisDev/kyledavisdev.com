import * as React from "react";
import { Nav } from "../../components/Nav/Nav";
import Bar from "../../components/Bar/Bar";
import { StyledProjectInfoContainer } from "./ProjectStyles";
import ProjectList from "../../Data/Data";

interface IProjectProps {
  match: { params: { id: string } };
}

interface IProjectState {
  pageTitle: string;
}

class Project extends React.Component<IProjectProps, IProjectState> {
  constructor(props: IProjectProps) {
    super(props);

    const { id } = this.props.match.params;

    this.state = {
      pageTitle: id
    };
  }

  public render() {
    return (
      <React.Fragment>
        <Nav />
        <Bar>
          <h5>{this.state.pageTitle}</h5>
          <a href="#" target="_blank" rel="nofollow">
            View ->
          </a>
        </Bar>
        <StyledProjectInfoContainer>content heer</StyledProjectInfoContainer>
      </React.Fragment>
    );
  }
}

export default Project;
