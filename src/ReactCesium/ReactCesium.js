import React from 'react';
import Cesium from 'cesium/Cesium';
require('cesium/Widgets/widgets.css');

export default class ReactCesium extends React.Component {

  componentDidMount() {
    const {returnCesium} = this.props;
    this.viewer = new Cesium.Viewer(this.container);
    returnCesium(this.viewer);
  }

  render() {
    return (
      <div
        ref={el => this.container = el}
        style={{minHeight: '100vh'}}>
      </div>
    )
  }
}
