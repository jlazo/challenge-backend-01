const asyncRedis = require("async-redis");

const getListFromKey = async (key) => {
  const redisClient = asyncRedis.createClient();
  const ranges = await redisClient.lrange(key, 0, 50);
  return ranges.map((p) => JSON.parse(p));
};
const rightPushList = (key, value) => {
  const redisClient = asyncRedis.createClient();
  redisClient.rpush([key, value]);
};
//export default redisClient;
module.exports = { getListFromKey, rightPushList };
