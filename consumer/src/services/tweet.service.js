const redisService = require("./redis.service");
const config = require("../config");

const findTweets = () => {
  return redisService.getListFromKey(config.REDIS_TWEET_KEY);
};

module.exports = { findTweets };
