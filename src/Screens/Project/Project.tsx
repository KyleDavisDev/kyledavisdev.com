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
    const { project } = this.state;
    // Make sure we actually have a project
    if (!project) {
      // this.props.history.push("/");
      return <p>Could not find project...</p>;
    }
    // grab name, img, tools, description, assign leftovers
    const { name, img, tools, description } = project;
    // destructure leftovers
    const { linkPath, name: externalName } = project.external;
    return (
      <React.Fragment>
        <Nav />
        <Bar>
          <h5>{this.state.pageTitle}</h5>
          <a href="#" target="_blank" rel="nofollow">
            View ->
          </a>
        </Bar>
        <StyledProjectInfoContainer>
          {/* Image */}
          <React.Fragment>
            <div>
              <a
                href={linkPath}
                target="_blank"
                title={externalName}
                className="image-link"
              >
                <img src={img} title={name} />
              </a>
            </div>
            <div>
              <div>
                <h2>Description</h2>
                <p>{description}</p>
              </div>
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
            </div>
          </React.Fragment>
        </StyledProjectInfoContainer>
      </React.Fragment>
    );
  }
}

export default Project;
