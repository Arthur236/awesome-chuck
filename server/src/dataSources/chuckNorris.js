const { RESTDataSource } = require('apollo-datasource-rest');

class ChuckNorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes/';
  }

  formatCategories(categories) {
    return Array.isArray(categories)
      ? categories.map(category => this.categoryReducer(category))
      : [];
  }

  categoryReducer(category) {
    return {
      name: category
    };
  }

  jokeReducer(joke) {
    return {
      id: joke.id,
      icon_url: joke.icon_url,
      url: joke.url,
      value: joke.value
    };
  }

  randomJokeReducer(joke) {
    return {
      id: joke.id,
      categories: this.formatCategories(joke.categories),
      icon_url: joke.icon_url,
      url: joke.url,
      value: joke.value,
      created_at: joke.created_at,
      updated_at: joke.updated_at,
    };
  }

  searchResultReducer(result) {
    return {
      id: result.id,
      categories: this.formatCategories(result.categories),
      icon_url: result.icon_url,
      url: result.url,
      value: result.value,
      created_at: result.created_at,
      updated_at: result.updated_at
    };
  }

  async getCategories() {
    const response = await this.get('categories');
    return this.formatCategories(response);
  }

  async getRandomJoke() {
    const response = await this.get('random');
    return this.randomJokeReducer(response);
  }

  async getRandomJokeByCategory(category) {
    const response = await this.get('random', { category: category });
    return this.jokeReducer(response);
  }

  async getSearchResult(queryString) {
    const response = await this.get('search', { query: queryString });
    const results = Array.isArray(response.result)
      ? response.result.map(result => this.searchResultReducer(result))
      : [];

    return {
      total: response.total,
      results
    };
  }
}

module.exports = ChuckNorrisAPI;
