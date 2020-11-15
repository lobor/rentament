import { objectType, extendType } from '@nexus/schema';

import { Buildings } from '../mongo';

const Building = objectType({
  definition(t) {
    t.id('id', {
      nullable: false,
      resolve({ _id }) {
        return _id;
      },
    });
    t.string('identifiant', { description: 'Identifiant of building', nullable: false });
    t.string('address', { description: 'Address of building' });
    t.string('city', { description: 'City of building' });
    t.string('zipCode', { description: 'Zip code of building' });
    t.int('superficie', { description: 'Superficie of building' });
    t.string('description', { description: 'Description of building' });
    t.string('note', { description: 'Note about building' });
    t.float('taxFonciere', { description: 'Tax of building' });
    t.float('boughtAt', { description: 'Bought date of building' });
    t.int('buyingPrice', { description: 'Price of building' });
    t.float('acquisitionFee', { description: 'Total price of building' });
  },
  name: 'Building',
});

const QueryBuilding = extendType({
  definition(t) {
    t.field('buildings', {
      async resolve() {
        return Buildings.find();
      },
      list: true,
      type: Building,
    });
  },
  type: 'Query',
});
const MutationBuilding = extendType({
  definition() {},
  type: 'Mutation',
});

export { QueryBuilding, Building, MutationBuilding };
