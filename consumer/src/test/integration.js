const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../../app");
const should = chai.should();
const expect = chai.expect;
// Mocks
const tweetListMock = require("../mocks/tweets-controller.json");

describe("GET /tweets", () => {
  it("should return a list of tweets when called", (done) => {
    chai
      .request(app)
      .get("/tweets")
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(tweetListMock);
        done();
      });
  });
});
