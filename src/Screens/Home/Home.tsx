import * as React from "react";
import { Nav } from "../../components/Nav/Nav";

export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <React.Fragment>
        <Nav></Nav>
        <div>Hello world!!</div>
      </React.Fragment>
    );
  }
}
