import React, { useReducer } from "react";
import TaskForm from "../pure/taskForm";
import TaskList from "../pure/taskList";
import { taskReducer } from "../reducers/taskReducer";

export const taskContext = React.createContext(null);

const TaskContainer = () => {
  const [state, dispatch] = useReducer(taskReducer, []);

  return (
    <taskContext.Provider value={{state, dispatch}}>
    <h1>Tasks: "useContext" & "useReducer"</h1>
      <TaskForm ></TaskForm>
      <TaskList ></TaskList>
    </taskContext.Provider>
  );
};

export default TaskContainer;
