const { ApolloServer } =require('apollo-server');
const chalk = require('chalk');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ChuckNorrisAPI = require('./dataSources/chuckNorris');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    chuckNorrisApi: new ChuckNorrisAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(chalk.blue(`\nThe server is running at: ${url} 🎉`));
});
