import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/Authprovider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { title, price, _id } = service

    const handleOrderSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered'
        const message = form.message.value
        const phone = form.phone.value

        const order = {
            service : _id,
            serviceName : title,
            customer : name,
            price,
            email,
            phone,
            message
        }

        fetch('http://localhost:5000/orders',{
            method : 'POST',
            headers : {
                 'content-type' : 'application/json'
            },
            body : JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                form.reset()
                toast.success('order placed successfully')
            }
            console.log(data);
        })
        .catch(err => console.log(err))
    }
    return (
        <form onSubmit={handleOrderSubmit} className='my-4' action="">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-20'>
                <input name='firstName' type="text" placeholder="first name" className="input input-bordered w-full"required />
                <input name='lastName' type="text" placeholder="last name" className="input input-bordered w-full" required/>
                <input name='phone' type="number" placeholder="phone" className="input input-bordered w-full" required />
                <input name='email' type="text" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
            </div>
            <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-3" placeholder="Bio"></textarea>
            <button className='btn w-full'>Submit</button>
        </form>
    );
};

export default CheckOut;