import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import ReactC3 from '../ReactC3/ReactC3';
import {
    YPR,
    SOLAR,
    VOLTAGE,
    CMG,
    randomizeYPR,
    randomizeCMG,
    randomizeSolarHealth,
    randomizeBatteryVoltage
  } from '../api/mockTelemetry';

export default class TelemetryDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.returnYPR = this.returnYPR.bind(this);
    this.returnSolar = this.returnSolar.bind(this);
    this.returnCMG = this.returnCMG.bind(this);
    this.returnVoltage = this.returnVoltage.bind(this);
    this.unflowYPR = this.unflowYPR.bind(this);
    this.unflowSolar = this.unflowSolar.bind(this);
    this.unflowCMG = this.unflowCMG.bind(this);
    this.unflowVoltage = this.unflowVoltage.bind(this);
  }

  returnYPR(c) {
    this.yprChart = c;
    this.yprFlow = setInterval(() => randomizeYPR(this.yprChart), 5000);
  }

  returnVoltage(c) {
    this.voltageChart = c;
    this.voltageFlow = setInterval(() => randomizeBatteryVoltage(this.voltageChart), 5000);
  }

  returnSolar(c) {
    this.solarChart = c;
    this.solarFlow = setInterval(() => randomizeSolarHealth(this.solarChart), 5000);
  }

  returnCMG(c) {
    this.cmgChart = c;
    this.cmgFlow = setInterval(() => randomizeCMG(this.cmgChart), 5000);
  }

  unflowYPR() {
    clearInterval(this.yprFlow)
  }

  unflowCMG() {
    clearInterval(this.cmgFlow)
  }

  unflowVoltage() {
    clearInterval(this.voltageFlow)
  }

  unflowSolar() {
    clearInterval(this.solarFlow)
  }

  render () {
    return (
      <Grid columns='equal' stackable>
        <Grid.Column>
          <Segment>
            <ReactC3 data={YPR} returnChart={this.returnYPR} unflow={this.unflowYPR}/>
          </Segment>
          <Segment>
            <ReactC3 data={SOLAR} returnChart={this.returnSolar} unflow={this.unflowSolar}/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <ReactC3 data={VOLTAGE} returnChart={this.returnVoltage} unflow={this.unflowVoltage}/>
          </Segment>
          <Segment>
            <ReactC3 data={CMG} returnChart={this.returnCMG} unflow={this.unflowCMG}/>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
