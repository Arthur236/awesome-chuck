import { ApolloServer } from 'apollo-server';
import chalk from 'chalk';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(chalk.blue(`\nThe server is running at: ${url} 🎉`));
});
