"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const WallFame = () => {
    return (
        <>
            <section className="section wallframe-section">
                <div className="container">
                    <div className="row justify-content-between mb-lg-5 mb-3" data-aos="fade-right">
                        <div className="col-md-3 col-8">
                            <div className="main-heading">
                                <h2>Wall of Fame</h2>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="over-all-btn text-end">
                                <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                    alt="" /></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        <div className="white-box"></div>
                    </div>
                    <div className='relative'>
                        <div className="custom-swiper-button-prev">
                            <img src="/img/left-arrow.svg" alt="Prev" />
                        </div>
                        <div className="custom-swiper-button-next">
                            <img src="/img/slider-right-arrow.svg" alt="Next" />
                        </div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={15}
                            loop={true}
                            navigation={{
                                nextEl: ".custom-swiper-button-next",
                                prevEl: ".custom-swiper-button-prev",
                            }}
                            modules={[Navigation]}
                        >
                            <SwiperSlide>
                                <FameItem />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FameItem />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}


const FameItem = ({ date, title, para1, para2, img }) => {
    return (
        <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                <div className="frame-left-col" data-aos="fade-right">

                    <img src="/img/frame-left-col.jpg" className="img-fluid w-100" alt="" />
                </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-6 my-auto">

                <div className="frame-right-col" data-aos="fade-left">
                    <h5>Date: 6th October 2021</h5>
                    <h2>Best Hospital- Obstetrics & Gynecology KIMSHEALTH Trivandrum </h2>
                    <p>KIMSHEALTH is proud to announce that we have been recognized as the Best Hospital -
                        Obstetrics & Gynaecology (OBGYN) - South at The Economic Times Healthcare Awards.
                    </p>
                    <p className="d-lg-block d-none">
                        We would like to thank our doctors and the entire staff for working tirelessly. Our
                        patients, for
                        believing in us.</p>
                </div>

            </div>
        </div>
    )
}


export default WallFame