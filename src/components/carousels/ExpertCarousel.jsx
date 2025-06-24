"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ExpertCarousel = () => {
    return (
        <>
            <section className="section expert-section">
                <div className="container">
                    <div className="row justify-content-between" data-aos="fade-right">
                        <div className="col-md-3 col-8">
                            <div className="main-heading">
                                <h2>Meet the Experts</h2>
                            </div>
                        </div>
                        <div className="col-md-2  col-4">
                            <div className="over-all-btn text-end">
                                <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                                    alt="" /></span></a>
                            </div>
                        </div>
                    </div>
                    <div className='carousel-wrapper relative'>
                        <div className="custom-swiper-button-prev">
                            <img src="/img/left-arrow.svg" alt="Prev" />
                        </div>
                        <div className="custom-swiper-button-next">
                            <img src="/img/slider-right-arrow.svg" alt="Next" />
                        </div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={20}
                            loop={true}
                            navigation={{
                                nextEl: ".custom-swiper-button-next",
                                prevEl: ".custom-swiper-button-prev",
                            }}
                            modules={[Navigation]}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                },
                                600: {
                                    slidesPerView: 2,
                                },
                                1000: {
                                    slidesPerView: 4
                                }
                            }}
                        >

                            {
                                Array.from({ length: 5 }).map((_, index) => (
                                    <SwiperSlide>
                                        <ExpertCarouselItem key={index} />
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}


const ExpertCarouselItem = ({ img, author, title, disease, slug }) => {
    return (
        <div className="expert-card" data-aos="fade-right">
            <div className="card border-0 p-lg-4 p-0">
                <div className="card-top">
                    <img src="/img/expert1.png" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                    <h4>Dr. Ajith R</h4>
                    <p>Sr Consultant and Coordinator</p>
                    <h5>Neurosurgery</h5>
                    <div className="from-btn">
                        <a href="#" className="btn">Appointment</a>
                    </div>
                </div>
            </div>
            <div className="main-btn  text-lg-center text-start ms-lg-0 ms-2 mt-2">
                <a href="#">View Profile</a>
            </div>
        </div>
    )
}


export default ExpertCarousel;

