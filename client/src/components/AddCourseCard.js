import React from 'react';
import { useDispatch } from 'react-redux';

import { addCourse } from './../actions';

const AddCourseCard = onClickHandler => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div
        className="ui bottom attached button"
        onClick={() =>
          dispatch(
            addCourse({
              type: 'ADD_COURSE',
              payload: {
                courseName: 'EX100',
                grade: 'A'
              }
            })
          )
        }
      >
        <i className="add icon"></i>
        Add course
      </div>
    </div>
  );
};

export default AddCourseCard;
