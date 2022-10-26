import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div>
             <div className='from_box'>
            <h2> Register Now</h2>
            <form>
                <div className="form_control">
                    <label htmlFor="email">Name</label>
                    <input type="text" name="name" placeholder='Your Name' required />
                </div>
                <div className="form_control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Your Email' required />
                </div>
                <div className="form_control">
                    <label htmlFor="email">photoURL</label>
                    <input type="text" name="photoURL" placeholder='Your Email' required />
                </div>
                <div className="form_control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder='Your Password' required />
                </div>
                <button type='submit'>Register</button>
            </form>
            <p><small>Already Have an Account ?</small> <Link to ='/login'> Login </Link> </p>
        </div>
        </div>
    );
};

export default Register;