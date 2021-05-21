const mongoose = require("mongoose");
const { MONGODB } = require("./mongo-config");

const typeDefs = require("./graphql/typedefs");
const resolvers = require("./graphql/resolvers");
const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("👨‍💻 MongoDB Atlas connected");
    return server.listen({ port: "8080" }).then((res) => {
      console.log(`Apollo server up at ${res.url}`);
    });
  });
