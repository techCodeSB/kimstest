import React from 'react'

const FooterMobile = () => {
  return (
    <>
      <footer className="footer d-lg-none d-block">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 mb-4">
              <div className="footer-logo">
                <img src="img/logo.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="colum-link col-12 mb-2">
              <div className="footer-menu expanded link-part drop-down">
                <h3 className="accordian-footer position-relative d-lg-none">Hospitals</h3>
                <ul className="first-child">
                  <li><a href="#">Trivandrum</a></li>
                  <li><a href="#">Kollam</a></li>
                  <li><a href="#">Kottayam</a></li>
                  <li><a href="#">Perintalmanna</a></li>
                  <li><a href="#">Nagercoil</a></li>
                </ul>
              </div>
            </div>


            <div className="colum-link col-12 mb-2">
              <div className="footer-menu expanded link-part">
                <h3 className="accordian-footer position-relative d-lg-none">Medical Centers</h3>
                <ul className="first-child">
                  <li><a href="#">Kuravankonam</a></li>
                  <li><a href="#">Manacaud</a></li>
                  <li><a href="#">Attingal</a></li>
                  <li><a href="#">Pothencode</a></li>
                  <li><a href="#">Ayoor</a></li>
                  <li><a href="#">Vedivachankoil</a></li>
                  <li><a href="#">Vattiyoorkavu</a></li>
                </ul>
              </div>
            </div>

            <div className="colum-link col-12 mb-2">
              <div className="footer-menu expanded link-part">
                <h3 className="accordian-footer position-relative d-lg-none">Our Specialities</h3>
                <ul className="first-child">
                  <li><a href="#">Cardiology</a></li>
                  <li><a href="#">Orthopedics</a></li>
                  <li><a href="#">Neurosciences</a></li>
                  <li><a href="#">Gastrosciences</a></li>
                  <li><a href="#">Nephro-Urosciences</a></li>
                  <li><a href="#">BMT, Cancer Immunotherapy</a></li>
                  <li><a href="#">Obstetrics and Gynaecology</a></li>
                  <li><a href="#">Liver Transplant</a></li>
                  <li><a href="#">Heart and Lung Transplant</a></li>
                </ul>
              </div>
            </div>




            <div className="colum-link col-12 mb-4">
              <div className="footer-menu expanded link-part">
                <h3 className="accordian-footer position-relative d-lg-none">Important Link</h3>
                <ul className="first-child">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Find a Doctor</a></li>
                  <li><a href="#">Book an Appointment</a></li>
                  <li><a href="#">Book a Health Check-up</a></li>
                  <li><a href="#">Home Care Services</a></li>
                  <li><a href="#">Get Second Opinion</a></li>
                  <li><a href="#">Visa Medicals</a></li>
                  <li><a href="#">Telehealth</a></li>
                  <li><a href="#">Lab Reports</a></li>
                  <li><a href="#">TPA and Insurance</a></li>
                  <li><a href="#">Corporate</a></li>
                  <li><a href="#">CSR</a></li>
                  <li><a href="#">News and Media</a></li>
                  <li><a href="#">Rights and Responsibilities</a></li>
                  <li><a href="#">Health Tips</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Sitemap</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>

            <div className="col-12">
              <div className="location mt-lg-4">
                <div className="location-item">
                  <div className="address-item d-flex mb-3">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="ms-2">
                      <strong style={{"color": "#b71c2b"}}><u>INDIA</u></strong>
                      <p>
                        KIMSHEALTH, P.B.No.1, Anayara
                        P.O, Trivandrum – 695029,
                        Kerala, India</p>
                    </div>
                  </div>
                  <a href="mailto:feedback.tvm@kimshealth.org">
                    <div className="address-item d-flex align-items-center mb-3">
                      <i className="fa-regular fa-envelope mt-0 ms-0 fw-bold"></i>
                      <div className="ms-2">
                        <strong>feedback.tvm@kimshealth.org</strong>
                      </div>
                    </div>
                  </a>

                  <a href="tel:4712941400">
                    <div className="address-item d-flex align-items-center mb-3">
                      <i className="fa-solid fa-phone"></i>
                      <div className="ms-2">
                        <strong>+91 471 294 1400</strong>
                      </div>
                    </div>
                  </a>

                </div>
              </div>

              <div className="social-media-icon mt-4">
                <img src="img/facebook.png" className="img-fluid" alt="" />
                <img src="img/instagram.png" className="img-fluid" alt="" />
                <img src="img/linkedin.png" className="img-fluid" alt="" />
                <img src="img/youtube.png" className="img-fluid" alt="" />
              </div>

              <div className="newsletter mt-4">
                <h3>Newsletter</h3>
                <p>Exclusive Content. Delivered to Your Inbox</p>
                <div className="custom-from m-0">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      <form action="">
                        <div className="input-group p-0 my-lg-3 mt-2">

                          <input type="text" className="form-control border-0"
                            placeholder="Your email address" aria-label="Username"
                            aria-describedby="basic-addon1" />
                          <button className="input-group-text border-0" id="from-icon"><i
                            className="fa-regular fa-envelope"></i></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer >
    </>
  )
}

export default FooterMobile