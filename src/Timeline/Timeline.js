import React from 'react';
import vis from 'vis';
import 'vis/dist/vis.css';
import axios from 'axios';

export default class TimelineView extends React.Component {

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
              const dataSet = new vis.DataSet(data);
              const options = {};
              const timeline = new vis.Timeline(this.container, dataSet, groups, options);
            });
  }

  render () {
    return (
      <div
        ref={el => this.container = el}
        style={{minHeight: '100vh'}}>
      </div>
    )
  }
}
