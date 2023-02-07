import React from "react";

const TaskForm = ({ addNewTask }) => {

  const addTask = (e) => {
    e.preventDefault();
    const { title, text } = e.target;
    addNewTask(title.value, text.value);
  };

  return (
    <form className="col-8 col-lg-8 mx-auto mt-2" onSubmit={addTask}>
      <input
        className="form-control form-lg-control mb-2"
        type="text"
        placeholder="Title"
        //ref={title}
        id="title"
        name="title"
      />
      <input
        className="form-control form-lg-control mb-2"
        type="text"
        placeholder="Text"
        //ref={text}
        id="text"
        name="text"
      />

      <button type="submit" className="btn btn-success btn-lg-success">
        {" "}
        ADD NEW TASK{" "}
      </button>
    </form>
  );
};

export default TaskForm;
