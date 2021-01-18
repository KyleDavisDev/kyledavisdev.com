import * as React from "react";

import {
  ThemeProvider,
  theme,
  createGlobalStyle,
} from "../../theme/styled-components";
import Meta from "../Meta/Meta";

const DroidSansBold = "/static/fonts/DroidSans-Bold.ttf";
const DroidSans = "/static/fonts/DroidSans.ttf";
const Montserrat = "/static/fonts/Montserrat-Bold.ttf";

interface IPageProps {
  children?: any;
}

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
    background-color: #ebebeb;
    padding: 0;
    margin: 0;
  }

  strong, .bold {
    font-weight: 700;
    font-family: DroidSansBold,Helvetica,Arial,sans-serif;
  }
`;

const Page: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta />
      {props.children}
    </ThemeProvider>
  );
};

export default Page;
