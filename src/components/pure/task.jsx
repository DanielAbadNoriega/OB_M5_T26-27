import React, { useContext } from "react";
import { deleteTask } from "../actions/taskActions";
import { taskContext } from "../containers/taskContainer";

const Task = ({ task }) => {
  const { dispatch } = useContext(taskContext);

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
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">
          { task.completed ? "COMPLETED" : "UNCOMPLETED"}
        </label>
      </div>
    </div>
  );
};

export default Task;
