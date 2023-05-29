import { QueryResolvers } from '__generated__/resolvers-types';

// Use the generated `QueryResolvers` type to type check our queries!
const queries: QueryResolvers = {
  Query: {
    bikes: async (_, __, contextValue) => {
      return await contextValue.dataSources.bikesAPI.getBikes();
    },
  },
};

export default queries;
