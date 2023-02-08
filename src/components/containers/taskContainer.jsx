import React, { useReducer } from "react";
import FilterButtons from "../pure/filterButtons";
import TaskForm from "../pure/taskForm";
import TaskList from "../pure/taskList";
import { taskReducer } from "../reducers/taskReducer";

export const taskContext = React.createContext(null);

const TaskContainer = () => {
  let [state, dispatch] = useReducer(taskReducer, []);

  let tasks = state;

  const filterState = (filter) => {
    switch (filter) {
      case "ALL":
        tasks = state;
        return tasks;
  
      case "COMPLETED":
      tasks = state.filter((task) => task.completed);  
      return tasks;
  
      case "UNCOMPLETED":
        tasks = state.filter((task) => !task.completed);
        return tasks;
    
      default:
        return state;
    }
  }

  return (
    <taskContext.Provider value={{state, dispatch, tasks}}>
    <h1>Tasks: "useContext" & "useReducer"</h1>
      <TaskList ></TaskList>
      <FilterButtons filterTasks={filterState}></FilterButtons>
      <TaskForm ></TaskForm>
    </taskContext.Provider>
  );
};

export default TaskContainer;
