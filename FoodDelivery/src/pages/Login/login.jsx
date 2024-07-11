import React, { useState, useContext, useEffect } from 'react';
import styles from './login.module.css'; // Import the CSS module
import { UserContext } from '../../Components/UserContext';
import { useNavigate } from "react-router-dom";
const Login = ({isLoggedIn}) => {
  let password= '';
  const setPassword=(np)=>{
    password=np;
  }
  const {setUsername}=useContext(UserContext)
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target.elements.username.value)
    console.log("Username:"+ e.target.elements.username.value)
    console.log("Pass:"+password)
    // LOGIC HERE
    // LOGIC HERE
    navigate("/home")
    // LOGIC HERE
    // LOGIC HERE
   
  };
  useEffect(()=>{
    if(isLoggedIn){
      console.log("useeffect is true")
      navigate("/home");
    }
  },[])
  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>Username</label>
          <input
            type="text"
            id="username"
            className={styles.input}
            name='user'
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
