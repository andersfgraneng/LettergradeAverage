const addCourse = course => {
  return {
    type: 'ADD_COURSE',
    payload: course
  };
};

const deleteCourse = course => {
  return {
    type: 'DELETE_COURSE',
    payload: course
  };
};

const updateCourse = course => {
  return {
    type: 'UPDATE_COURSE',
    payload: course
  };
};

export { addCourse, deleteCourse, updateCourse };
