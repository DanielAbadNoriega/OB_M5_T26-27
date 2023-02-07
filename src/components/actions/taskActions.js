export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const FILTER_TASK = "FILTER_TASK";

export const createTask = (title, text) => {
  return {
    type: CREATE_TASK,
    payload: {
      title,
      text,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: {
      id
    }
  }
}

export const filterTask = (filter) => {
  return {
    type: FILTER_TASK,
    payload: {
      filter,
    },
  };
};
