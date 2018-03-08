import casual from 'casual';
import { Activity } from './models';

const resolvers = {
  Query: {
    allActivities() {
      console.log(Activity.find());
      return Activity.find({})
        .then((result) => {
          return result;
        });
    }
  }
}

export default resolvers;
