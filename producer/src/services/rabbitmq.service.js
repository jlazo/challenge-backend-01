let amqp = require("amqplib/callback_api");
const config = require("../config");
const CONN_URL = config.rabbitmq_url;

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, channel) {
    ch = channel;
  });
});

const publishToQueue = async (queueName, data) => {
  ch.sendToQueue(queueName, new Buffer(data), { persistent: true });
};

process.on("exit", (code) => {
  ch.close();
  console.log(`Closing rabbitmq channel`);
});

module.exports = publishToQueue;
