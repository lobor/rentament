import * as path from 'path';
import { ContextFunction } from 'apollo-server-core';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { makeSchema, plugin } from '@nexus/schema';
import { ApolloServer } from 'apollo-server';
import { Context } from './context';

import { QueryUser, MutationUser } from './user';
import { QueryTenant, MutationTenant } from './tenant';
import { QueryLease, MutationLease } from './lease';
import { QueryProperty, MutationProperty } from './property';
import { QueryBuilding, MutationBuilding } from './building';

const apollo = (context: ContextFunction<ExpressContext, Context>) => {
  const LogMutationTimePlugin = plugin({
    name: 'LogMutationTimePlugin',
    onCreateFieldResolver() {
      return async (root, args, ctx, info, next) => {
        const startTimeMs = new Date().valueOf();
        const value = await next(root, args, ctx, info);
        const endTimeMs = new Date().valueOf();
        console.log(`graphql:${info.path.key} took ${endTimeMs - startTimeMs} ms`);
        return value;
      };
    },
  });
  const schema = makeSchema({
    types: [
      QueryUser,
      MutationUser,
      QueryTenant,
      MutationTenant,
      QueryLease,
      MutationLease,
      QueryProperty,
      MutationProperty,
      QueryBuilding,
      MutationBuilding,
    ],
    plugins: [LogMutationTimePlugin],
    outputs: {
      schema: path.resolve('generated/schema.graphql'),
      typegen: path.resolve('generated/typings.ts'),
    },
    typegenAutoConfig: {
      contextType: 'ctx.Context',
      sources: [
        {
          alias: 'ctx',
          source: path.resolve('src/graphql/context.ts'),
        },
      ],
    },
  });
  const apolloServer = new ApolloServer({ context, schema });
  return apolloServer.listen();
};

export default apollo;
