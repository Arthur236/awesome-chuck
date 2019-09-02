export default {
  Query: {
    categories: (parent, args, context, info) => {
      const { dataSources } = context;
      return dataSources.chuckNorrisApi.getCategories();
    },

    randomJoke: (parent, args, context, info) => {
      const { dataSources } = context;
      return dataSources.chuckNorrisApi.getRandomJoke();
    },

    joke: (parent, args, context, info) => {
      const { category } = args;
      const { dataSources } = context;

      return dataSources.chuckNorrisApi.getRandomJokeByCategory(category);
    },

    searchJoke: (parent, args, context, info) => {
      const { queryString } = args;
      const { dataSources } = context;

      return dataSources.chuckNorrisApi.getSearchResult(queryString);
    }
  }
};
