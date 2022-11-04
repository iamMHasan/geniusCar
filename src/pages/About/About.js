import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative h-[
557px]'>
                    <img alt='' src={person} className="rounded-lg shadow-2xl h-[
557px] " />
                    <img alt='' src={parts} className=" border-8 border-white rounded-lg shadow-2xl h-[332px] w-[327px] absolute left-[300px] top-1/3" />
                </div>
                <div className='w-1/2 p-4 ml-4'>
                    <h1 className='text-[#FF3811] font-bold'> About Us</h1>
                    <h1 className="text-5xl font-bold leading-tight">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-3">Tthe majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;