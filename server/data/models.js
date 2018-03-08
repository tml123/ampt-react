import Mongoose from 'mongoose';
import db from './connectors';

const ActivitySchema = new Mongoose.Schema({
  task_id: String,
  task_name: String,
  sub_task_id: String,
  target_description: String,
  pri: Number,
  start_timestamp: Number,
  stop_timestamp: Number,
  asset: String,
  antenna: String,
  receiver: Number,
  rx_bw: Number,
  dynamic_range: Number,
  freq_low: Number,
  freq_high: Number,
  lat: Number,
  lon: Number,
  target: String,
  disc: String,
  processor: String
},
{collection: 'as_ex_data'});

const Activity = Mongoose.model('as_ex_data', ActivitySchema);

export { Activity };
