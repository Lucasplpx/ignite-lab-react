import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o5iw2t0mht01xrggu87rjx/master',
  cache: new InMemoryCache(),
});
