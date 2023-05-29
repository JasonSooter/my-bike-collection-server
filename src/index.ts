import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { BikesDataSource } from './datasources.js';
import resolvers from './resolvers/index.js';
const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

export interface MyContext {
  dataSources: {
    bikesAPI: BikesDataSource;
  };
}

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: {
        bikesAPI: new BikesDataSource(),
      },
    };
  },
});

console.log(`🚀 Server listening at: ${url}`);
