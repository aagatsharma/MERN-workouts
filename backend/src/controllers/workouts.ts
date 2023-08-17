import express from "express";
import {
  deleteWorkoutsById,
  getAllWorkouts,
  getWorkoutsById,
  createWorkout,
  updateWorkoutsById,
} from "../db/workouts";

//get all workouts
export const getWorkouts = async (
  req: express.Request,
  res: express.Response
) => {
  const workouts = await getAllWorkouts();
  return res.status(200).json(workouts);
};

//get a single workouts
export const getSingleWorkouts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const workouts = await getWorkoutsById(id);
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(400).json({ error: "Id doesn't exists." });
  }
};

//create a new workout
export const postWorkouts = async (
  req: express.Request,
  res: express.Response
) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await createWorkout({ title, reps, load });
    return res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//delete a workout
export const deleteWorkouts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    await deleteWorkoutsById(id);
    return res.status(200).json({ success: "Workout deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//update a workout
export const updateWorkouts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    await updateWorkoutsById(id, req.body);
    return res.status(200).json({ success: "Updated Successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
