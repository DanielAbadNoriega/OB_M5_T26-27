import {
  CREATE_TASK,
  DELETE_TASK,
  FILTER_TASK,
  TOGGLE_TASK,
} from "../actions/taskActions";

let taskID = 0;

export const taskReducer = (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      console.log("[ TaskReducer ] ID: ", taskID);
      return [
        ...state,
        {
          title: action.payload.title,
          text: action.payload.text,
          id: state.length,
          completed: false,
        },
      ];

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );

    case FILTER_TASK:
      return action.payload.filter;

    default:
      return state;
  }
};
