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
      <table className="ui celled padded table">
        <thead>
          <tr>
            <th className="single line">Course</th>
            <th>Grade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderCourseList()}</tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default CourseList;
