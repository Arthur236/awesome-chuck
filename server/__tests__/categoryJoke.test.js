const { ApolloServer } = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const expect = require('expect');

const typeDefs = require('../src/schema');
const resolvers = require('../src/resolvers');
const ChuckNorrisAPI = require('../src/dataSources/chuckNorris');

describe('Category Joke Tests', () => {
  const expectedResponse = {
    id: 'rqcvwdgqq6amwony3nngba',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    url: 'https://api.chucknorris.io/jokes/rqcvwdgqq6amwony3nngba',
    value: 'In the Words of Julius Caesar, "Veni, Vidi, Vici, Chuck Norris". Translation: I came, I saw, and I was roundhouse-kicked inthe face by Chuck Norris.'
  };

  it('fetches a joke based on category', async () => {
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
    chuckNorrisApi.getRandomJokeByCategory = jest.fn(() => expectedResponse);

    // use the test server to create a query function
    const { query } = createTestClient(server);

    const testQuery = `
      query($category: String!) {
        joke(category: $category) {
          id
          icon_url
          url
          value
        }
      }
    `;

    // run query against the server
    const res = await query({ query: testQuery, variables: { category: 'celebrities' } });
    expect(res.data.joke).toEqual(expectedResponse);
  });
});
