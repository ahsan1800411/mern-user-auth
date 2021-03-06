import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/login', {
      email,
      password,
    });

    setPassword('');
    setEmail('');
    console.log(data);
    localStorage.setItem('token', data.token);
    navigate('/');
  };

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <div className='mt-5'>
      <form onSubmit={loginUser}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
