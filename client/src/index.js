import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './components/App';

import * as serviceWorker from './serviceWorker';

// Set up our apollo-client to point at the server we created
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://4y8kwtqlm4.execute-api.us-east-2.amazonaws.com/dev/graphql'
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
