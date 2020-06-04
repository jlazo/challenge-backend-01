import amqp from "amqplib/callback_api";
import { config } from "../config";
const CONN_URL = config.rabbitmq_url;

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, channel) {
    ch = channel;
  });
});

export const publishToQueue = async (queueName, data) => {
  ch.sendToQueue(queueName, new Buffer(data), { persistent: true });
};

process.on("exit", (code) => {
  ch.close();
  console.log(`Closing rabbitmq channel`);
});
