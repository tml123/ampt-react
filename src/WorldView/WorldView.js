import React from 'react';
import ReactCesium from '../ReactCesium/ReactCesium';
import { Accordion, Container, Checkbox, Grid, Icon, Menu } from 'semantic-ui-react';
import Cesium from 'cesium/Cesium';
import axios from 'axios';

import AccordionTitleCheckbox from '../common/AccordionTitleCheckbox';
import IconWithIndex from '../common/IconWithIndex';

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
              <Menu.Item>
                <AccordionTitleCheckbox index={0}>
                    <Checkbox label='Sat1' name='Sat1' onClick={this.getOrbitData}/>
                    <IconWithIndex index={0} name='dropdown' onClick={this.toggleAccordionContent}/>
                </AccordionTitleCheckbox>
                <Accordion.Content active={this.state.activePanes.indexOf(0) > -1}>
                  <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
                    <Checkbox label='Ant1' />
                    <Checkbox label='Ant2' />
                    <Checkbox label='Ant3' />
                  </div>
                </Accordion.Content>
              </Menu.Item>
              <Menu.Item>
                <AccordionTitleCheckbox index={1}>
                    <Checkbox label='Sat2' name='Sat2' onClick={this.getOrbitData}/>
                    <IconWithIndex index={1} name='dropdown' onClick={this.toggleAccordionContent}/>
                </AccordionTitleCheckbox>
                <Accordion.Content active={this.state.activePanes.indexOf(1) > -1}>
                  <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
                    <Checkbox label='Ant1' />
                    <Checkbox label='Ant2' />
                    <Checkbox label='Ant3' />
                  </div>
                </Accordion.Content>
              </Menu.Item>
              <Menu.Item>
                <AccordionTitleCheckbox index={2}>
                    <Checkbox label='Sat4' name='Sat4' onClick={this.getOrbitData}/>
                    <IconWithIndex index={2} name='dropdown' onClick={this.toggleAccordionContent}/>
                </AccordionTitleCheckbox>
                <Accordion.Content active={this.state.activePanes.indexOf(2) > -1}>
                  <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
                    <Checkbox label='Ant1' />
                    <Checkbox label='Ant2' />
                    <Checkbox label='Ant3' />
                  </div>
                </Accordion.Content>
              </Menu.Item>
              <Menu.Item>
                <AccordionTitleCheckbox index={3}>
                    <Checkbox label='Sat6' name='Sat6' onClick={this.getOrbitData}/>
                    <IconWithIndex index={3} name='dropdown' onClick={this.toggleAccordionContent}/>
                </AccordionTitleCheckbox>
                <Accordion.Content active={this.state.activePanes.indexOf(3) > -1}>
                  <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
                    <Checkbox label='Ant1' />
                    <Checkbox label='Ant2' />
                    <Checkbox label='Ant3' />
                  </div>
                </Accordion.Content>
              </Menu.Item>
              <Menu.Item>
                <AccordionTitleCheckbox index={4}>
                    <Checkbox label='Sat8' name='Sat8' onClick={this.getOrbitData}/>
                    <IconWithIndex index={4} name='dropdown' onClick={this.toggleAccordionContent}/>
                </AccordionTitleCheckbox>
                <Accordion.Content active={this.state.activePanes.indexOf(4) > -1}>
                  <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
                    <Checkbox label='Ant1' />
                    <Checkbox label='Ant2' />
                    <Checkbox label='Ant3' />
                  </div>
                </Accordion.Content>
              </Menu.Item>
              <Menu.Item>
                <AccordionTitleCheckbox index={5}>
                    <Checkbox label='Sat9' name='Sat9' onClick={this.getOrbitData}/>
                    <IconWithIndex index={5} name='dropdown' onClick={this.toggleAccordionContent}/>
                </AccordionTitleCheckbox>
                <Accordion.Content active={this.state.activePanes.indexOf(5) > -1}>
                  <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
                    <Checkbox label='Ant1' />
                    <Checkbox label='Ant2' />
                    <Checkbox label='Ant3' />
                  </div>
                </Accordion.Content>
              </Menu.Item>
              <Menu.Item>
                <AccordionTitleCheckbox index={6}>
                    <Checkbox label='Sat10' name='Sat10' onClick={this.getOrbitData}/>
                    <IconWithIndex index={6} name='dropdown' onClick={this.toggleAccordionContent}/>
                </AccordionTitleCheckbox>
                <Accordion.Content active={this.state.activePanes.indexOf(6) > -1}>
                  <div style={{'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'space-around'}}>
                    <Checkbox label='Ant1' />
                    <Checkbox label='Ant2' />
                    <Checkbox label='Ant3' />
                  </div>
                </Accordion.Content>
              </Menu.Item>
            </Accordion>
        </Grid.Column>
        <Grid.Column className='mgn-0 pd-0' width={13}>
          <ReactCesium returnCesium={this.returnCesium}/>
        </Grid.Column>
      </Grid>
    )
  }
}
