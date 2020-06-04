const { gql } = require("apollo-server");

const typeDefs = gql`
  type TweetRequest {
    size: Int!
    tweet: [Tweet!]
  }

  type Tweet {
    id: ID!
    text: String!
    source: String!
    user: User!
    retweeted: Boolean!
  }

  type User {
    id: Int!
    name: String!
    screen_name: String
    description: String!
  }
  type Query {
    tweets: TweetRequest!
  }
`;

module.exports = typeDefs;
