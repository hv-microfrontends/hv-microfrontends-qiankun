import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import loadable from "@loadable/component";

const Incident = loadable(() => import("pages/Incident"));
const IncidentType = loadable(() => import("pages/IncidentType"));
const Sop = loadable(() => import("pages/Sop"));
const Workflow = loadable(() => import("pages/Workflow"));
const NotFound = loadable(() => import("pages/NotFound"));

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/configuration/incident" />
    </Route>

    <Route path="/configuration" exact>
      <Redirect to="/configuration/incident" />
    </Route>
    <Route path="/configuration/incident" component={Incident} />

    <Route path="/management" exact>
      <Redirect to="/management/incident-type" />
    </Route>
    <Route path="/management/incident-type" component={IncidentType} />
    <Route path="/management/sop" component={Sop} />
    <Route path="/management/workflow" component={Workflow} />

    <Route component={NotFound} />
  </Switch>
);

export default Routes;
