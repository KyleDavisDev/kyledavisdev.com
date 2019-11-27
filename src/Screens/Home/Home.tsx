import * as React from "react";
import { Nav } from "../../components/Nav/Nav";
import Header from "./components/Header/Header";

export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <div>Hello world!!</div>
      </React.Fragment>
    );
  }
}
