import { workoutTypes } from "../../types";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

import useWorkoutsContext from "../hooks/useWorkoutsContext";

function Workouts(workout: workoutTypes) {
  const { dispatch } = useWorkoutsContext();
  const handleDelete = async () => {
    await axios
      .delete(`/api/workouts/${workout._id}`)
      .then(() => {
        dispatch({ type: "DELETE_WORKOUT", payload: workout._id });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="bg-red-200 mt-6 mx-4 p-5 ">
      <h1>{workout.title}</h1>
      <p>
        <strong>Load (kg) : </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps : </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <AiFillDelete
        className="text-green-800 h-7 w-7 hover:cursor-pointer"
        onClick={handleDelete}
      />
    </div>
  );
}

export default Workouts;
