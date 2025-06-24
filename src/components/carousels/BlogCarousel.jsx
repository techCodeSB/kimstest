"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const BlogCarousel = () => {
  return (
    <>
      <section className="section blog-section d-lg-block d-none">
        <div className="container">
          <div className="row justify-content-between" data-aos="fade-down">
            <div className="col-md-3 col-8">
              <div className="main-heading">
                <h2>Blogs </h2>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="over-all-btn text-end">
                <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          {/* Item start here */}
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
          >
            {
              Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <BlogCarouselItemDesktop />
                </SwiperSlide>

              ))
            }
          </Swiper>


          {/* </div> */}
        </div>
      </section>
      <section className="section blog-section d-lg-none d-block">
        <div className="container">
          <div className="row justify-content-between" data-aos="fade-up">
            <div className="col-md-3 col-8">
              <div className="main-heading">
                <h2>Blogs </h2>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="over-all-btn text-end">
                <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              {/* This is not a carousel only grid view  */}
              {
                Array.from({ length: 5 }).map((_, index) => (
                  <BlogGridView key={index} />
                ))
              }

            </div>
          </div>

          {/* <!-- <div className="owl-carousel owl-theme blog">
            <div className="card border-0">
              <div className="card-top">
                <img src="/img/blog1.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="card-content">
                <h4>Stapled Hemorrhoidectomy </h4>
                <p>Many individuals, at some point in thier lives, confront the Many individuals,</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <strong> By: KIMSHEALTH</strong>
                  </div>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-top">
                <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="card-content">
                <h4>In-Vitro Fertilization (IVF) </h4>
                <p>The journey towards parenthood isn't always straightforward towards parenthood </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <strong> By: KIMSHEALTH</strong>
                  </div>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-top">
                <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="card-content">
                <h4>High Cholesterol </h4>
                <p>Cholesterol is a type of fat, it is a
                  double-edged sword Cholesterol is a type of fat</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <strong> By: KIMSHEALTH</strong>
                  </div>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-top">
                <img src="/img/blog4.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="card-content">
                <h4>Skincare Routines </h4>
                <p>Having oily skin can be detrimental since that makes you prone to can be detrimental</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <strong> By: KIMSHEALTH</strong>
                  </div>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-top">
                <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="card-content">
                <h4>In-Vitro Fertilization (IVF) </h4>
                <p>The journey towards parenthood isn't always straightforward towards parenthood </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <strong> By: KIMSHEALTH</strong>
                  </div>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0">
              <div className="card-top">
                <img src="/img/blog3.jpg" className="img-fluid w-100" alt="" />
              </div>
              <div className="card-content">
                <h4>High Cholesterol </h4>
                <p>Cholesterol is a type of fat, it is a
                  double-edged sword Cholesterol is a type of fat</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <strong> By: KIMSHEALTH</strong>
                  </div>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div> --> */}
        </div>
      </section>
    </>
  )
}


const BlogCarouselItemDesktop = ({ hadding, content, author, link, img }) => {
  return (
    <div className="card border-0" data-aos="slide-down" data-aos-duration="1000">
      <div className="card-top">
        <img src={"/img/blog1.jpg"} className="img-fluid w-100" alt="" />
      </div>
      <div className="card-content">
        <h4>Stapled Hemorrhoidectomy </h4>
        <p>Many individuals, at some point in thier lives, confront the Many individuals,</p>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <strong> By: KIMSHEALTH</strong>
          </div>
          <div className="main-btn">
            <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
          </div>
        </div>
      </div>
    </div>
  )
}


const BlogGridView = ({ hadding, content, author, link, img }) => {
  return (
    <div className="blog-card" data-aos="fade-up">
      <div className="row">
        <div className="col-6 my-auto">
          <div className="testi-rightbox">
            <h3>In-Vitro Fertilization (IVF) </h3>
            <p>Many individuals, at some point in thier lives, confront the Many
              individuals,
            </p>

            <div className="d-block align-items-center justify-content-between">
              <div>
                <strong> By: Dr Aman Agarwal</strong>
              </div>
              <div className="main-btn mt-lg-0 mt-1">
                <a href="#">Read More <span><i
                  className="fa-solid fa-arrow-right"></i></span></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src="/img/blog2.jpg" className="img-fluid w-100" alt="" />
        </div>
      </div>
    </div>
  )
}

export default BlogCarousel;