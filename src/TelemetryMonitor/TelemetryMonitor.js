import React from 'react';
import TelemetryDashboard from './TelemetryDashboard';
import { Container, Menu, Input } from 'semantic-ui-react';
import { NavLink, Route } from 'react-router-dom';

export default class TelemetryMonitor extends React.Component {

  render () {
    return (
    <div>
      <Menu pointing secondary>
        <Menu.Item as={NavLink} to="/telemetry-monitor/Sat1" name='sat1'/>
        <Menu.Item as={NavLink} to="/telemetry-monitor/Sat2" name='sat2' />
        <Menu.Item as={NavLink} to="/telemetry-monitor/Sat3" name='sat3'/>
        <Menu.Item as={NavLink} to="/telemetry-monitor/Sat5" name='sat5'/>
        <Menu.Item as={NavLink} to="/telemetry-monitor/Sat9" name='sat9'/>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Route path="/telemetry-monitor/:satellite" component={TelemetryDashboard}/>
    </div>
    );
  }
}
