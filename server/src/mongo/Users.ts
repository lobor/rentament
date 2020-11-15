import * as mongoose from 'mongoose';

export interface UserMongo {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const UserSchema = new mongoose.Schema<UserMongo>({
  firstName: String, // String is shorthand for {type: String}
  lastName: String,
  email: { type: String, unique: true, index: true },
  password: String,
  token: { type: String, unique: true, index: true },
});

// eslint-disable-next-line import/no-mutable-exports
let Users: mongoose.Model<any>;
try {
  Users = mongoose.model('Users');
} catch (error) {
  Users = mongoose.model('Users', UserSchema);
}

export { UserSchema, Users };
