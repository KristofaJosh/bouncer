import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import theme from "../../components/theme";
const Home = lazy(() => import("../../containers/Home"));
const Authentication = lazy(() => import("../../containers/Auth"));
const Cart = lazy(() => import("../../containers/Cart"));

const App = () => (
  <Suspense
    fallback={
      <div className="d-flex justify-content-center align-items-center h-100">
        <ClipLoader size={80} color={theme.colors.dangerDark} />
      </div>
    }
  >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route path="/" component={Authentication} />
    </Switch>
  </Suspense>
);

export default App;
