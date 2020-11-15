import * as mongoose from 'mongoose';

export interface TenantMongo extends mongoose.Document {
  _id: string;
  type: string;
  civility: string;
  firstName: string;
  lastName: string;
  dateBirthday: number;
  cityBirth: string;
  idtype: string;
  idNumber: string;
  idExpired: string;
  email: string;
  sendInvite: boolean;
  phone: string;
  profession: string;
  revenus: number;
  situationProf: string;
  employer: string;
  employerAddress: string;
  employerPhone: string;
  comments: string;
}
const TenantSchema = new mongoose.Schema<TenantMongo>({
  type: String,
  civility: String,
  firstName: String,
  lastName: String,
  dateBirthday: Number,
  cityBirth: String,
  idtype: String,
  idNumber: String,
  idExpired: String,
  email: String,
  sendInvite: Boolean,
  phone: String,
  profession: String,
  revenus: Number,
  situationProf: String,
  employer: String,
  employerAddress: String,
  employerPhone: String,
  comments: String,
});

// eslint-disable-next-line import/no-mutable-exports
let Tenants: mongoose.Model<TenantMongo>;
try {
  Tenants = mongoose.model('Tenants');
} catch (error) {
  Tenants = mongoose.model('Tenants', TenantSchema);
}

export { TenantSchema, Tenants };
