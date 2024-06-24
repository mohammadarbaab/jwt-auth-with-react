import React, { useState } from "react";

function Login() {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const submitForm=()=>{
    console.log(email + " " + password)
  }
  return (
    <div>
      <form action="/action_page.php">
        <div className="form-group">
          <label >Email address:</label>
          <input type="email" className="form-control" id="email" onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label >Password:</label>
          <input type="password" className="form-control" id="pwd" onChange={e=>setPassword(e.target.value)} />
        </div>
        <button type="button" className="btn btn-default mt-4" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
