import casual from 'casual';
import { Activity } from './models';

const resolvers = {
  Query: {
    allActivities() {
      return Activity.find({})
        .then((result) => {
          return result;
        });
    },
    activity(obj, args) {
      console.log(args);
      return Activity.find(args)
        .then((result) => {
          return result;
        })
    }
  }
}

export default resolvers;
