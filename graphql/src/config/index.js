require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  api_tweet_url: process.env.API_TWEET_URL,
};

module.exports = config;
