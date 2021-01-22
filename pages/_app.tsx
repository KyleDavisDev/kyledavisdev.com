import * as React from "react";

import Page from "../src/components/Page/Page";

const App = ({ Component, pageProps }) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default App;
