import React,{useState} from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { mycontext } from "../../contextApi/UserContext";
import './Login.css'
const Login = () => {
  const [error, seterror] = useState(null)
const {logIn} = useContext(mycontext)
const handelLogin = (e) =>{
  e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value


        // sing in

        logIn(email,password)
        .then(result => {
          const user = result.user
          console.log(user)
        })
        .catch(error => seterror(error.message))


}

  return (
    <div>
      <div className="from_box">
        <h2> Login Now</h2>
        <form onSubmit={handelLogin}>
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
          <p> {error} </p>
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
