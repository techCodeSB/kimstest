import BlogCarousel from "@/components/BlogCarousel";
import ExpertCarousel from "@/components/ExpertCarousel";
import HearFromDoctor from "@/components/HearFromDoctor";
import TestimonialSection from "@/components/TestimonialSection";
import dynamic from "next/dynamic";
import Link from "next/link";
const Header = dynamic(() => import('@/components/Header'), {
  // ssr: false,
});


const Page = () => {
  return (
    <>
      <Header />
      <div role="main" className="main">
        <section className="section details-page-before py-0">
          <div className="procedures-details-page-header">
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col-md-6 details-proceduce-banner-left-col">

                  <div className="hospital-banner-container">
                    <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                      <div className="row">
                        <div className="col-12 px-0">
                          <ul className="breadcrumb mb-0">
                            <li>
                              <Link href="/">Home</Link>
                            </li>
                            <li>
                              <Link href="/hospital">Our Hospital</Link>
                            </li>
                            <li className="active"> KIMSHEALTH Trivandrum </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="details-banner">
                      <div className="details-heading">
                        <div className="hospital-content">
                          <ul>
                            <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                            <li className="location-icon-custom"> KIMSHEALTH, P.B.No.1, Anayara P.O, Trivandrum – 695029, Kerala, India</li>
                            <li className="telephone-icon-custom"><a href="tel:04714711000"> Appointment Number- 0471 471 1000</a></li>
                            <li className="send-custom-icon"><a href="#"> Get Direction</a></li>
                          </ul>
                          <div className="d-flex align-items-center">
                            <img src="/img/google.png" alt="Google Logo" className="me-2" />
                            <div className="star-rating" data-rating="4.7">
                              <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                              <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                              <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                              <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                              <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                              4.5
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 details-proceduce-banner-right-col">
                  <div className="owl-carousel owl-theme hospital-details-slider">
                    <div className="item">
                      <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="item">
                      <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100" />
                    </div>

                    <div className="item">
                      <img src="/img/hospital-details-img1.jpg" alt="" className="img-fluid w-100" />
                    </div>
                  </div>
                </div>

                {/* <!-- <div className="col-md-6">
                  <img src="/img/details-banner.png" alt="" className="img-fluid w-100">
                </div> --> */}
              </div>
            </div>
          </div>

        </section>

        <section className="section hospital-details-overview-section">
          <div className="container">
            <div className="row">
              <div className="col-md-5 my-auto order-lg-1 order-2">
                <div className="details-right-col text-center">
                  <img src="/img/hospital-details-overview-img.jpg" alt="" className="img-fluid w-100" />
                  <h5>KIMSHEALTH Trivandrum</h5>
                  <p>An Integrated Healthcare Destination </p>
                  <div className="main-btn">
                    <a href="#">Watch Video <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 sub-heading order-lg-2 order-1 mb-lg-0 mb-3">
                <div className="main-heading">
                  <h2 className="mb-lg-1">KIMSHEALTH Trivandrum</h2>
                  <h4 className="mb-lg-3">Where Expertise Meets Care</h4>
                </div>

                <p>KIMSHEALTH Trivandrum, the flagship hospital of the KIMSHEALTH Group, is a premier quaternary care facility offering comprehensive medical services across all specialties. Established in 2002, it is accredited by NABH and ACHSI, reflecting its commitment to international healthcare standards. </p>
                <p>With over 650 beds, advanced ICUs, modern operating theatres, and a robust transplant program, it delivers high-quality, patient-centered care. Supported by renowned doctors and 23 academic programs, it is also a hub for medical education.</p>
                <p>The International Patient Relations Department ensures a smooth experience for global patients through visa support, language services, and personalized care. KIMSHEALTH stands for courtesy, compassion, and competence in every aspect of care.</p>

                <div className="details-counter-section">
                  <div className="row">
                    <div className="col-md-3 col-6 mb-lg-0 mb-3">
                      <div className="details-counter-box">
                        <h2><span className="counter">100</span> <span>+</span></h2>
                        <p>Beds Facility</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-lg-0 mb-3">
                      <div className="details-counter-box">
                        <h2><span className="counter">100</span> <span>+</span></h2>
                        <p>Doctors</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-lg-0 mb-3">
                      <div className="details-counter-box">
                        <h2><span className="counter">100</span> <span>+</span></h2>
                        <p>Specialities </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-6 mb-lg-0 mb-3">
                      <div className="details-counter-box">
                        <h2><span className="counter">100</span> <span>+</span></h2>
                        <p>Trained Staff</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>




        <div className="line-divider"> </div>
        <ExpertCarousel />


        <div className="line-divider"></div>
        <TestimonialSection />

        <div className="line-divider"></div>
        <HearFromDoctor />

        <div className="line-divider"></div>
        <BlogCarousel />


        <div className="line-divider"></div>

        <section className="section">
          <div className="container">
            <div className="row justify-content-between" data-aos="fade-up">
              <div className="col-md-6 col-8">
                <div className="main-heading">
                  <h2>Other Hospitals and Medical Centers </h2>
                </div>
              </div>
              <div className="col-md-2 col-4">
                <div className="over-all-btn text-end">
                  <a href="#">View All <span><img src="/img/slider-right-arrow.svg" className="img-fluid"
                    alt="" /></span></a>
                </div>
              </div>
            </div>

            <div className="owl-carousel owl-theme hospital-slider">
              <div className="custom-hospital-top-card">
                <div className="hospital-img">
                  <a href="#"><img src="/img/hospital4.jpg" alt="" className="img-fluid w-100" /></a>
                </div>
                <div className="hospital-content">
                  <ul>
                    <li className="hospital-icon-custom"> KIMSHEALTH Trivandrum </li>
                    <li className="location-icon-custom"> 1, Vinod Nagar Rd, Anayara,
                      Thiruvananthapuram, Kerala 695029</li>
                    <li className="telephone-icon-custom"> 0471 471 1000</li>
                  </ul>
                  <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{ borderBottom: "1px solid #fff" }}>
                    <div className="hospital-content mb-lg-0 mb-3 p-0">
                      <ul>
                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                      </ul>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="/img/google.png" alt="Google Logo" className="me-2" style={{ width: "auto" }} />
                      <div className="star-rating" data-rating="4.7">
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                        4.5
                      </div>
                    </div>
                  </div>

                  <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                    <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                    <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                  </div>
                </div>



              </div>



              <div className="custom-hospital-top-card">
                <div className="hospital-img">
                  <a href="#"><img src="/img/kollam.jpg" alt="" className="img-fluid w-100" /></a>
                </div>
                <div className="hospital-content">
                  <ul>
                    <li className="hospital-icon-custom"> KIMSHEALTH Kollam </li>
                    <li className="location-icon-custom"> Sithara Jn. Kottiyam P.O., Kollam
                      Kerala - 691 571</li>
                    <li className="telephone-icon-custom"> 0471 471 1000</li>
                  </ul>
                  <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{ borderBottom: "1px solid #fff" }}>
                    <div className="hospital-content mb-lg-0 mb-3 p-0">
                      <ul>
                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                      </ul>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="/img/google.png" alt="Google Logo" className="me-2" style={{ width: "auto" }} />
                      <div className="star-rating" data-rating="4.7">
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                        4.5
                      </div>
                    </div>
                  </div>

                  <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                    <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                    <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                  </div>
                </div>



              </div>
              <div className="custom-hospital-top-card">
                <div className="hospital-img">
                  <a href="#"><img src="/img/hospital3.jpg" alt="" className="img-fluid w-100" /></a>
                </div>
                <div className="hospital-content">
                  <ul>
                    <li className="hospital-icon-custom"> KIMSHEALTH Kottayam </li>
                    <li className="location-icon-custom"> Thoothutty Junction, Kudamaloor P.O,
                      Kottayam – 686017, Kerala, India</li>
                    <li className="telephone-icon-custom"> 0471 471 1000</li>
                  </ul>
                  <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{ borderBottom: "1px solid #fff" }}>
                    <div className="hospital-content mb-lg-0 mb-3 p-0">
                      <ul>
                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                      </ul>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="/img/google.png" alt="Google Logo" className="me-2" style={{ width: "auto" }} />
                      <div className="star-rating" data-rating="4.7">
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                        4.5
                      </div>
                    </div>
                  </div>

                  <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                    <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                    <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                  </div>
                </div>



              </div>


              <div className="custom-hospital-top-card">
                <div className="hospital-img">
                  <a href="#"><img src="/img/hospital3.jpg" alt="" className="img-fluid w-100" /></a>
                </div>
                <div className="hospital-content">
                  <ul>
                    <li className="hospital-icon-custom"> KIMSHEALTH Kottayam </li>
                    <li className="location-icon-custom"> Thoothutty Junction, Kudamaloor P.O,
                      Kottayam – 686017, Kerala, India</li>
                    <li className="telephone-icon-custom"> 0471 471 1000</li>
                  </ul>
                  <div className="d-lg-flex d-block align-items-center justify-content-between py-2 " style={{ borderBottom: "1px solid #fff" }}>
                    <div className="hospital-content mb-lg-0 mb-3 p-0">
                      <ul>
                        <li className="mb-0 send-custom-icon"> Get Direction</li>
                      </ul>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="/img/google.png" alt="Google Logo" className="me-2" style={{ width: "auto" }} />
                      <div className="star-rating" data-rating="4.7">
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star ms-1" style={{ color: "#ffc107" }}></i>
                        <i className="fa fa-solid fa-star-half ms-1" style={{ color: "#ffc107" }}></i>
                        4.5
                      </div>
                    </div>
                  </div>

                  <div className="d-lg-flex d-block align-items-center justify-content-between pt-3">
                    <a href="#" className="btn mb-lg-0 mb-2 hospital-primarybtn">View Details</a>
                    <a href="#" className="btn mb-lg-0 mb-3 hospital-secondarybtn">Appointment</a>
                  </div>
                </div>



              </div>


            </div>

          </div>
        </section>

      </div>
    </>
  )
}

export default Page;