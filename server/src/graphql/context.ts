import { ContextFunction } from 'apollo-server-core';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import Services from '../services';
import { UserMongo } from '../mongo';

export class Context {
  services = new Services();

  user?: UserMongo;
}

const context: ContextFunction<ExpressContext, Context> = async (ctx) => {
  const contextInstance = new Context();
  const { req } = ctx;
  const { authorization } = req.headers;
  const user = await contextInstance.services.User.verifyTokenConnection(
    authorization.replace('Bearer ', '')
  );
  return { ...contextInstance, ...ctx, user };
};

export default context;
