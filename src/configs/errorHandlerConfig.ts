import { Express, ErrorRequestHandler } from "express";

export default function (app: Express) {
  const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err.stack);
    next();
  };
  app.use(errorHandler);
}
