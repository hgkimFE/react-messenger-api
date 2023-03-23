// environment variable config
import dotenvConfig from "@/configs/dotenvConfig";
dotenvConfig();

// express app init
import express from "express";
const app = express();

// session config
// import sessionConfig from "@/configs/sessionConfig";
// sessionConfig(app);
// passport config
import passportConfig from "@/configs/passportConfig";
passportConfig(app);

// error handler config
import errorHandlerConfig from "@/configs/errorHandlerConfig";
errorHandlerConfig(app);

// server listen
import { AddressInfo } from "net";
const { HOST, PORT } = process.env;
const server = app.listen(+PORT, HOST, () => {
  const { address: host, port } = server.address() as AddressInfo;
  console.log(`express server start on ${host}:${port}`);
});
// E.O. server listen
