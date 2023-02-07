import React from "react";

const Task = ({ task, taskID }) => {

  const removeTaskID = (id) => {
    taskID(id);
  }

  return (
    <div className="card col-5 col-lg-5 mx-auto mb-2">
      <div className="card-body">
        <div className="card-title"> {task.title}</div>
        <div className="card-text"> {task.text}</div>
      </div>
      <button
        className="col-4 btn btn-danger btn-lg-danger m-2"
        onClick={() => removeTaskID(task.id)}
      >
        {" "}
        DELETE{" "}
      </button>
    </div>
  );
};

export default Task;
