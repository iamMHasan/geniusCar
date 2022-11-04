import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({order,handleDelete,handleStatusUpdate}) => {
    const {serviceName, customer, price,phone, email,service, _id, status} = order
    const [serviceData, setserviceData] = useState({})

 

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setserviceData(data))
    },[service])

    return (
        <tr>
        <th>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
                </div>
                <div className="avatar">
                    <div className=" rounded w-24 h-24">
                        <img src={serviceData?.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{serviceName}</div>
                    <div className="text-sm opacity-50"></div>
                </div>
            </div>
        </td>
        <td>
        <div className="font-bold">{customer}</div>
          {email}
        </td>
        <td>$ {price}</td>
        <th>
            <button className="btn btn-ghost btn-xs">{phone}</button>
            <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs text-red-800">{status ? status : 'pending'}</button>
        </th>
    </tr>
    );
};

export default OrderRow;