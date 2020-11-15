import * as mongoose from 'mongoose';

export interface BuildingMongo extends mongoose.Document {
  _id: string;
  identifiant: string;
  address?: string;
  city?: string;
  zipCode?: string;
  superficie?: number;
  description?: string;
  note?: string;
  taxFonciere?: number;
  boughtAt?: number;
  buyingPrice?: number;
  acquisitionFee?: number;
}
const BuildingSchema = new mongoose.Schema<BuildingMongo>({
  identifiant: { type: String, required: true },
  address: String,
  city: String,
  zipCode: String,
  superficie: Number,
  description: String,
  note: String,
  taxFonciere: Number,
  boughtAt: Number,
  buyingPrice: Number,
  acquisitionFee: Number,
});

// eslint-disable-next-line import/no-mutable-exports
let Buildings: mongoose.Model<BuildingMongo>;
try {
  Buildings = mongoose.model('Buildings');
} catch (error) {
  Buildings = mongoose.model('Buildings', BuildingSchema);
}

export { BuildingSchema, Buildings };
