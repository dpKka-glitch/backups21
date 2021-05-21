const { UserInputError, AuthenticationError } = require("apollo-server-errors");
const Post = require("../../models/Post");
module.exports = {
  Query: {
    async getPosts(_, context) {
      //for query getPosts as defined in typedefs

      try {
        const posts = await Post.find().sort({ createdAt: -1 });
        return posts;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getPost(_, { postId }, context) {
      //for query getPosts as defined in typedefs
      try {
        const post = await Post.findById(postId);
        return post;
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    async createPost(_, { body, objectUrl, userId }, context) {
      if (body.trim() === "") {
        throw new Error("Post body must not be empty");
      }
      const newPost = new Post({
        body,
        userId,
        objectUrl,
        createdAt: new Date().toISOString(),
      });
      const post = await newPost.save();
      return post;
    },
    async likePost(_, { postId, userId }, context) {
      const post = await Post.findById(postId); //returns local object
      if (post) {
        if (post.likes.find((like) => like.userId === userId)) {
          //find merthod can trigger callbacks
          post.likes = post.likes.filter((like) => like.userId !== userId); //already liked, unlike it
        } else {
          post.likes.push({
            //since likes is an array in mongoose schema,JS methods can be used
            userId,
            createdAt: new Date().toISOString(),
          });
        }
        await post.save(); //save local object  back to db
        return post;
      } else throw new UserInputError("Post not found");
    },
    async deletePost(_, { postId, userId }, context) {
      const post = await Post.findById(postId);
      if (post) {
        if (userId === post.userId) {
          await post.delete();
          return "Post deleted successfully";
        } else throw new AuthenticationError("Action not allowed");
      } else throw Error("Post not found");
    },
  },
};
