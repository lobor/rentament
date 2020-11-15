import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Users, UserMongo } from '../mongo';

const saltRounds = 10;
const secret = 'shhhhh';

class UserInterface {
  bcrypt = bcrypt;

  Users = Users;

  jwt = jwt;

  async hashPassword(passwordToHash: string): Promise<string> {
    const salt = await this.bcrypt.genSalt(saltRounds);
    return bcrypt.hash(passwordToHash, salt);
  }

  async createTokenConnection(user: UserMongo): Promise<UserMongo> {
    const token = await this.jwt.sign(
      { exp: Math.floor(Date.now() / 1000) + 60 * 60, data: user },
      secret
    );
    return this.Users.findByIdAndUpdate(user._id, { $set: { token } }, { new: true });
  }

  async logout(userId: string): Promise<UserMongo> {
    return this.Users.findByIdAndUpdate(userId, { $unset: { token: '' } }, { new: true });
  }

  async login({ email, password }: Pick<UserMongo, 'email' | 'password'>) {
    const user = await this.Users.findOne({ email });
    if (!user) {
      throw new Error('No account');
    }
    await bcrypt.compare(password, user.password);
    return this.createTokenConnection(user);
  }

  async verifyTokenConnection(token: string): Promise<UserMongo | undefined> {
    let result: any;
    try {
      const { data } = this.jwt.verify(token, secret) as { data: UserMongo };
      const user = await this.Users.findOne({ token });
      if (user && data.email === user.email) {
        result = user;
      }
    } catch (e) {
      console.error(e.message);
    }
    return result;
  }

  async create(
    user: Pick<UserMongo, 'email' | 'firstName' | 'lastName' | 'password'>
  ): Promise<UserMongo> {
    const email = user.email.toLowerCase();
    const userWithEmail = await this.Users.findOne({ email });
    if (userWithEmail) {
      throw new Error('Email already exists');
    }
    return new this.Users(user).save();
  }

  async createAndGenerateToken(
    params: Pick<UserMongo, 'email' | 'firstName' | 'lastName' | 'password'> & {
      confirmPassword: string;
    }
  ): Promise<UserMongo> {
    const { confirmPassword, ...user } = params;
    if (user.password !== confirmPassword) {
      throw new Error('Password and confirm password has same');
    }
    const password = await this.hashPassword(user.password);
    const userCreated = await this.create({ ...user, password });
    return this.createTokenConnection(userCreated);
  }
}

export default UserInterface;
