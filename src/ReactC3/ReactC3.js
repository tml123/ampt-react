import React from 'react';
import c3 from 'c3';

export default class ReactC3 extends React.Component {

  componentDidMount() {
    const {data, returnChart} = this.props;

    data.bindto = this.container;
    this.chart = c3.generate(data);

    if (returnChart) {
      returnChart(this.chart);
    }
  }

  componentWillUnmount() {
    const {unflow} = this.props;
    if (unflow) {
      unflow()
    }
    this.chart.destroy();
  }

  render() {
    return (
      <div ref={el => this.container = el}></div>
    );
  }
}
