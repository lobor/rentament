import apollo from './graphql/apollo';
import context from './graphql/context';
import { mongo } from './mongo';
import { MONGO_URL } from './config/mongo';

const start = async () => {
  await mongo({ mongoUrl: MONGO_URL as string });
  await apollo(context);
};

start();
