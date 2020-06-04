import Twit from "twit";
import { publishToQueue } from "./rabbitmq.service";
import { config } from "../config";

const T = new Twit({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
});

const stream = T.stream("statuses/filter", {
  track: ["platzi", "open source and node"],
  //language: "es",
});

stream.on("tweet", function (tweet) {
  console.log("Tweet Retrieve");
  const tweetString = JSON.stringify(tweet);
  publishToQueue(config.rabbitmq_queue_name, tweetString);
});
