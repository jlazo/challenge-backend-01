import { Router } from "express";
let router = Router();
import { publishToQueue } from "../services/rabbitmq.service";
import { config } from "../config";

const queueName = config.rabbitmq_queue_name;

router.post("/", async (req, res, next) => {
  let { payload } = req.body;
  console.log(req.body);

  await publishToQueue(queueName || "tweets", payload);
  res.statusCode = 200;
  res.data = { "message-sent": true };
  next();
});

export default router;
