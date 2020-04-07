import React from 'react';

import GoogleLoginButton from './GoogleLoginButton';

const Front = () => {
  return (
    <div className="ui inverted vertical masthead center aligned segment">
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu">
          <GoogleLoginButton />
        </div>
      </div>
      <div className="ui text container">
        <h1 className="ui inverted header">Grade calculator</h1>
        <h2>Fill in your grades to see your average</h2>
      </div>
    </div>
  );
};

export default Front;
