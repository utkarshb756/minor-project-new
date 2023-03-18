import React from 'react';
import "./Login.css";
import background from "../../images/background.jpeg";
import loginlogo from "../../images/logo2.png";




function Login() {
  return (
    <div>
   
      <div className="container">
        <div className="wrapper">
          <div className="left-section">
         
            <form className="login" action="" method="post">
            <div className="loginLogoDiv">
            <img  className="loginlogo" src={loginlogo}/>
            <h1 className="skoolForce">SkoolForce</h1>
            </div>
              <input type="text" name="username" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
              <div className="usertype">
                <h4 className="userTypeHead">Select User Type:-</h4>
                <select name="user-type" defaultValue="">
                  <option value="">Select User Type</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="Admin">Admin</option>
                  <option value="Parent">Parent</option>
                </select>
              </div>
              <button type="submit" className="signin">Sign In</button>
            
            </form>
          </div>
          <div><img className="bg" src={background} alt="School building" /></div>
        </div>
      </div>
    </div>
  );
}

export default Login;