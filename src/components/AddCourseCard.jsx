import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addCourse } from '../actions';

const AddCourseCard = (onClickHandler) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  const [newCourseName, setNewCourseName] = useState('');
  const [newGrade, setNewGrade] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const checkCourseName = (string) => {
    setNewCourseName(string);
    if (courses.filter((course) => course.courseName === string).length > 0) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  };

  return (
    <tr>
      <td>
        <div className="ui transparent input">
          <input
            type="text"
            value={newCourseName}
            placeholder="Course name"
            onChange={(event) => {
              checkCourseName(event.target.value);
            }}
          />
        </div>
      </td>
      <td>
        <div className="ui input">
          <input
            type="text"
            value={newGrade}
            maxLength="1"
            size="1"
            onChange={(event) => {
              setNewGrade(event.target.value);
            }}
          />
        </div>
      </td>
      <td>
        <div className="ui right floated content">
          <button
            className="ui blue icon button"
            disabled={disableButton}
            onClick={() =>
              dispatch(
                addCourse({
                  courseName: newCourseName,
                  grade: newGrade,
                })
              )
            }
          >
            <i className="add icon"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AddCourseCard;
