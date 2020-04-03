import { combineReducers } from 'redux';

const coursesReducer = (
  courses = [
    { courseName: 'SMTH3000', grade: 'A' },
    { courseName: 'SMTH4000', grade: 'A' }
  ],
  action
) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return [...courses, action.payload];
    default:
      return courses;
  }
};

export default combineReducers({
  courses: coursesReducer
});
