import express from "express";

export const testingMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("Hello from middleware");
  next();
};
