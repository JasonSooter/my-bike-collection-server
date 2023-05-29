import { MutationResolvers } from '__generated__/resolvers-types';

// Use the generated `MutationResolvers` type to type check our mutations!
const mutations: MutationResolvers = {
  Mutation: {
    addBike: async (_, { title, author }, { dataSources }) => {
      return await dataSources.bikesAPI.addBike({ title, author });
    },
  },
};

export default mutations;
