import { createClient } from "redis";

const { REDIS_HOST, REDIS_PORT } = process.env;

export default createClient({
  socket: {
    host: REDIS_HOST,
    port: +REDIS_PORT
  }
});
