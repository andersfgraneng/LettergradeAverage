import React from 'react';

import CourseList from './CourseList';
import Preview from './Preview';

const App = () => {
  return (
    <div className="ui segment">
      <div>
        <h2>Grade calculator</h2>
      </div>
      <div className="ui container grid">
        <CourseList />
        <Preview />
      </div>
    </div>
  );
};

export default App;
