import React, { useReducer } from "react";
import { createTask, deleteTask } from "../actions/taskActions";
import TaskForm from "../pure/taskForm";
import TaskList from "../pure/taskList";
import { taskReducer } from "../reducers/taskReducer";

export const taskContext = React.createContext(null);

const TaskContainer = () => {
  const [state, dispatch] = useReducer(taskReducer, []);

  const newTask = (title, text) => {
    dispatch(createTask(title, text));
    console.log("[ TaskContainer ] State: ", state);
  };

  const taskID = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <taskContext.Provider value={state}>
      <TaskForm addNewTask={newTask}></TaskForm>
      <TaskList taskID={taskID}></TaskList>
    </taskContext.Provider>
  );
};

export default TaskContainer;
