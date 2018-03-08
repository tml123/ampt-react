import React from 'react';
import ReactCesium from '../ReactCesium/ReactCesium';
import { Accordion, Checkbox, Grid, Menu } from 'semantic-ui-react';
import Cesium from 'cesium/Cesium';
import axios from 'axios';

import AccordionTitleCheckbox from '../common/AccordionTitleCheckbox';
import IconWithIndex from '../common/IconWithIndex';
import satellites from '../api/mockSatellites';

import './WorldView.css';

export default class WorldView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cesium: null,
      activePanes: []
    }
    this.returnCesium = this.returnCesium.bind(this);
    this.getOrbitData = this.getOrbitData.bind(this);
    this.toggleAccordionContent = this.toggleAccordionContent.bind(this);
  }

  toggleAccordionContent(index) {
    const idx = this.state.activePanes.indexOf(index);
    const activePanes = this.state.activePanes;
    if (idx > -1) {
      activePanes.splice(idx, 1)
    }
    else {
      activePanes.push(index);
    }
    this.setState({activePanes});
  }

  getOrbitData(e, result) {
    const {name} = result;

    axios.get('http://localhost:8000/api/1.0/orbit/ground_track/' + name + '/1496275200000/1496361599000')
      .then((response) => {
        this.state.cesium.dataSources.add(Cesium.CzmlDataSource.load(response.data));
      });
  }

  returnCesium(c) {
    this.setState({cesium: c})
  }

  render() {

    return (
      <Grid className='mgn-0' columns={16}>
        <Grid.Column className='mgn-0 pd-0' stretched={true} width={3}>
          <Accordion as={Menu} className='bdr-rd-0' width='thin' fluid vertical>
            {
              satellites.map((s, idx) => {
                return (
                  <Menu.Item>
                    <AccordionTitleCheckbox index={idx}>
                      <Checkbox label={s.name} name={s.name} onClick={this.getOrbitData}/>
                      <IconWithIndex index={idx} name='dropdown' onClick={this.toggleAccordionContent}/>
                    </AccordionTitleCheckbox>
                    <Accordion.Content active={this.state.activePanes.indexOf(idx) > -1}>
                      <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
                        {s.feeds.map((f) => <Checkbox label={f}/>)}
                      </div>
                    </Accordion.Content>
                  </Menu.Item>
                )
              })
            }
          </Accordion>
        </Grid.Column>
        <Grid.Column className='mgn-0 pd-0' width={13}>
          <ReactCesium returnCesium={this.returnCesium}/>
        </Grid.Column>
      </Grid>
    )
  }
}
