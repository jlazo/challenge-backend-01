import express from "express";
import tweets from "./src/routes/tweets.routes";
import {} from "./src/services/tweet.service";

let app = express();
app.use(express.json());

app.use("/tweets", tweets);

app.listen(30006, () => {
  console.log(`🚀 Server ready at http://localhost:30006`);
});

module.exports = app;
