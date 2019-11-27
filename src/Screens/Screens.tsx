import * as React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";

import styled from "../theme/styled-components";
// import Loading from "../components/Holder/Holder";

const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
`;

// Home
const Home = Loadable({
  loader: () => import("./Home/Home"),
  loading: () => <div>Loading...</div>
});

// Components themselves will handle who should be able to visit.
const Screens = (
  <StyledDiv>
    <Route exact path="/" component={Home} />
  </StyledDiv>
);

export default Screens;
