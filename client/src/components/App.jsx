import React from 'react';

import CourseList from './CourseList';
import Preview from './Preview';

const App = () => {
  return (
    <div className="ui">
      <br />
      <div className="ui container grid">
        <CourseList />
        <Preview />
      </div>
    </div>
  );
};

export default App;
