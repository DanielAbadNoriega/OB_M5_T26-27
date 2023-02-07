import React, { useContext } from "react";
import { taskContext } from "../containers/taskContainer";
import Task from "./task";

const TaskList = ({taskID}) => {
  const state = useContext(taskContext);
  console.log("[ TaskList ] State: ", state);

  return (
    <div>
      <h2>Tasks</h2>
      {state.map((task) => (
        <Task task={task} key={task.id} taskID={taskID}></Task>
      ))}
    </div>
  );
};

export default TaskList;
