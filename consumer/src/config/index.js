require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  RABBITMQ_URL: process.env.RABBITMQ_URL,
  RABBITMQ_QUEUE_NAME: process.env.RABBITMQ_QUEUE_NAME,
  REDIS_TWEET_KEY: process.env.REDIS_KEY_NAME,
  REDIS_URL: process.env.REDIS_KEY_NAME,
};

module.exports = config;
