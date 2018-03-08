import React from 'react';
import { Button, Container, Dropdown, Menu, Segment } from 'semantic-ui-react';
import TimelineView from './Timeline';
import axios from 'axios';

export default class TimelineDashboard extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      dataSet: '',
      groups: '',
      loading: true
    }
  }

  componentDidMount() {
    // TODO: Get rid of this test dataSet
    // separate timeline into separate component
    // create function for AJAX request
    // add event handlers to timeline
   axios.post('http://localhost:8000/api/1.0/as_ex/search/filter',
              {
                'filter': ['asset', 'receiver'],
                'date': [{'start_timestamp': '1496275200000', 'stop_timestamp': '1496361599000'}],
                'asset': ['SAT1', 'SAT2', 'SAT3', 'SAT4'],
              }
            ).then((response) => {
              const groups = [];
              const g = [];
              const data = response.data.map((entry, idx) => {
                if (g.indexOf(entry.asset) === -1) {
                  g.push(entry.asset);
                  groups.push({
                    id: entry.asset,
                    content: entry.asset
                  });
                }
                return {
                  start: new Date(entry.start_timestamp),
                  end: new Date(entry.stop_timestamp),
                  group: entry.asset,
                  id: idx,
                  content: entry.task_id + ' ' + entry.target_description
                }
              })
              this.setState({dataSet: data, groups: groups, loading: false});
            });
  }

  render() {

    const antennaOptions = [
      {key: 'Ant1', value: 'Ant1', text: 'Antenna 1'},
      {key: 'Ant2', value: 'Ant2', text: 'Antenna 2'},
      {key: 'Ant3', value: 'Ant3', text: 'Antenna 3'},
    ]

    const satOptions = [
      {key: 'Sat1', value: 'Sat1', text: 'Sat 1'},
      {key: 'Sat2', value: 'Sat2', text: 'Sat 2'},
      {key: 'Sat3', value: 'Sat3', text: 'Sat 3'},
    ]

    return (
      <Container fluid>
        <Menu className="mgn-0" secondary>

          <Menu.Menu position='left'>
            <Dropdown multiple={true} text='Asset' options={satOptions}/>

            <Dropdown multiple={true} text='Antenna' options={antennaOptions}/>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button primary>Apply Filters</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Menu className="mgn-0">
          <Menu.Item>
            <Button>New Activity</Button>
          </Menu.Item>
        </Menu>
        <Segment as={Container} fluid loading={this.state.loading} className="mgn-0 pd-0" secondary>
          {this.state.dataSet && <TimelineView dataSet={this.state.dataSet} groups={this.state.groups} />}
        </Segment>
      </Container>
    )
  }
}
