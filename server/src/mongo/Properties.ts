import * as mongoose from 'mongoose';

export interface PropertyMongo extends mongoose.Document {
  _id: string;
  ownerId: string;
  type: string;
  identifiant: string;
  address: string;
  address2: string;
  batiment: string;
  escalier: string;
  floor: number;
  number: string;
  city: string;
  zipCode: string;
  superficie: string;
  nbRoom: number;
  nbBedRoom: number;
  nbBathroom: number;
  description: string;
  note: string;
}
const PropertySchema = new mongoose.Schema<PropertyMongo>({
  firstName: String, // String is shorthand for {type: String}
  lastName: String,
  email: { type: String, unique: true, index: true },
  password: String,
  token: { type: String, unique: true, index: true },
});

// eslint-disable-next-line import/no-mutable-exports
let Properties: mongoose.Model<PropertyMongo>;
try {
  Properties = mongoose.model('Properties');
} catch (error) {
  Properties = mongoose.model('Properties', PropertySchema);
}

export { PropertySchema, Properties };
