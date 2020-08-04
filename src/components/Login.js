import React from 'react';
import { useForm } from 'react-hook-form';

import ErrorMessage from './ErrorMessage';

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
        {errors.email && <ErrorMessage>Email field is required</ErrorMessage>}
        <div>
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
            placeholder="Password"
          />
        </div>
        {errors.password && <ErrorMessage>Password field is required</ErrorMessage>}
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}