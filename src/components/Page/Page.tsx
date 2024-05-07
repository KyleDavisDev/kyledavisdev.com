import * as React from "react";

import { ThemeProvider, theme, createGlobalStyle } from "../../theme/styled-components";
import Meta from "../Meta/Meta";

interface IPageProps {
  children?: any;
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: DroidSansBold;
        src: url('/fonts/DroidSans-Bold.ttf') format('truetype');
    }

    @font-face {
        font-family: DroidSans;
        src: url('/fonts/DroidSans.ttf') format('truetype');
    }

    @font-face {
        font-family: Montserrat;
        src: url('/fonts/Montserrat-SemiBold.ttf') format('truetype');
    }

    html {
        background-color: #fbfbfb;
        font-family: DroidSans;
    }

    html,
    body {
        min-height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0px;
    }


    a {
        color: ${x => x.theme.anchorColor};
    }

    a.active, a:hover, a:focus {
        color: ${x => x.theme.anchorHoverColor};;
        background-color: rgba(0, 160, 227, .05);
    }

    body {
        background-color: #ebebeb;
        padding: 0;
        margin: 0;
    }

    strong, .bold {
        font-weight: 700;
        font-family: DroidSansBold, Helvetica, Arial, sans-serif;
    }
`;

const Page: React.FunctionComponent<IPageProps> = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta />
      {props.children}
    </ThemeProvider>
  );
};

export default Page;
