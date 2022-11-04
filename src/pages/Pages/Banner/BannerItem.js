import React from 'react';

const BannerItem = ({slide}) => {
    console.log(slide);
    const { img, id, prv, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carouser-img'>
                <img alt=''  src={img} className="w-full rounded" />
            </div>
            <div className="absolute flex flex-end transform -translate-y-1/2 top-1/3 left-6">
                <h1 className='text-5xl font-bold text-white leading-tight '>
                    Affordable 
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex flex-end transform w-1/2 -translate-y-1/2 left-6 top-1/2">
                <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex flex-end transform w-1/2 -translate-y-1/2 left-6 top-2/3">
                <button className="btn btn-warning">Discover More</button>
                <button className="btn btn-outline btn-primary">Latest Project</button>
            </div>
            <div className="absolute flex flex-end transform -translate-y-1/2  right-5 bottom-0">
                <a href={`#slide${prv}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;