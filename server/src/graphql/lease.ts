import { objectType, extendType } from '@nexus/schema';

import { Leases } from '../mongo';

const Lease = objectType({
  definition(t) {
    t.id('id', {
      nullable: false,
      resolve({ _id }) {
        return _id;
      },
    });
    t.id('propertyId', { description: 'Property id of lease', nullable: false });
    t.string('type', { description: 'Type of lease', nullable: false });
    t.float('startedAt', { description: 'Start of lease', nullable: false });
    t.float('endedAt', { description: 'End of lease' });
    t.boolean('autoRenew', { description: 'Auto renew lease' });
    t.string('billingPeriod', { description: 'Billing period', nullable: false });
    t.int('dayToBePaid', { description: 'Day to be paid' });
    t.int('rentHc', { description: 'Rent HC of lease', nullable: false });
    t.int('maintenance', { description: 'Maintenance price of lease' });
    t.int('monthlyAmount', { description: 'Amount per month', nullable: false });
    t.boolean('firstBill', { description: 'First bill' });
    t.float('firstBillEndDate', { description: 'End date first bill' });
    t.int('firstBillAmount', { description: 'First bill amount' });
    t.int('firstBillCharges', { description: 'First bill charges' });
    t.int('securityDeposit', { description: 'Security deposit', nullable: false });
    t.int('paymentCafAmount', { description: 'Payment CAF amount', nullable: false });
    t.id('tenantId', { description: 'Tenant id of lease', nullable: false });
  },
  name: 'Lease',
});

const QueryLease = extendType({
  definition(t) {
    t.field('leases', {
      async resolve() {
        return Leases.find();
      },
      list: true,
      type: Lease,
    });
  },
  type: 'Query',
});
const MutationLease = extendType({
  definition(t) {},
  type: 'Mutation',
});

export { QueryLease, Lease, MutationLease };
