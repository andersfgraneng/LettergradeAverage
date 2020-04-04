import React from 'react';

const Course = ({ courseName, grade }) => {
  return (
    <div className="item">
      <div className="ui right floated content">
        <button className="ui icon button">
          <i className="trash alternate outline icon" />
        </button>
      </div>
      <div className="content">
        <div className="ui transparent input">
          <input type="text" placeholder={courseName} />
        </div>
        <div className="ui input">
          <input type="text" placeholder={grade} />
        </div>
      </div>
    </div>
  );
};

export default Course;
