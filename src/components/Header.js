import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth.js';

export default props => {
  return (
    <div className="ui pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};
