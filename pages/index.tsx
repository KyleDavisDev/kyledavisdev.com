import * as React from "react";
import Nav from "../src/components/Nav/Nav";
import Header from "../src/components/Header/Header";
import AboutMe from "../src/components/AboutMe/AboutMe";
// import ContactMe from "../src/components/ContactMe/ContactMe";
import Projects from "../src/components/Projects/Projects";

export interface IIndexProps {}

export default class Index extends React.Component<IIndexProps> {
  public render() {
    return (
      <>
        {/*<p>yo!</p>*/}
        <Nav />
        <Header />
        <AboutMe />
        {/*/!* <ContactMe /> *!/*/}
        <Projects />
      </>
    );
  }
}
