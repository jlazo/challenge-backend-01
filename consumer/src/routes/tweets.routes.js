const Router = require("express");
const tweetService = require("../services/tweet.service");
const router = Router();

router.get("/", async (req, res, next) => {
  const tweets = await tweetService.findTweets();
  res.status(200).json({
    size: tweets.length,
    tweet: tweets,
  });
  next();
});

module.exports = router;
