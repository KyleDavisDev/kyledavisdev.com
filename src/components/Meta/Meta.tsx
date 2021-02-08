import * as React from "react";
import Head from "next/head";
import Router from "next/router";
import ProgressBar from "rsup-progress";

import { theme } from "../../theme/styled-components";

// let ProgressBar;
let progressBar;

if (typeof window !== "undefined") {
  // tslint:disable-next-line:no-var-requires
  // import ProgressBar from "rsup-progress";
  progressBar = new ProgressBar({
    height: 5,
    color: theme.sitePrimaryColor
  });
}

Router.events.on("routeChangeStart", () => {
  progressBar.start();
});
Router.events.on("routeChangeComplete", () => {
  progressBar.end();
});
Router.events.on("routeChangeError", () => {
  progressBar.end();
});

interface IMetaProps {}

const Meta: React.FC<IMetaProps> = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.png" />
      <title>Kyle Davis</title>
    </Head>
  );
};

export default Meta;
