import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'
import BannerItem from './BannerItem';

const Banner = () => {
  const bannerData =[
    {
      img : img1,
      id : 1,
      prv : 6,
      next : 2
    },
    {
      img : img2,
      id : 2,
      prv : 1,
      next : 3
    },
    {
      img : img3,
      id : 3,
      prv : 2,
      next : 4
    },
    {
      img : img4,
      id : 4,
      prv :3,
      next : 5
    },
    {
      img : img5,
      id : 5,
      prv : 4,
      next : 6
    },
    {
      img : img6,
      id : 6,
      prv : 5,
      next : 1
    },
  ]
  return (
    <div className="carousel w-full mt-12">
      {
        bannerData.map(slide => <BannerItem
          key={slide.id}
          slide={slide}
        ></BannerItem>)
      }
      {/* <div id="slide2" className="carousel-item relative w-full">
        <img alt='' src={img2} className="w-full" />
        <div className="absolute flex flex-end transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;