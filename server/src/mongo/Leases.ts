import * as mongoose from 'mongoose';

export interface LeaseMongo extends mongoose.Document {
  _id: String;
  propertyId: string;
  type: string;
  startedAt: number;
  endedAt?: number;
  autoRenew?: boolean;
  billingPeriod: string;
  dayToBePaid?: number;
  rentHc: number;
  maintenance?: number;
  monthlyAmount: number;
  firstBill?: boolean;
  firstBillEndDate?: number;
  firstBillAmount?: number;
  firstBillCharges?: number;
  securityDeposit: number;
  paymentCafAmount: number;
  tenantId: string;
}
const LeaseSchema = new mongoose.Schema<LeaseMongo>({
  propertyId: { type: String, index: true, required: true },
  type: { type: String, required: true },
  startedAt: { type: Number, required: true },
  endedAt: Number,
  autoRenew: Boolean,
  billingPeriod: { type: String, required: true },
  dayToBePaid: Number,
  rentHc: { type: Number, required: true },
  maintenance: Number,
  monthlyAmount: { type: Number, required: true },
  firstBill: Boolean,
  firstBillEndDate: Number,
  firstBillAmount: Number,
  firstBillCharges: Number,
  securityDeposit: { type: Number, required: true },
  paymentCafAmount: { type: Number, required: true },
  tenantId: { type: String, index: true, required: true },
});

// eslint-disable-next-line import/no-mutable-exports
let Leases: mongoose.Model<LeaseMongo>;
try {
  Leases = mongoose.model('Leases');
} catch (error) {
  Leases = mongoose.model('Leases', LeaseSchema);
}

export { LeaseSchema, Leases };
