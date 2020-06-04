const redisService = require("./redis.service");
const config = require("../config");
let amqp = require("amqplib/callback_api");

amqp.connect(config.RABBITMQ_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume(
      config.RABBITMQ_QUEUE_NAME,
      function (msg) {
        console.log("Tweet Received");
        redisService.rightPushList(config.REDIS_TWEET_KEY, msg.content);
      },
      { noAck: true }
    );
  });
});
