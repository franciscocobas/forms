import React from 'react';
import { useForm } from 'react-hook-form';

import './Login.scss';

export default () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {

  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
            placeholder="Password"
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}