import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../../containers/Home"));
const Authentication = lazy(() => import("../../containers/Auth"));
const UpdatePassword = lazy(() => import("../../containers/ForgotPassword"));

const App = () => (
  <Suspense fallback={"loading"}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/forgot-password" component={UpdatePassword} />
      <Route path="/" component={Authentication} />
    </Switch>
  </Suspense>
);

export default App;
