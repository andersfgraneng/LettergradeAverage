import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Course from './Course';
import AddCourseCard from './AddCourseCard';
import { addCourse } from './../actions';

const CourseList = () => {
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  const onClickHandler = () => {};

  const renderCourseList = () => {
    console.log(courses);
    const renderedComponents = courses.map(({ courseName, grade }) => (
      <Course key={courseName} courseName={courseName} grade={grade} />
    ));
    return [...renderedComponents, <AddCourseCard />];
  };

  return (
    <div className="eight wide column">
      <div class="ui middle aligned divided list">{renderCourseList()}</div>
    </div>
  );
};

export default CourseList;
