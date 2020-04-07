import React from 'react';

const GoogleLoginButton = () => {
  return (
    <div className="ui right item">
      <button className="ui red google button">
        {' '}
        <i className="google icon" />
        Sign in with google
      </button>
    </div>
  );
};

export default GoogleLoginButton;
