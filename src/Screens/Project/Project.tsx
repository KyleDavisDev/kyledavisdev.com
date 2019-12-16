import * as React from "react";
import { Nav } from "../../components/Nav/Nav";
import Bar from "../../components/Bar/Bar";
import { StyledProjectInfoContainer } from "./ProjectStyles";
import ProjectList from "../../Data/Data";
import { IProjectItem } from "../../Data/Data";

interface IProjectProps {
  match: { params: { id: string } };
  history: { push: (location: string) => void };
}

interface IProjectState {
  project?: IProjectItem;
}

class Project extends React.Component<IProjectProps, IProjectState> {
  public static getDerivedStateFromProps(
    props: IProjectProps,
    state: IProjectState
  ) {
    // Make sure we actually have a project
    if (!state.project) {
      props.history.push("/");
      return {};
    }

    return state;
  }

  constructor(props: IProjectProps) {
    super(props);

    // grab url id
    const { id } = props.match.params;
    // Find project of interest
    const project = ProjectList.find(proj => proj.url === id);

    this.state = {
      project
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
