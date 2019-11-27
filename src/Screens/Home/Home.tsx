import * as React from "react";
import { Nav } from "../../components/Nav/Nav";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Projects from "./components/Projects/Projects";

export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <AboutMe />
        <ContactMe />
        <Projects />
        <div>Hello world!!</div>
      </React.Fragment>
    );
  }
}
