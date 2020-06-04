const Router = require("express");
const publishToQueue = require("../services/rabbitmq.service");
const router = Router();
const config = require("../config");

const queueName = config.rabbitmq_queue_name;

router.post("/", async (req, res, next) => {
  let { payload } = req.body;
  console.log(req.body);

  await publishToQueue(queueName || "tweets", payload);
  res.statusCode = 200;
  res.data = { "message-sent": true };
  next();
});

module.exports = router;
