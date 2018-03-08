import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect("mongodb://localhost/satellite_ampt_dev", {useMongoClient: true});

export default mongo;
