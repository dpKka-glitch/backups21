const { ApolloError, UserInputError } = require("apollo-server-errors");
const Post = require("../../models/Post");

module.exports = {
  Mutation: {
    async createComment(_, { postId, body, userId }, context) {
      const post = await Post.findById(postId);
      if (post) {
        if (post.userId !== userId || body.trim() === "")
          throw new ApolloError("Not allowed || invalid comment body");
        post.comments.unshift({
          //since comments is an array in the mongoose schema; JS methods are used
          body,
          userId,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else throw new UserInputError("Post not found");
    },
    async deleteComment(_, { postId, userId, commentId }, context) {
      const post = await Post.findById(postId);
      if (post) {
        console.log(post.comments);
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);
        if (post.comments[commentIndex].userId === userId) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else throw new ApolloError("not allowed");
      } else throw new UserInputError("post not found");
    },
  },
};
