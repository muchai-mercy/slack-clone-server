import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';

const types = fileLoader(path.join(__dirname, './schema'));
const typeDefs = mergeTypes(types, { all: true });
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql'
  }
});

app.listen(5000, () => {
  console.log(`🚀  Server ready at ${5000}`);
});

server.applyMiddleware({
  app,
});
