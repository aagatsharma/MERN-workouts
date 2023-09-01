import { workoutTypes } from "../../types";
import { WorkoutsAction, WorkoutsContext } from "../context/WorkoutsProvider";
import { useContext } from "react";

interface WorkoutsContextValue {
  workouts: workoutTypes[];
  dispatch: React.Dispatch<WorkoutsAction>;
}

export default function useWorkoutsContext(): WorkoutsContextValue {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error(
      "useWorkoutsContext must be used within a WorkoutsContextProvider"
    );
  }

  return context;
}
