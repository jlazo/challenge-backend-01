const { ApolloServer } = require("apollo-server");

//1. Schema
const typeDefs = require("./src/schema");

//2. Resolvers
const Query = require("./src/resolvers/query");

const resolvers = {
  Query,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
