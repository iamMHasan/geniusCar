import React from 'react';
import img from '../../assets/images/login/login.svg'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Signup = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)

    const handleSignUp = (e)=>{
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        const name = form.name.value 

        createUser(email, password)
        .then(result =>{
            const user = result.user 
            console.log(user);
            toast.success('crete user successfull')
        })
        .catch(err => setError(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex items-center ">
                <img src={img} className='w-[460px] h-[502px]' alt="" />
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 ml-8">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {error?.message}
                            {/* <input className="btn btn-primary" type="button" value="Login" /> */}
                            <button className="btn btn-primary">sign up</button>
                        </div>
                    </form>
                    <p className='text-center p-5'>Already have an account? <Link to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;