import React,{useState} from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mycontext } from '../../contextApi/UserContext';
import {toast} from 'react-hot-toast'

const Register = () => {
    const {registration,getNameAndPhoto,setuser} = useContext(mycontext)
    const [error, seterror] = useState(null)
    const naviget = useNavigate()
    const handelRegister = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photoURL = form.photoURL.value
        const password = form.password.value


        registration(email,password)
        .then(result => {
            const user = result.user
            setuser(user);
            updatemyProfile(name,photoURL)
            toast.success('Successfully login!')
            naviget('/')
        })
        .catch((error) =>{
            toast.error(`${error.message}`)
            form.reset()
        })
        console.log(name,email,photoURL,password);
    }


    const updatemyProfile = (name,photoURL) =>{
        const profile = {
            displayName : name,
            photoURL : photoURL
        }
        getNameAndPhoto(profile)
        .then(() => {})
        .catch(error => seterror(error.message))

    }

    return (
        <div>
             <div className='from_box'>
            <h2> Register Now</h2>
            <form onSubmit={handelRegister}>
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
                <p> {error} </p>
                <button type='submit'>Register</button>
            </form>
            <p><small>Already Have an Account ?</small> <Link to ='/login'> Login </Link> </p>
        </div>
        </div>
    );
};

export default Register;