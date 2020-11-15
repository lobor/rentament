import { objectType, extendType } from '@nexus/schema';

import { Properties } from '../mongo';

const Property = objectType({
  definition(t) {
    t.id('id', {
      nullable: false,
      resolve({ _id }) {
        return _id;
      },
    });
    t.string('ownerId', { description: 'Onwer id of property', nullable: false });
    t.string('type', { description: 'type of property', nullable: false });
    t.string('identifiant', { description: 'identifiant of property', nullable: false });
    t.string('address', { description: 'address of property', nullable: false });
    t.string('address2', { description: 'address 2 of property' });
    t.string('batiment', { description: 'batiment of property' });
    t.string('escalier', { description: 'escalier of property' });
    t.int('floor', { description: 'Floor of property' });
    t.string('number', { description: 'Number address of property' });
    t.string('city', { description: 'City of property', nullable: false });
    t.string('zipCode', { description: 'Zip code of property', nullable: false });
    t.string('superficie', { description: 'Superficie of property' });
    t.int('nbRoom', { description: 'Nb room of property' });
    t.int('nbBedRoom', { description: 'Nb bed room of property' });
    t.int('nbBathroom', { description: 'Nb bathroom of property' });
    t.string('description', { description: 'Description of property' });
    t.string('note', { description: 'Not about property' });
  },
  name: 'Property',
});

const QueryProperty = extendType({
  definition(t) {
    t.field('properties', {
      async resolve() {
        return Properties.find();
      },
      list: true,
      type: Property,
    });
  },
  type: 'Query',
});
const MutationProperty = extendType({
  definition() {},
  type: 'Mutation',
});

export { QueryProperty, Property, MutationProperty };
