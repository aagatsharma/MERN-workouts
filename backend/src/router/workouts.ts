import express from "express";
import {
  getWorkouts,
  getSingleWorkouts,
  postWorkouts,
  deleteWorkouts,
  updateWorkouts,
} from "../controllers/workouts";
// import { testingMiddleware } from "../middlewares";

export default (router: express.Router) => {
  // router.get("/api/workouts", testingMiddleware, getWorkouts); //middleware
  // router.get("/api/workouts", getWorkouts);
  // router.get("/api/workouts/:id", getSingleWorkouts);
  // router.post("/api/workouts", postWorkouts);
  // router.delete("/api/workouts/:id", deleteWorkouts);
  // router.patch("/api/workouts/:id", updateWorkouts);

  //can also be written as:
  router.route("/api/workouts").get(getWorkouts).post(postWorkouts);
  router
    .route("/api/workouts/:id")
    .get(getSingleWorkouts)
    .delete(deleteWorkouts)
    .patch(updateWorkouts);
};
