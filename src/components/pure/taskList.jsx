import React, { useContext } from "react";
import { taskContext } from "../containers/taskContainer";
import Task from "./task";

const TaskList = () => {
  const {state} = useContext(taskContext);
  console.log("[ TaskList ] State: ", state);

  return (
    <div className="rounded shadow p-3 mb-5 col-10 col-lg-10 mx-auto">
      <h2>Tasks</h2>
      {state.map((task) => (
        <Task task={task} key={task.id} ></Task>
      ))}
    </div>
  );
};

export default TaskList;
