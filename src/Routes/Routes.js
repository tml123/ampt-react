import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import TelemetryMonitor from '../TelemetryMonitor/TelemetryMonitor';
import TelemetryDashboard from '../TelemetryMonitor/TelemetryDashboard';
import WorldView from '../WorldView/WorldView';
import 'c3/c3.css';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/telemetry-monitor" component={TelemetryMonitor} />
    <Route exact path="/telemetry-monitor/:satellite" component={TelemetryDashboard} />
    <Route exact path="/world-view" component={WorldView} />
  </Switch>
);

export default Routes;
