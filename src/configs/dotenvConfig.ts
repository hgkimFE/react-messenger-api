import { config } from "dotenv";

export default function () {
  let path: string;
  switch (process.env.NODE_ENV) {
    default:
      console.log("dev env");
      path = `${__dirname}/../../.env.dev`;
  }
  config({ path });
}
