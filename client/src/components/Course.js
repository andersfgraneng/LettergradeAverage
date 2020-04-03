import React, { useState } from 'react';

const Course = () => {
  const [buttonState, setButtonState] = useState(false);

  const buttoneHandler = () => {
    if (buttonState) {
      setButtonState(false);
      return <button text="Grade: " />;
    } else {
      setButtonState(true);
      return <button text="Approved: " />;
    }
  };

  return (
    <div className="item">
      <div>Course: SMTH3000</div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};

export default Course;
