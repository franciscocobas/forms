import React from 'react';
import { useForm } from 'react-hook-form';

import './Contact.scss';

export default function Contact() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="contact-container">
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
            ref={register({ required: true })}
            placeholder="password"
            type="password"
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}