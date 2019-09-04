const { ApolloServer } = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const expect = require('expect');

const typeDefs = require('../src/schema');
const resolvers = require('../src/resolvers');
const ChuckNorrisAPI = require('../src/dataSources/chuckNorris');

describe('Random Joke Tests', () => {
  const expectedResponse = {
    id: 'w-Hxj2PTTgmEUYvIeeiG6A',
    categories: [],
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    url: 'https://api.chucknorris.io/jokes/w-Hxj2PTTgmEUYvIeeiG6A',
    value: 'Chuck Norris studied abroad for two years. Then he studied her sister.'
  };

  it('fetches a random joke', async () => {
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
    chuckNorrisApi.getRandomJoke = jest.fn(() => expectedResponse);

    // use the test server to create a query function
    const { query } = createTestClient(server);

    const testQuery = `
      query {
        randomJoke {
          id
          categories {
            name
          }
          icon_url
          url
          value
        }
      }
    `;

    // run query against the server
    const res = await query({ query: testQuery });
    expect(res.data.randomJoke).toEqual(expectedResponse);
  });
});
