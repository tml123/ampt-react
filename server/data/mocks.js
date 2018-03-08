import casual from 'casual';

const mocks = {
  String: () => 'It works!',
  Query: () => ({

  }),
  Activity: () => ({
    tasK_id: casual.zip,
    start_timestamp: casual.unix_time,
    stop_timestamp: casual.unix_time,
    target_description: casual.description
  })
};

export default mocks;
