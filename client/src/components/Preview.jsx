import React from 'react';
import { useSelector } from 'react-redux';

const Preview = () => {
  const courses = useSelector((state) => state.courses);

  const determineValue = (string) => {
    switch (string.toUpperCase()) {
      case 'A':
        return 5;
      case 'B':
        return 4;
      case 'C':
        return 3;
      case 'D':
        return 2;
      case 'E':
        return 1;
      default:
        return null;
    }
  };

  const calculateAverage = () => {
    let sum = 0;
    let divider = 0;
    courses.forEach((course) => {
      const value = determineValue(course.grade);
      if (value !== null) {
        sum += value;
        divider++;
      }
    });
    return sum / divider;
  };

  const printCourses = () => {
    return courses.map((course) => {
      return (
        <div>
          <div>{course.courseName}</div>
          <div>{course.grade}</div>
        </div>
      );
    });
  };

  return (
    <div className="eight wide column">
      <div>{printCourses()}</div>
      <div>Average grade: {calculateAverage()}</div>
    </div>
  );
};

export default Preview;
