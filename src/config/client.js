import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const TOKEN = '38UKCzzIe7CzBAGLrp9xQEdXLhAbmjuc0jz4k9M2uCM0HnVdMCqNGQB7zFXXFGvkaqMOYOm9JVUx2C66NR6wcPGZSB2RWqbkcnrk2AOCUQ9tquY8gvF53mwm6BeVeKcLfntepotpNS95ZlA6aqfVX4u9d7cDg7ppDFpjNArrIyiYC1Qi7W'

const httpLink = new HttpLink({
  uri: 'https://api.apito.io/secured/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${TOKEN}`
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client