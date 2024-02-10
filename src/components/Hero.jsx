import React from 'react'
import img1 from "../assets/muscle1.png"
import img2 from "../assets/style.png"
import icon1 from "../assets/play.png"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import {Autoplay, Scrollbar } from 'swiper/modules';


const Hero = () => {
  return (
    <>

     <Swiper
        scrollbar={{
          hide: true,
        }}

        autoplay= {{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay,Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="container-fluid Hero">
        <div className="container gx-0">
            <div className='row gx-0'>
                <div className='col-md-6'>
                    <div className='Hero_col1'>
                        <h1>Get <span>Healthy</span> Body With the <span>Perfect</span> Exercises</h1>
                        <p>We are always there to help you to make a healthy body and mind through the power of fitness</p>
                        <div className="hero_btns">
                            <button className='btn1 btn0'>Get Started</button>
                            <button className='play_btn'>
                                <img src={icon1} alt="" />
                                Watch Video</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='Hero_col2'>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container-fluid Hero Hero1">
        <div className="container gx-0">
            <div className='row gx-0 align-items-center' >
                <div className='col-md-6'>
                    <div className='Hero_col1'>
                        <h1>Get <span>Healthy</span> Body With the <span>Perfect</span> Exercises</h1>
                        <p>We are always there to help you to make a healthy body and mind through the power of fitness</p>
                        <div className="hero_btns">
                            <button className='btn1 btn0'>Get Started</button>
                            <button className='play_btn'>
                                <img src={icon1} alt="" />
                                Watch Video</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='Hero_col2'>
                      <img src={img1} alt="" className='img-fluid dumble-img'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container-fluid Hero Hero2">
        <div className="container gx-0">
            <div className='row gx-0 align-items-center'>
                <div className='col-md-6  order-md-2'>
                    <div className='Hero_col1'>
                        <h1>Get <span>Healthy</span> Body With the <span>Perfect</span> Exercises</h1>
                        <p>We are always there to help you to make a healthy body and mind through the power of fitness</p>
                        <div className="hero_btns">
                            <button className='btn1 btn0'>Get Started</button>
                            <button className='play_btn'>
                                <img src={icon1} alt="" />
                                Watch Video</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6  order-md-1'>
                    <div className='Hero2_col2'>
                      <img src={img2} alt="" className='img-fluid muscle-img' />
                    </div>
                </div>
            </div>
        </div>
    </div>
        </SwiperSlide>
      </Swiper>
    

    {/* Another Hero */}
    
    {/* Another one ok */}
    
    </>
  )
}

export default Hero