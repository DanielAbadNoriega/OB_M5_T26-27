import React from "react";

const FilterButtons = ({ filterTasks }) => {
  const showAll = () => {
    filterTasks("ALL");
    //dispatch({ type: "ALL" });
  };
  const showCompleted = () => {
    filterTasks("COMPLETED");
    //dispatch({ type: "COMPLETED" });
  };

  const showUncompleted = () => {
    filterTasks("UNCOMPLETED");
    //dispatch({ type: "UNCOMPLETED" });
  };
  return (
    <div className="container rounded shadow p-3 mb-5 col-8 col-lg-8 mx-auto mt-2">
      <button
        className="btn btn-primary ms-2 col-3 col-lg-3 p-2"
        onClick={showAll}
      >
        {" "}
        ALL{" "}
      </button>
      <button
        className="btn btn-success ms-2 col-3 col-lg-3 p-2"
        onClick={showCompleted}
      >
        {" "}
        COMPLETED{" "}
      </button>
      <button
        className="btn btn-danger ms-2 col-3 col-lg-3 p-2"
        onClick={showUncompleted}
      >
        {" "}
        UNCOMPLETED{" "}
      </button>
    </div>
  );
};

export default FilterButtons;
