import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  allActivities: [Activity],
  activity(task_id: Int, pri: Int, asset: String): [Activity]
}

type Activity {
  task_id: String,
  task_name: String,
  sub_task_id: String,
  target_description: String,
  pri: Float,
  start_timestamp: Int,
  stop_timestamp: Int,
  asset: String,
  antenna: String,
  receiver: Int,
  rx_bw: Int,
  dynamic_range: Int,
  freq_low: Int,
  freq_high: Int,
  lat: Int,
  lon: Int,
  target: String,
  disc: String,
  processor: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

//addMockFunctionsToSchema({ schema, mocks });

export default schema;
