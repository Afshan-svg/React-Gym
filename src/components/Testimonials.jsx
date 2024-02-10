import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";

import img1 from "../assets/test1.jpg"

const Testimonials = () => {
  return (
    <>
      <div className="container-fluid testimonial">
        <div className="container">
          <div className="row gx-0">
            <div className="col-md-7">
              <div className="testimonial_col1">
                <h1 className="main_heading">What our Happy Clients Say About Us</h1>
                <p>
                  I've been a member of Fitness within for about 6 months now and I absolutely love it! The trainers are so motivate and they really help to reach fitness goals.
                </p>
                <div className="test_images">
                  <img src={img1} alt="" className="img-fluid" />
                  <img src={img1} alt="" className="img-fluid" />
                  <img src={img1} alt="" className="img-fluid" />
                  <img src={img1} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="testimonial_col2">
                <Swiper
                  grabCursor={true}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="row test_main">
                        <div className="col-12">
                            <div className="row gx-0 align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={img1}alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-8">
                                    <h5>Farhan Riaz</h5>
                                    <p className="test_p1 pt-1">Happy Customer</p>   
                                </div>
                                
                            </div>
                            <div className="stars py-3">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                            <p className="test_p2">I have been coming to the gym for 3 years now and I've never been in better shape. The trainers are amazing and they always push me do my best. I'm so glad to this gym.</p>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row test_main">
                        <div className="col-12">
                            <div className="row gx-0 align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={img1}alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-8">
                                    <h5>Farhan Riaz</h5>
                                    <p className="test_p1 pt-1">Happy Customer</p>   
                                </div>
                                
                            </div>
                            <div className="stars py-3">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                            <p className="test_p2">I have been coming to the gym for 3 years now and I've never been in better shape. The trainers are amazing and they always push me do my best. I'm so glad to this gym.</p>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="row test_main">
                        <div className="col-12">
                            <div className="row gx-0 align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src={img1}alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-8">
                                    <h5>Farhan Riaz</h5>
                                    <p className="test_p1 pt-1">Happy Customer</p>   
                                </div>
                                
                            </div>
                            <div className="stars py-3">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                            <p className="test_p2">I have been coming to the gym for 3 years now and I've never been in better shape. The trainers are amazing and they always push me do my best. I'm so glad to this gym.</p>
                        </div>
                    </div>
                  </SwiperSlide>
        
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
