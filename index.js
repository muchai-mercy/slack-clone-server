import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from './schema';
import resolvers from './resolvers';

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
