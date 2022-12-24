import React,{useState} from 'react';

function signin() {
  const[user,setUser] = useState(null)
  const signin=() =>{

  };
  return (
    <div classname="signin">
      <label>Sign in</label>
      
      <button onClick={signin}>Sign In</button>

    </div>
  );
}

export default signin;