import React, { useContext } from "react";
import { taskContext } from "../containers/taskContainer";
import { createTask } from "../actions/taskActions";

const TaskForm = () => {
  const { dispatch } = useContext(taskContext);

  const addTask = (e) => {
    e.preventDefault();
    const { title, text } = e.target;
    dispatch(createTask(title.value, text.value));
/*     dispatch(createTask("First Task", "My first task."));
    dispatch(createTask("Second Task", "My second task.")); */
    title.value = "";
    text.value = "";
  };

  return (
    <form
      className="rounded shadow p-3 mb-5 col-8 col-lg-8 mx-auto mt-2"
      onSubmit={addTask}
    >
      <input
        className="form-control form-lg-control mb-2"
        type="text"
        placeholder="Title"
        //ref={title}
        id="title"
        name="title"
        autoFocus
        required
      />
      <input
        className="form-control form-lg-control mb-2"
        type="text"
        placeholder="Text"
        //ref={text}
        id="text"
        name="text"
        required
      />

      <button type="submit" className="btn btn-success btn-lg-success">
        {" "}
        ADD NEW TASK{" "}
      </button>
    </form>
  );
};

export default TaskForm;
