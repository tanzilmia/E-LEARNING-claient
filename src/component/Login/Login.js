import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
const Login = () => {
  return (
    <div>
      <div className="from_box">
        <h2> Login Now</h2>
        <form>
          <div className="form_control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form_control">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          <small>New To E-Learning ?</small>{" "}
          <Link to="/register">Create New Account</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
