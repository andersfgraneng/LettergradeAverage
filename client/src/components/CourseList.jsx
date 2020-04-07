import React from 'react';
import { useSelector } from 'react-redux';

import Course from './Course';
import AddCourseCard from './AddCourseCard';

const CourseList = () => {
  const courses = useSelector((state) => state.courses);

  const renderCourseList = () => {
    console.log(courses);
    const renderedComponents = courses.map(({ courseName, grade }) => (
      <Course key={courseName} courseName={courseName} grade={grade} />
    ));
    return [...renderedComponents, <AddCourseCard />];
  };

  return (
    <div className="eight wide column">
      <div className="ui middle aligned divided list">{renderCourseList()}</div>
    </div>
  );
};

export default CourseList;
