import React from 'react';
import {Link} from 'react-router-dom'

const DisplayServices = ({service}) => {
    const {title,img,price,_id} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-[#FF3811]">{title}</h2>
          <h1 className="text-bold text-2xl">Price ${price}</h1>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default DisplayServices;