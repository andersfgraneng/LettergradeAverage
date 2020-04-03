import React from 'react';
import { useSelector } from 'react-redux';

const Preview = () => {
  const courses = useSelector(state => state.courses);

  const printCourses = () => {
    return courses.map(course => {
      return (
        <div>
          <div>{course.courseName}</div>
          <div>{course.grade}</div>
        </div>
      );
    });
  };

  return <div className="eight wide column">{printCourses()}</div>;
};

export default Preview;
