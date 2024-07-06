import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const { login } = useAuth();

  const onSubmit = data => {
    login(data).catch(error => {
      console.log(error);
    });
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '500px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Username</label>
          <input name="username" ref={register({ required: true })} style={{ width: '100%' }} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password</label>
          <input name="password" type="password" ref={register({ required: true })} style={{ width: '100%' }} />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit" style={{ padding: '0.5rem', background: 'blue', color: 'white' }}>Login</button>
      </form>
    </div>
  );
}
