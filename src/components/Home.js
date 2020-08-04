import React from 'react';

import './Home.scss';
import { useSelector } from 'react-redux';

export default () => {
  const { user } = useSelector(({ loginReducer }) => {
    return { user: loginReducer.user }
  });

  return (
    <div className="home-container">
      <p>{user.email}</p>
    </div>
  )
}