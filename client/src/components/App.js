import React from 'react';

import CourseList from 'components/CourseList';
import Preview from 'components/Preview';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <CourseList />
        <Preview />
      </div>
    </div>
  );
};

export default App;
