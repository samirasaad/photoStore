import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./History";
import Loader from "../components/Loader/Loader";
import * as LazyComponent from '../utils/LazyLoaded';

const Routes = (
  <Suspense fallback={<Loader/>}>
    <Router history={history}>
      <Switch>
        <LazyComponent.Home path="/photoStore" exact />
        <LazyComponent.ImagesList path="/photoStore/imagesList/:searcTerm" exact />
        <LazyComponent.PhotgrapherProfile path="/photoStore/profile/:UserName" exact />
        <LazyComponent.NotFound path="*" exact />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;