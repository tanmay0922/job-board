import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    axios.post('http://127.0.0.1:8000/api/auth/registration/', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '500px' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Username</label>
          <input name="username" ref={register({ required: true })} style={{ width: '100%' }} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password</label>
          <input name="password1" type="password" ref={register({ required: true })} style={{ width: '100%' }} />
          {errors.password1 && <span>This field is required</span>}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Confirm Password</label>
          <input name="password2" type="password" ref={register({ required: true })} style={{ width: '100%' }} />
          {errors.password2 && <span>This field is required</span>}
        </div>
        <button type="submit" style={{ padding: '0.5rem', background: 'blue', color: 'white' }}>Register</button>
      </form>
    </div>
  );
}
