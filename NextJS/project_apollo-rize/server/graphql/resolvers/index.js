const postResolvers = require("./posts");
const commentResolvers = require("./comments");

module.exports = {
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...postResolvers.Mutation,
    ...commentResolvers.Mutation,
  },
};
