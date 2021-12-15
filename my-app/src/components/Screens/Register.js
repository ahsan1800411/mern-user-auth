import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/api/register', {
      name,
      email,
      password,
    });
    setName('');
    setPassword('');
    setEmail('');
    console.log(data);
  };

  useEffect(() => {
    registerUser();
  }, []);

  return (
    <div className='mt-5'>
      <form onSubmit={registerUser}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Register;
