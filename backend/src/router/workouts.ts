import express from "express";
import {
  getWorkouts,
  getSingleWorkouts,
  postWorkouts,
  deleteWorkouts,
  updateWorkouts,
} from "../controllers/workouts";
import { testingMiddleware } from "../middlewares";

export default (router: express.Router) => {
  router.get("/api/workouts", testingMiddleware, getWorkouts);
  router.get("/api/workouts/:id", getSingleWorkouts);
  router.post("/api/workouts", postWorkouts);
  router.delete("/api/workouts/:id", deleteWorkouts);
  router.patch("/api/workouts/:id", updateWorkouts);
};
