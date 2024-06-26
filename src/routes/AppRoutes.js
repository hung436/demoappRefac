import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ProtectedRoute from "./ProtectedRoute";
import SomeProtectedComponent from "../components/SomeProtectedComponent";
import TestPage from "../pages/TestPage";
import TestUseMemo from "../pages/TestUseMemo";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/test" component={TestPage} />
      <Route path="/test-usememo" component={TestUseMemo} />
      <ProtectedRoute path="/protected" component={SomeProtectedComponent} />
    </Switch>
  );
};

export default AppRoutes;
