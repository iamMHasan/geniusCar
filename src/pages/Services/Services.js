import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayServices from './DisplayServices';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-2xl font-semibold text-[#FF3811] py-5'>Our services</h2>
                <h1 className="text-3xl font-bold pb-5">Our Service Area</h1>
                <p>the majority have suffered alteration in <br /> some form, by injected humour, or randomised words which don't look even slightly believable</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
                {
                    services.map(service => <DisplayServices
                    key={service._id}
                    service={service}
                    ></DisplayServices>)
                }
            </div>
        </div>
    );
};

export default Services;