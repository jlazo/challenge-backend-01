const fetch = require("node-fetch");
const config = require("../config");
const baseURL = config.api_tweet_url;

const resolvers = {
  tweets: async () => {
    const response = await fetch(`${baseURL}/tweets`);
    const result = await response.json();
    return result;
  },
};

module.exports = resolvers;
