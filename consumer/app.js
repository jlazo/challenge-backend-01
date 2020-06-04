const express = require("express");
const tweets = require("./src/routes/tweets.routes");
require("./src/services/rabbitmq.service");

let app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).send({
    status: true,
    response: "Hello World!",
  });
});

app.use("/tweets", tweets);

app.listen(30007, () => {
  console.log(`🚀 Server ready at http://localhost:30007`);
});

module.exports = app;
