import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import '../styles/globals.css'
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

function MyApp({ Component, pageProps }) {

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: localStorage.getItem('token') ?? "",
      }
    }
  });

  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
        createClient({
          url: 'ws://chat-server-db0l.onrender.com/graphql',
        })
      )
      : null;

  const httpLink = createHttpLink({
    uri: 'https://chat-server-db0l.onrender.com/graphql',
  });

  const splitLink =
    typeof window !== "undefined" && wsLink != null
      ? split(
        ({ query }) => {
          const def = getMainDefinition(query);
          return (
            def.kind === "OperationDefinition" &&
            def.operation === "subscription"
          );
        },
        wsLink,
        authLink.concat(httpLink),
      )
      : authLink.concat(httpLink);

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Component {...pageProps} />
        <Toaster />
      </RecoilRoot>
    </ApolloProvider>
  )
}

export default MyApp
