import express from "express";
// import users from "./users";
import workouts from "./workouts";

const router = express.Router();

export default (): express.Router => {
  workouts(router);
  //   users(router);
  return router;
};
