import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import history from "./History";
import Loader from "../components/Loader/Loader";

// ========= Components =========
import * as LazyComponent from '../utils/LazyLoaded';

const Routes = (
  <Suspense fallback={<Loader/>}>
    <Router history={history}>
      <Switch>
        <LazyComponent.Home path="/" exact />
        <LazyComponent.Home path="/PhotoStore/:searcTerm" exact />
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;