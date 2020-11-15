import { objectType, extendType, inputObjectType, stringArg } from '@nexus/schema';

import { Users } from '../mongo';
import returnSuccess from './common';

const User = objectType({
  definition(t) {
    t.id('id', {
      nullable: false,
      resolve({ _id }) {
        return _id;
      },
    });
    t.string('firstName', { description: 'First name of user', nullable: false });
    t.string('token', { description: 'Token of connection' });
  },
  name: 'User',
});

const RegisterInput = inputObjectType({
  definition(t) {
    t.string('email', { description: 'Email', required: true });
    t.string('firstName', { description: 'First name', required: true });
    t.string('lastName', { description: 'Last name', required: true });
    t.string('password', { description: 'Password', required: true });
    t.string('confirmPassword', {
      description: 'Confirm password',
      required: true,
    });
    t.boolean('agreement', { description: 'Agreement', required: true });
  },
  name: 'RegisterInput',
});

const QueryUser = extendType({
  definition(t) {
    t.field('users', {
      async resolve() {
        return Users.find();
      },
      list: true,
      type: User,
    });
    t.field('user', {
      nullable: false,
      async resolve(_, args, ctx) {
        console.log('ctx.user', ctx.user!);
        return ctx.user!;
      },
      type: User,
    });
  },
  type: 'Query',
});
const MutationUser = extendType({
  definition(t) {
    t.field('register', {
      args: { input: RegisterInput },
      async resolve(_, { input }, ctx) {
        return ctx.services.User.createAndGenerateToken(input);
      },
      type: User,
    });
    t.field('login', {
      args: {
        email: stringArg({ required: true, description: 'email' }),
        password: stringArg({ required: true, description: 'password' }),
      },
      async resolve(_, { email, password }, ctx) {
        return ctx.services.User.login({ email, password });
      },
      type: User,
    });
    t.field('logout', {
      async resolve(_, args, ctx) {
        await ctx.services.User.logout(ctx.user!._id);
        return {
          status: 'OK',
        };
      },
      type: returnSuccess,
    });
  },
  type: 'Mutation',
});

export { QueryUser, User, MutationUser };
