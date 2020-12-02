import React, { useState } from 'react';
import Input from '../../components/input'

const Login = () => {
 const [password, setPassword] = useState("");
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");

 const submitHandler = (e) => {
  e.preventDefault();
  const requestOptions = {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ email: email, password: password, name: name })
  };
  fetch('http://localhost:3002/api/user/register', requestOptions)
 };
 return (
  <form onSubmit={submitHandler}>
   <input id="email" value={email} placeholder="Insert email" onChange={e => setEmail(e.target.value)} />
   <input id="name" value={name} placeholder="Insert name" onChange={e => setName(e.target.value)} />
   <input id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Insert password" />
   <button type="submit">submit</button>
  </form>
 )
}

export default Login;
