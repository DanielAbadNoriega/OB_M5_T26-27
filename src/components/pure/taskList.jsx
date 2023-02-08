import React, { useContext } from "react";
import { taskContext } from "../containers/taskContainer";
import Task from "./task";

const TaskList = () => {
  const {tasks} = useContext(taskContext);
  console.log("[ TaskList ] Tasks: ", tasks);

  return (
    <div className="rounded shadow p-3 mb-5 col-10 col-lg-10 mx-auto">
      <h2>Tasks</h2>
      {tasks.map((task, index) => (
        <Task task={task} key={index} ></Task>
      ))}
    </div>
  );
};

export default TaskList;
