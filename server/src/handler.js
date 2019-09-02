/*
 * Our serverless graphql config file
 */

const { ApolloServer } = require('apollo-server-lambda');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ChuckNorrisAPI = require('./dataSources/chuckNorris');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({}),
  dataSources: () => ({
    chuckNorrisApi: new ChuckNorrisAPI()
  })
});

export const gqlHandler = (event, context, callback) => {
  const handler = server.createHandler({
    cors: {
      origin: '*',
      credentials: true,
    },
  });

  // tell AWS lambda we do not want to wait for NodeJS event loop
  // to be empty in order to send the response
  context.callbackWaitsForEmptyEventLoop = false;

  // process the request
  return handler(event, context, callback);
};
