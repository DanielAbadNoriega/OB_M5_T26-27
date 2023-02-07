import React, { useContext } from "react";
import { deleteTask, toggleTask } from "../actions/taskActions";
import { taskContext } from "../containers/taskContainer";

const Task = ({ task }) => {
  const { dispatch } = useContext(taskContext);

  const switchChecked = (
    <input
      className={`form-check-input ${
        task.completed ? "bg-success" : "bg-danger"
      }`}
      type="checkbox"
      role="switch"
      id="switchTaskCompleted"
      style={{ cursor: "pointer" }}
      onClick={() => dispatch(toggleTask(task.id))}
      checked
    />
  );

  const switchUnChecked = (
    <input
      className={`form-check-input ${
        task.completed ? "bg-success" : "bg-danger"
      }`}
      type="checkbox"
      role="switch"
      id="switchTaskCompleted"
      style={{ cursor: "pointer" }}
      onClick={() => dispatch(toggleTask(task.id))}
    />
  );

  return (
    <div className="card col-5 col-lg-5 mx-auto mb-2">
      <div className="card-body">
        <div className="card-title">
          <b>{task.title}</b>
        </div>
        <hr></hr>
        <div className="card-text"> {task.text}</div>
      </div>
      <button
        className="col-4 btn btn-danger btn-lg-danger m-2"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        {" "}
        DELETE{" "}
      </button>
      <div className="form-check form-switch col-7 col-lg-7 mx-auto">
        {task.completed ? switchChecked : switchUnChecked}
        <label className="form-check-label" for="switchTaskCompleted">
          {task.completed ? "COMPLETED" : "UNCOMPLETED"}
        </label>
      </div>
    </div>
  );
};

export default Task;
