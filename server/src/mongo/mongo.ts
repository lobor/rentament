import * as mongoose from 'mongoose';

export interface MongoParams {
  mongoUrl: string;
}
export const mongo = async ({ mongoUrl }: MongoParams) => {
  try {
    console.log('mongo:Connect to mongo');
    await mongoose.connect(`${mongoUrl}?authSource=admin`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 1000,
      maxIdleTimeMS: 1000,
    });
    console.log('mongo:Connected at mongo');
  } catch (e) {
    console.error(`mongo:${e.message}`);
  }
};
