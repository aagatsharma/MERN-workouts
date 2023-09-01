import React, { createContext, useReducer, ReactNode } from "react";
import { workoutTypes } from "../../types";

export type WorkoutsAction =
  | { type: "SET_WORKOUTS"; payload: workoutTypes[] }
  | { type: "CREATE_WORKOUT"; payload: workoutTypes }
  | { type: "DELETE_WORKOUT"; payload: workoutTypes };

interface WorkoutsContextState {
  workouts: workoutTypes[];
}

interface WorkoutsContextValue extends WorkoutsContextState {
  dispatch: React.Dispatch<WorkoutsAction>;
}

interface WorkoutsContextProviderProps {
  children: ReactNode;
}

export const WorkoutsContext = createContext<WorkoutsContextValue | undefined>(
  undefined
);

const workoutsReducer = (
  state: WorkoutsContextState,
  action: WorkoutsAction
): WorkoutsContextState => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({
  children,
}: WorkoutsContextProviderProps) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: [],
  });

  const contextValue: WorkoutsContextValue = { ...state, dispatch };

  return (
    <WorkoutsContext.Provider value={contextValue}>
      {children}
    </WorkoutsContext.Provider>
  );
};
