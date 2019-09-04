const { ApolloServer } = require('apollo-server');
const { createTestClient } = require('apollo-server-testing');
const expect = require('expect');

const typeDefs = require('../src/schema');
const resolvers = require('../src/resolvers');
const ChuckNorrisAPI = require('../src/dataSources/chuckNorris');

describe('Search Joke Tests', () => {
  const expectedResponse = {
    total: 2,
    results: [
      {
        id: 'tng5xzi5t9syvqaubukycw',
        categories: [],
        icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
        url: 'https://api.chucknorris.io/jokes/tng5xzi5t9syvqaubukycw',
        value: 'Chuck Norris always knows the EXACT location of Carmen SanDiego.',
        created_at: '2016-05-01 10:51:41.584544',
        updated_at: '2016-05-01 10:51:41.584544'
      },
      {
        id: 'vxmg5zgusq6ra35ns4e5sw',
        categories: [
          {
            'name': 'history'
          }
        ],
        icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
        url: 'https://api.chucknorris.io/jokes/vxmg5zgusq6ra35ns4e5sw',
        value: 'After returning from World War 2 unscathed, Bob Dole was congratulated by Chuck Norris with a handshake. The rest is history.',
        created_at: '2016-05-01 10:51:41.584544',
        updated_at: '2019-06-09 00:37:19.778045'
      }
    ]
  };

  it('searches for a joke based on search term provided', async () => {
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
    chuckNorrisApi.getSearchResult = jest.fn(() => expectedResponse);

    // use the test server to create a query function
    const { query } = createTestClient(server);

    const testQuery = `
      query($queryString: String!) {
        searchJoke(queryString: $queryString) {
          total
          results {
            id
            categories {
              name
            }
            icon_url
            url
            value
            created_at
            updated_at
          }
        }
      }
    `;

    // run query against the server
    const res = await query({ query: testQuery, variables: { queryString: 'history' } });
    expect(res.data.searchJoke).toEqual(expectedResponse);
  });
});
