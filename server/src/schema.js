const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    categories: [Category]!
    randomJoke: RandomJoke!
    joke(category: String!): Joke!
    searchJoke(queryString: String!): Search!
  }

  type Category {
    name: String
  }

  type Joke {
    id: ID!
    icon_url: String
    url: String
    value: String
  }

  type RandomJoke {
    id: ID!
    categories: [Category]!
    icon_url: String
    url: String
    value: String
    created_at: String
    updated_at: String
  }

  type Search {
    total: Int
    results: [SearchResult]!
  }

  type SearchResult {
    id: ID!
    categories: [Category]
    icon_url: String
    url: String
    value: String
    created_at: String
    updated_at: String
  }
`;

module.exports = typeDefs;
