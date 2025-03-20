'use client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Script from "next/script";
import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";


const Footer = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 1000,
      easing: 'ease',
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <>
      <FooterDesktop />
      <FooterMobile />

      <div className="midle-footer py-2">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-1 col-2">
              <img src="img/achs-logo.png" className="img-fluid w-100" alt="" />
            </div>
            <div className="col-md-1 col-2">
              <img src="img/nabh-logo.png" className="img-fluid" alt="" style={{ "width": "55px" }} />
            </div>
            <div className="col-md-1 col-2">
              <img src="img/unknown-logo.png" className="img-fluid" alt="" style={{ "width": "55px" }} />
            </div>
            <div className="col-md-1 col-2">
              <img src="img/epihc.png" className="img-fluid w-100" alt="" />
            </div>
            <div className="col-md-1 col-2">
              <img src="img/unknown-logo2.png" className="img-fluid" alt="" style={{ "width": "55px" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer mb-lg-0 mb-5">
        <div className="container">
          <div className="d-lg-flex d-block align-items-center justify-content-between">
            <p>Copyright © 2024. KIMSHEALTH. All Rights Reserved</p>
            <p>Designed & Developed by Healthcare Martech</p>
          </div>
        </div>
      </div>

      <div className="fixed-lg-footer d-none d-lg-block">
        <a href="#">EMERGENCY</a>
      </div>

      <button id="scrolltoButton" className=""></button>

      <div className="fixed-footer d-block d-lg-none">
        <div className="row">
          <div className="col-3 fixed-footer-img">
            <a href="#"><img src="img/calendar.png" className="img-fluid" alt="" />
              <p>Appointment</p></a>

          </div>
          <div className="col-3 fixed-footer-img">
            <a href="#"><img src="img/doctors.png" className="img-fluid" alt="" />
              <p>Doctors</p></a>
          </div>
          <div className="col-3 fixed-footer-img">
            <a href="#"><img src="img/ambulance.png" className="img-fluid" alt="" />
              <p>Ambulance</p></a>
          </div>

          <div className="col-3 fixed-footer-img">
            <a href="#"><img src="img/telephone.png" className="img-fluid" alt="" />
              <p>Call Us</p></a>
          </div>

        </div>
      </div>


      <Script async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></Script>
      <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></Script>
      <Script async src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script>
      <Script async src="https://unpkg.com/aos@next/dist/aos.js"></Script>
      <Script async src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></Script>
      {/* <!-- custom js --> */}
      <Script async src="js/custom.js"></Script>
    </>
  );
}

export default Footer;
