import { Resolvers } from '../__generated__/resolvers-types';
import mutations from './mutations.js';
import queries from './queries.js';

const resolvers: Resolvers = { ...queries, ...mutations };

export default resolvers;
