import { objectType } from '@nexus/schema';

const returnSuccess = objectType({
  definition(t) {
    t.string('status', { description: 'OK if success' });
  },
  name: 'ReturnSuccess',
});

export default returnSuccess;
