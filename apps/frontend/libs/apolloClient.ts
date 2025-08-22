import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const clientAPI = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GRAPHQL_ENDPOINT,
  }),
  cache: new InMemoryCache(),
});

const adminAPI = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GRAPHQL_ENDPOINT,
  }),
  cache: new InMemoryCache(),
});

export {adminAPI, clientAPI};