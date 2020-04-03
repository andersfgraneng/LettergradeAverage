import React from 'react';

import Course from './Course';
import AddCourseCard from './AddCourseCard';

const CourseList = () => {
  return (
    <div className="eight wide column">
      <Course />
      <Course />
      <AddCourseCard />
    </div>
  );
};

export default CourseList;
