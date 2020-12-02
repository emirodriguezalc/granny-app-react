import React, { useState } from 'react';
import './styles.css';
import register from '../../icons/register.svg'

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
  <section className="register-section">
   <h1 className="register-title">Register a new account!</h1>
   <img src={register} alt="register" className="register-icon" />
   <section className="form-section">
    <form onSubmit={submitHandler}>
     <input className="register-input" value={email} placeholder="Insert email" onChange={e => setEmail(e.target.value)} />
     <input className="register-input" value={name} placeholder="Insert name" onChange={e => setName(e.target.value)} />
     <input className="register-input" value={password} onChange={e => setPassword(e.target.value)} placeholder="Insert password" />
     <button className="register-button" type="submit">Submit and register</button>
    </form>
   </section>
  </section>
 )
}

export default Login;
