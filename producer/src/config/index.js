require("dotenv").config();

config = {
  dev: process.env.NODE_ENV !== "production",
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  rabbitmq_url: process.env.RABBITMQ_URL,
  rabbitmq_queue_name: process.env.RABBITMQ_QUEUE_NAME,
};

module.exports = config;
