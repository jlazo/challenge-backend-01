const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const redisService = require("../services/redis.service");
// To test
const tweetService = require("../services/tweet.service");
// Mocks
const tweetListMock = require("../mocks/tweets-service.json");

describe("Tweet List", function () {
  it("should return all the tweets when called", async function () {
    sinon.stub(redisService, "getListFromKey").returns(tweetListMock);
    const tweets = await tweetService.findTweets();
    expect(tweets).to.deep.equal(tweetListMock);
  });
});
