const { ApolloServer } =require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const expect = require('expect');

const typeDefs = require('../src/schema');
const resolvers = require('../src/resolvers');
const ChuckNorrisAPI = require('../src/dataSources/chuckNorris');

describe('Categories Tests', () => {
  const expectedResponse = [
    { name: 'Animal' },
    { name: 'Celebrities' },
    { name: 'Sports' }
  ];

  it('fetches categories', async () => {
    const chuckNorrisApi = new ChuckNorrisAPI();

    // create a test server to test against, using our production typeDefs,
    // resolvers, and dataSources.
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({
        chuckNorrisApi
      })
    });

    // mock the data source methods
    chuckNorrisApi.getCategories = jest.fn(() => expectedResponse);

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
