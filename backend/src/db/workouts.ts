import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const WorkoutModel = mongoose.model("Workout", WorkoutSchema);

export const getAllWorkouts = () => WorkoutModel.find().sort({ createdAt: -1 });

export const getWorkoutsById = (id: string) => WorkoutModel.findById(id);

export const createWorkout = (values: Record<string, any>) =>
  new WorkoutModel(values).save().then((user) => user.toObject());

export const deleteWorkoutsById = (id: string) =>
  WorkoutModel.findOneAndDelete({ _id: id });

export const updateWorkoutsById = (id: string, values: Record<string, any>) =>
  WorkoutModel.findByIdAndUpdate({ _id: id }, { ...values });
