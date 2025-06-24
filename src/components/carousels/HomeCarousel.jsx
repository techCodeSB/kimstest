"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HomeCarousel = () => {
    return (
        <>
            <section className="d-lg-block d-none">
                <div className="container-wrapper">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className="">
                                <img src="img/banner1.jpg" className="img-fluid" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="img/banner1.jpg" className="img-fluid" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="d-lg-none d-block">
                <div className="container-wrapper">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className="item">
                                <img src="img/mobile-banner.jpg" className="img-fluid" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="img/mobile-banner.jpg" className="img-fluid" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default HomeCarousel