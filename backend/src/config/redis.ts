import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL || "", {
  lazyConnect: true,
  maxRetriesPerRequest: null,
  enableOfflineQueue: false,
});

redis.on("error", () => {
});

export default redis;
