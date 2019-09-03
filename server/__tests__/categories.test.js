const { ApolloServer } =require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const expect = require('expect');

const typeDefs = require('../src/schema');
const resolvers = require('../src/resolvers');
const ChuckNorrisAPIMock = require('./mocks/chuckNorrisApi');

describe('Categories Tests', () => {
  const expectedResponse = [
    { name: 'Animal' },
    { name: 'Celebrities' },
    { name: 'Sports' }
  ];

  it('fetches categories', async () => {
    const chuckNorrisApi = new ChuckNorrisAPIMock();

    // create a test server to test against, using our production typeDefs,
    // resolvers, and dataSources.
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({
        chuckNorrisApi
      })
    });

    // use the test server to create a query function
    const { query } = createTestClient(server);

    const testQuery = `
      query {
        categories {
          name
        }
      }
    `;

    // run query against the server
    const res = await query({ query: testQuery });
    expect(res.data.categories).toEqual(expectedResponse);
  });
});
