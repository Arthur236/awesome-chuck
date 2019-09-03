const { RESTDataSource } = require('apollo-datasource-rest');

class ChuckNorrisAPIMock extends RESTDataSource {
  constructor() {
    super();
  }

  async getCategories() {
    return [
      { name: 'Animal' },
      { name: 'Celebrities' },
      { name: 'Sports' }
    ];
  }

  async getRandomJoke() {
    return {
      id: 'w-Hxj2PTTgmEUYvIeeiG6A',
      categories: [],
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      url: 'https://api.chucknorris.io/jokes/w-Hxj2PTTgmEUYvIeeiG6A',
      value: 'Chuck Norris studied abroad for two years. Then he studied her sister.'
    };
  }

  async getRandomJokeByCategory(category) {
    return {
      id: 'rqcvwdgqq6amwony3nngba',
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      url: 'https://api.chucknorris.io/jokes/rqcvwdgqq6amwony3nngba',
      value: 'In the Words of Julius Caesar, "Veni, Vidi, Vici, Chuck Norris". Translation: I came, I saw, and I was roundhouse-kicked inthe face by Chuck Norris.'
    };
  }

  async getSearchResult(queryString) {
    return {
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
  }
}

module.exports = ChuckNorrisAPIMock;
