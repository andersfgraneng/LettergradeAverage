import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateCourse, deleteCourse } from '../actions';

const Course = ({ courseName, grade }) => {
  const dispatch = useDispatch();
  const [newGrade, setNewGrade] = useState(grade);

  return (
    <div className="item">
      <div className="ui right floated content">
        <button
          className="ui red icon button"
          onClick={() => dispatch(deleteCourse({ courseName, grade }))}
        >
          <i className="trash alternate outline icon" />
        </button>
      </div>
      <div className="content">
        <div>
          Course name:
          <div className="ui transparent input">
            <input type="text" value={courseName} readOnly="true" />
          </div>
        </div>
        <div>
          Grade:
          <div className="ui input">
            <input
              type="text"
              placeholder={newGrade}
              value={newGrade}
              onChange={event => {
                setNewGrade(event.target.value);
                dispatch(
                  updateCourse({ courseName, grade: event.target.value })
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
