const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    body: String
    createdAt: String!
    comments: [Comment]!
    userId: String!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
    objectUrl: String!
  }
  type Comment {
    id: ID!
    createdAt: String!
    userId: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    userId: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    userId: String!
    createdAt: String!
  }
  input RegisterInput {
    userId: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
  type Mutation {
    createPost(body: String!, objectUrl: String!, userId: String!): Post!
    deletePost(postId: ID!, userId: String!): String!
    createComment(postId: String!, body: String!, userId: String!): Post!
    deleteComment(postId: ID!, userId: String!, commentId: ID!): Post!
    likePost(postId: ID!, userId: String!): Post!
  }
`;
//Before line 37 all type are element types
//in graphql  QUERIRES AND MUTATIONS   also have type of "Query" and "Mutation" respectively
