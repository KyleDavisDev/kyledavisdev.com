import * as React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import Header from "../src/components/Header/Header";
import AboutMe from "../src/components/AboutMe/AboutMe";
import Projects from "../src/components/Projects/Projects";

export interface IIndexProps {}

export default class Index extends React.Component<IIndexProps> {
  public render() {
    return (
      <>
        <NavBar />
        <Header />
        <AboutMe />
        <Projects />
      </>
    );
  }
}
