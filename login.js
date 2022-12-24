import React, { useState } from 'react';
function login() {
    const [username,setUsername]=useState("")
    cosnt [password,setPassword]=useState("")
    const login =()=>{};
  return (
    <div classname="login">
    <label>log in</label>
    <input placeholder="Username" 
    type="username"
    onChange={(event)=>{
    setUsername(event.target.value);
    }}/>
    <input placeholder="Password" type="password" />
    <button onClick={login}>log In</button>

  </div>
  )
}

export default login;