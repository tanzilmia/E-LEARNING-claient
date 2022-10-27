import React,{useState} from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { mycontext } from "../../contextApi/UserContext";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import './Login.css'
const Login = () => {
  const naviget = useNavigate()
  const [error, seterror] = useState(null)
const {logIn,googleSignin,gitHublogin,setuser} = useContext(mycontext)
const location = useLocation()
const from = location?.state?.from?.pathname || '/'

const handleGoogle = () =>{
  googleSignin()
  .then(result => {
    const user = result.user;
    setuser(user)
    naviget(from, {replace : true})
  })
  .catch(error =>{
    console.log(error);
  })
}

const handleGithub = () =>{
  gitHublogin()
  .then(result => {
    const user = result.user;
    setuser(user)
    naviget(from, {replace : true})
  })
  .catch(error =>{
    seterror(error.message);
  })
}

const handelLogin = (e) =>{
  e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        logIn(email,password)
        .then(result => {
          const user = result.user
          setuser(user)
          
          naviget(from, {replace : true})
        })
        .catch(error => {
          seterror(error.message)
          form.reset()
        })
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
          <p className="text-center mt-2 mb-0">Or</p>
          <div className="social_logo">
             <FcGoogle onClick={handleGoogle} className="log_icon" /> 
             <FaGithub onClick={handleGithub} className="log_icon" /> 
          </div>
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
