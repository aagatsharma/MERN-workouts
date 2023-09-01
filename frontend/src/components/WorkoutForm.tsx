import { useState } from "react";
import axios from "axios";
import { workoutTypes } from "../../types";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newWorkout: workoutTypes = {
      title,
      load: Number(load),
      reps: Number(reps),
    };

    axios
      .post("/api/workouts", newWorkout)
      .then((res) => {
        dispatch({ type: "CREATE_WORKOUT", payload: res.data });
        setTitle("");
        setReps("");
        setLoad("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <div className="flex flex-col gap-8 mt-6 ml-6 w-1/5 text-center ">
          <h1 className="font-bold text-xl mb-6">Add a new workout</h1>
          <div className="flex items-center justify-between">
            <label htmlFor="title">Exercise Title</label>
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="border-2 border-red-400 focus:outline-none p-1"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="load">Load (in Kgs): </label>
            <input
              type="number"
              id="load"
              onChange={(e) => setLoad(e.target.value)}
              value={load}
              className="border-2 border-red-400 focus:outline-none p-1"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="reps">Reps</label>
            <input
              type="number"
              id="reps"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
              className="border-2 border-red-400 focus:outline-none p-1"
            />
          </div>

          <div>
            <button type="submit" className="p-3 bg-red-400 rounded-md ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default WorkoutForm;
