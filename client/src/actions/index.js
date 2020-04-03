const addCourse = course => {
  return {
    type: 'ADD_COURSE',
    payload: course
  };
};

export { addCourse };
