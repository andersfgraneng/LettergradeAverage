import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateCourse, deleteCourse } from '../actions';

const Course = ({ courseName, grade }) => {
  const dispatch = useDispatch();
  const [newGrade, setNewGrade] = useState(grade);

  return (
    <tr>
      <td>{courseName}</td>
      <td>
        <div className="ui input">
          <input
            type="text"
            placeholder={newGrade}
            value={newGrade}
            maxLength="1"
            size="1"
            onChange={(event) => {
              setNewGrade(event.target.value);
              dispatch(updateCourse({ courseName, grade: event.target.value }));
            }}
          />
        </div>
      </td>
      <td>
        <div className="ui right floated content">
          <button
            className="ui red icon button"
            onClick={() => dispatch(deleteCourse({ courseName, grade }))}
          >
            <i className="trash alternate outline icon" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Course;
