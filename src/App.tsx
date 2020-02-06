import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Screens from "./Screens/Screens"; // Routing
import {
  ThemeProvider,
  theme,
  createGlobalStyle
} from "./theme/styled-components"; // theme
import DroidSansBold from "./theme/fonts/DroidSans-Bold.ttf";
import DroidSans from "./theme/fonts/DroidSans.ttf";
import Montserrat from "./theme/fonts/Montserrat-Bold.ttf";

// tslint:disable-next-line:no-unused-expression
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DroidSansBold;
    src: url('${DroidSansBold}') format('truetype');
  }
  @font-face {
    font-family: DroidSans;
    src: url('${DroidSans}') format('truetype');
  }

  @font-face {
    font-family: Montserrat;
    src: url('${Montserrat}') format('truetype');
  }

  html {
    background-color: #fbfbfb;
    font-family: DroidSans;
  }

  html,
  body {
      min-height: 100vh;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0px;
    // font-family: DroidSans,Helvetica,Arial,sans-serif;
  }


  a{
    color: #333;
  }
  a.active, a:hover, a:focus {
    color: #00a0e3;
    background-color: rgba(0,160,227,.05);
  }

  body {
    background-color: #ebebeb
  }

  strong, .bold {
    font-weight: 700;
    font-family: DroidSansBold,Helvetica,Arial,sans-serif;
  }
`;

export class App extends React.Component<{}, {}> {
  public componentDidMount() {
    document.title = "Kyle Davis";
  }

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Route children={Screens} />
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
