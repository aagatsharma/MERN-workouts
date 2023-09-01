import axios from "axios";
import { useEffect } from "react";
import Workouts from "../components/Workouts";
import { workoutTypes } from "../../types";
import WorkoutForm from "../components/WorkoutForm";

import useWorkoutsContext from "../hooks/useWorkoutsContext";
function Home() {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkouts = () => {
      axios
        .get("/api/workouts")
        .then((res) => {
          dispatch({ type: "SET_WORKOUTS", payload: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div>
      <WorkoutForm />
      <div className="grid grid-cols-6">
        {workouts.map((workout: workoutTypes) => (
          <Workouts key={workout._id} {...workout} />
        ))}
      </div>
    </div>
  );
}

export default Home;
