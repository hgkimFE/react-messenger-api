import redisClient from "@/connections/redisConnection";
import session from "express-session";
import RedisStore from "connect-redis";
import { Express } from "express";

export default function (app: Express) {
  const {
    REDIS_SESSION_PREFIX,
    EXPRESS_SESSION_SECRET,
    EXPRESS_SESSION_TIMEOUT
  } = process.env;
  redisClient.connect().catch(() => {
    throw new Error("redis not connected");
  });
  const redisStore = new RedisStore({
    client: redisClient,
    prefix: REDIS_SESSION_PREFIX
  });
  console.log(typeof EXPRESS_SESSION_TIMEOUT);
  app.use(
    session({
      secret: EXPRESS_SESSION_SECRET,
      saveUninitialized: true,
      resave: false,
      store: redisStore,
      cookie: {
        maxAge: +EXPRESS_SESSION_TIMEOUT
      }
    })
  );
}
