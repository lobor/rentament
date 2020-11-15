import { objectType, extendType } from '@nexus/schema';

import { Tenants } from '../mongo';

const Tenant = objectType({
  definition(t) {
    t.id('id', {
      nullable: false,
      resolve({ _id }) {
        return _id;
      },
    });
    t.string('type', { description: 'Type tenant (only particulier)', nullable: false });
    t.string('civility', { description: 'Civility of tenant', nullable: false });
    t.string('firstName', { description: 'First name of tenant', nullable: false });
    t.string('lastName', { description: 'Last name of tenant', nullable: false });
    t.float('dateBirthday', { description: 'birthday date of tenant' });
    t.string('cityBirth', { description: 'city birthday of tenant' });
    t.string('idtype', { description: 'Type of identity' });
    t.string('idNumber', { description: 'Number of identity' });
    t.string('idExpired', { description: 'Date of expired identity' });
    t.string('email', { description: 'email of tenant' });
    t.boolean('sendInvite', { description: 'Send invite' });
    t.string('phone', { description: 'Phone of tenant' });
    t.string('profession', { description: 'prefession of tenant' });
    t.int('revenus', { description: 'revenus of tenant' });
    t.string('situationProf', { description: 'Situation professional of tenant' });
    t.string('employer', { description: 'Employer of tenant' });
    t.string('employerAddress', { description: 'Employer address of tenant' });
    t.string('employerPhone', { description: 'Employer phone of tenant' });
    t.string('comments', { description: 'Comment about tenant' });
  },
  name: 'Tenant',
});

const QueryTenant = extendType({
  definition(t) {
    t.field('tenants', {
      async resolve() {
        return Tenants.find();
      },
      list: true,
      type: Tenant,
    });
  },
  type: 'Query',
});
const MutationTenant = extendType({
  definition() {},
  type: 'Mutation',
});

export { QueryTenant, Tenant, MutationTenant };
