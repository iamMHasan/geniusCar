import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/Authprovider';
import OrderRow from '../../OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders);
    const { user,logout } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers : {
                authorization : `bearer ${localStorage.getItem('geniusToken')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logout()
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email])


    const handleDelete = id =>{
        const agree = window.confirm(`are you sure to delete`)
        if(agree){
            fetch(`http://localhost:5000/orders/${id}`,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                const remaining = orders.filter(ord => ord._id !== id)
                setOrders(remaining)
                toast.dark('deleted')
            })
            .catch(err => console.log(err))
        }
    }

    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method : 'PATCH',
            headers : {
                'content-type' : 'application/json',
            },
            body : JSON.stringify({status : 'Approved'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = orders.filter(ord => ord._id !== id)
                const approving = orders.find(ord => ord._id === id)
                approving.status = 'Approved' 

                const newOrders = [...remaining, approving]
                setOrders(newOrders)
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='py-9'>
            <h2 className='text-2xl text-center'>you have {orders.length} orders to proceed</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full py-5">

                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        orders.map(order => <OrderRow
                        key={order._id}
                        handleDelete={handleDelete}
                        handleStatusUpdate={handleStatusUpdate}
                        order={order}
                        ></OrderRow>)
                       }
                     </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;