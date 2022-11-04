import React from 'react';
import img from '../../assets/images/login/login.svg'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [error, setError] = useState('')
    const {login} = useContext(AuthContext)
    const handleLogin = (e)=>{
        e.preventDefault()

        const form = e.target 
        const email = form.email.value 
        const password = form.password.value

        console.log(email,password);
        login(email, password)
        .then(result =>{
            const user = result.user 
            console.log(user);
            toast.success('login successfull')

            const currentUSer ={
                email : user?.email
            }

            fetch('http://localhost:5000/jwt',{
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(currentUSer)
            })
            .then(res => res.json())
            .then(data => {
              localStorage.setItem("geniusToken" , data.token)
              navigate(from, { replace: true });
            })
        })
        .catch(err =>{
            console.log(err);
            setError(err)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex items-center ">
                <img src={img} className='w-[460px] h-[502px]' alt="" />
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 ml-8">
                <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                            </label>
                        </div>
                        {error?.message}
                        <div className="form-control mt-6">
                           
                            {/* <input className="btn btn-primary" type="button" value="Login" /> */}
                            <button className="btn btn-primary">sign up</button>
                        </div>
                    </form>
                    <p className='text-center p-5'>New to genius car? <Link to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;