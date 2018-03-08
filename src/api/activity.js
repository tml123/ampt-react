import gql from 'graphql-tag';

const activitiesQuery = gql`
  query ActivityListQuery {
      allActivities {
      task_id
      task_name
      sub_task_id
      target_description
      asset
      antenna
      receiver
      rx_bw
      dynamic_range
      freq_low
      freq_high
      lat
      lon
      target
      disc
      processor
    }
  }
  `;

export default activitiesQuery;
