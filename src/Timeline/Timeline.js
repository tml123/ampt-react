import React from 'react';
import vis from 'vis';
import 'vis/dist/vis.css';

export default class TimelineView extends React.Component {

  componentDidMount() {
    console.log(this.container);
    const {dataSet, groups} = this.props;
    const dSet = new vis.DataSet(dataSet);
    const options = {verticalScroll:true, zoomKey:'ctrlKey'};
    const timeline = new vis.Timeline(this.container, dSet, groups, options);
  }

  render () {
    return (
        <div
        ref={el => this.container = el}>
      </div>
    )
  }
}
