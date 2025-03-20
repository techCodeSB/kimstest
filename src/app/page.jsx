

export default function Home() {
 
  return (
    <div role="main" className="main">
      <section className="d-lg-block d-none">
        <div className="container-wrapper">
          <div className="owl-carousel owl-theme homepage-slider">
            <div className="item">
              <img src="img/banner1.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="d-lg-none d-block">
        <div className="container-wrapper">
          <div className="owl-carousel owl-theme homepage-slider">
            <div className="item">
              <img src="img/mobile-banner.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= homepage end ========== --> */}

      <section className="section py-4 d-lg-block d-none">
        <div className="container">
          <div className="custom-from">
            <div className="row justify-content-between">

              <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                <div className="input-group mb-lg-0 mb-3">
                  <span className="input-group-text" id="from-icon"><i
                    className="fa-solid icon-location-pin"></i></span>
                  <select defaultValue={"0"} className="form-select from-location">
                    <option value="0">Select hospital location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>

                </div>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                <div className="input-group mb-lg-0 mb-3">
                  <span className="input-group-text" id="from-icon"><i
                    className="fa-solid fa-magnifying-glass"></i></span>
                  <input type="text" className="form-control pe-0" placeholder="Search doctor/specialities"
                    aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                <div className="from-btn">
                  <button type="button" className="btn">Book An Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--=========== fromsection end =======--> */}
      <section className="section py-0 d-lg-block d-none">
        <div className="container-fluid ps-0">
          <div className="row">
            <div className="cta-col ctn-left-col">
              <div className="cta-diff">
                <h3>I am here to <i className="icon-arrow-right"></i></h3>
              </div>
            </div>
            <div className="cta-col">
              <a href="#">
                <div className="cta-diff">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="img/doctor.png" alt="" />
                    <h3>Find a <br /> <span>Doctor</span></h3>
                    {/* <!-- <div className="cta-right-arrow">
                      <img src="img/right-arrow.svg" className="img-fluid" alt="" />
                    </div> --> */}
                  </div>
                </div>
              </a>
            </div>
            <div className="cta-col">
              <a href="#">
                <div className="cta-diff">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="img/appointment.png" alt="" />
                    <h3>Book an <br /> <span>Appointment</span></h3>
                    {/* <!-- <div className="cta-right-arrow">
                      <img src="img/right-arrow.svg" className="img-fluid" alt="" />
                    </div> --> */}
                  </div>
                </div>
              </a>
            </div>
            <div className="cta-col">
              <a href="#">
                <div className="cta-diff">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="img/health.png" alt="" />
                    <h3>Book a <br /> <span>Health Checkup</span></h3>
                    {/* <!-- <div className="cta-right-arrow">
                      <img src="img/right-arrow.svg" className="img-fluid" alt="" />
                    </div> --> */}
                  </div>
                </div>
              </a>
            </div>
            <div className="cta-col">
              <a href="#">
                <div className="cta-diff">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="img/opinion.png" alt="" />
                    <h3>Get <br /> <span>Second Opinion</span></h3>
                    {/* <!-- <div className="cta-right-arrow">
                      <img src="img/right-arrow.svg" className="img-fluid" alt="" />
                    </div> --> */}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-lg-0 pt-2 pb-2 d-lg-none d-block" data-aos="fade-up">
        <div className="container-fluid ps-0">
          <div className="row">
            <div className="cta-col ctn-left-col">
              <div className="cta-diff">
                <div className="d-flex align-items-center justify-content-center">
                  <img src="img/appointment-mb.png" alt="" />
                  <h3>Book an <br /> Appointment</h3>
                  {/* <!-- <div className="cta-right-arrow">
                    <img src="img/right-arrow.svg" className="img-fluid" alt="" />
                  </div> --> */}
                </div>
              </div>
            </div>
            <div className="cta-col">
              <a href="#">
                <div className="cta-diff">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="img/doctor.png" alt="" />
                    <h3>Find a <br /> <span>Doctor</span></h3>
                    {/* <!-- <div className="cta-right-arrow">
                      <img src="img/right-arrow.svg" className="img-fluid" alt="" />
                    </div> --> */}
                  </div>
                </div>
              </a>
            </div>
            <div className="cta-col">
              <a href="#">
                <div className="cta-diff">
                  <div className="d-flex align-items-center justify-content-center">
                    <img src="img/opinion.png" alt="" />
                    <h3>Health <br /> <span> Check-up</span></h3>
                    {/* <!-- <div className="cta-right-arrow">
                      <img src="img/right-arrow.svg" className="img-fluid" alt="" />
                    </div> --> */}
                  </div>
                </div>
              </a>
            </div>


          </div>
        </div>
      </section>

      {/* <!-- ====== cta section ==== --> */}

      <section className="section exellence-section" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4 col-8">
              <div className="main-heading">
                <h2>Centers of Excellence</h2>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="over-all-btn text-end">
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="owl-carousel owl-theme exellence">
            <div className="item">
              <div className="card border-0">
                <div className="card-top">
                  <img src="img/exellence1.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Cardiology</h4>
                  <p>The KIMSHEALTH Heart Institute brings together a distinguished KIMSHEALTH</p>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card border-0">
                <div className="card-top">
                  <img src="img/exellence2.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Orthopedics & Trauma</h4>
                  <p>KIMSHEALTH is a specialized center with state-of-the-art facility specialized
                    facility</p>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="card border-0">
                <div className="card-top">
                  <img src="img/exellence3.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Neurology</h4>
                  <p>The KIMSHEALTH Department of Neurology is one of the best Department</p>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>

            </div>
            <div className="item">
              <div className="card border-0">
                <div className="card-top">
                  <img src="img/exellence4.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Respiratory Medicine</h4>
                  <p>The KIMSHEALTH Department of Respiratory Medicine is regarded Respiratory</p>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>

            </div>

            <div className="item">
              <div className="card border-0">
                <div className="card-top">
                  <img src="img/exellence4.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Respiratory Medicine</h4>
                  <p>The KIMSHEALTH Department of Respiratory Medicine is regarded Respiratory</p>
                  <div className="main-btn">
                    <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>
      </section>

      <div className="line-divider"> </div>

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
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="owl-carousel owl-theme expert">

            <div className="expert-card" data-aos="fade-right">
              <div className="card border-0 p-lg-4 p-0">
                <div className="card-top">
                  <img src="img/expert1.png" className="img-fluid w-100" alt="" />
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

            <div className="expert-card" data-aos="fade-right">
              <div className="card border-0  p-lg-4 p-0">
                <div className="card-top">
                  <img src="img/expert2.png" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Dr. Deepa Das</h4>
                  <p>Senior Consultant</p>
                  <h5>Critical Care</h5>
                  <div className="from-btn">
                    <a href="#" className="btn">Appointment</a>
                  </div>
                </div>
              </div>
              <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                <a href="#">View Profile</a>
              </div>
            </div>

            <div className="expert-card" data-aos="fade-left">
              <div className="card border-0  p-lg-4 p-0">
                <div className="card-top">
                  <img src="img/expert3.png" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Dr. Shabeerali T U</h4>
                  <p>Chief Coordinator & Senior . . . </p>
                  <h5>Hepatobiliary, Pancreatic & . . . </h5>
                  <div className="from-btn">
                    <a href="#" className="btn">Appointment</a>
                  </div>
                </div>
              </div>
              <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                <a href="#">View Profile</a>
              </div>
            </div>

            <div className="expert-card" data-aos="fade-left">
              <div className="card border-0  p-lg-4 p-0">
                <div className="card-top">
                  <img src="img/expert4.png" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Dr. Muhammed Nazeer </h4>
                  <p>Senior Consultant & Group . . . </p>
                  <h5>Orthopedics & Trauma </h5>
                  <div className="from-btn">
                    <a href="#" className="btn">Appointment</a>
                  </div>
                </div>
              </div>
              <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                <a href="#">View Profile</a>
              </div>
            </div>
            <div className="expert-card">
              <div className="card border-0  p-lg-4 p-0">
                <div className="card-top">
                  <img src="img/expert4.png" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Dr. Muhammed Nazeer </h4>
                  <p>Senior Consultant & Group . . . </p>
                  <h5>Orthopedics & Trauma </h5>
                  <div className="from-btn">
                    <a href="#" className="btn">Appointment</a>
                  </div>
                </div>
              </div>
              <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                <a href="#">View Profile</a>
              </div>
            </div>
            <div className="expert-card">
              <div className="card border-0  p-lg-4 p-0">
                <div className="card-top">
                  <img src="img/expert4.png" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-content">
                  <h4>Dr. Muhammed Nazeer </h4>
                  <p>Senior Consultant & Group . . . </p>
                  <h5>Orthopedics & Trauma </h5>
                  <div className="from-btn">
                    <a href="#" className="btn">Appointment</a>
                  </div>
                </div>
              </div>
              <div className="main-btn text-lg-center text-start ms-lg-0 ms-2 mt-2">
                <a href="#">View Profile</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="line-divider"> </div>

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
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>
          <div className="position-relative">
            <div className="white-box"></div>
          </div>

          <div className="owl-carousel owl-theme wall-frame">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                <div className="frame-left-col" data-aos="slide-right">

                  <img src="img/frame-left-col.jpg" className="img-fluid w-100" alt="" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-7 col-6 my-auto">

                <div className="frame-right-col" data-aos="slide-left">
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

            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-4 col-6">
                <div className="frame-left-col" data-aos="fade-right">

                  <img src="img/frame-left-col.jpg" className="img-fluid w-100" alt="" />
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
          </div>

        </div>
      </section>

      <div className="line-divider"></div>
      <section className="section d-lg-block d-none testimonial-section overflow-hidden">
        <div className="container">
          <div className="row justify-content-between" data-aos="fade-right">
            <div className="col-md-3 col-8">
              <div className="main-heading">
                <h2>Patient Testimonials</h2>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="over-all-btn text-end">
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
              <div className="row testi-card">
                <div className="col-md-3">
                  <div className="overflow-hidden">
                    <img src="img/testi-img1.jpg" alt="" className="img-fluid w-100" />
                  </div>
                </div>
                <div className="col-md-9 my-auto">
                  <div className="testi-rightbox">
                    <h3>24-Week Preterm Miracle: Uma's Heartfelt
                      Testimonial </h3>
                    <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                      heartfelt gratitude towards . . . .<a href="#"> Watch Video</a></p>

                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="doctor-name">
                        <p><span><img src="img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                          Naveen Jain </p>
                      </div>
                      <div className="doctor-catagory">
                        <p>Obstetrics & Gynecology </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
              <div className="row testi-card">
                <div className="col-md-3">
                  <div className="overflow-hidden">
                    <img src="img/testi-img2.jpg" alt="" className="img-fluid w-100" />
                  </div>

                </div>
                <div className="col-md-9 my-auto">
                  <div className="testi-rightbox">
                    <h3>Mr Menon's Remarkable Recovery with Intrasaccular
                      Flow Diverter</h3>
                    <p>This is a testimonial by Mr Menon on his journey to recovery
                      from aneurysm! With cutting-edge . . . .<a href="#"> Watch Video</a></p>

                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="doctor-name">
                        <p><span><img src="img/doctor.png" className="img-fluid" alt="" /></span>Dr.
                          Santhosh Joseph </p>
                      </div>
                      <div className="doctor-catagory">
                        <p>Neuro Interventional Radiology </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-right">
              <div className="row testi-card">
                <div className="col-md-3">
                  <div className="overflow-hidden">
                    <img src="img/testi-img3.jpg" alt="" className="img-fluid w-100" />
                  </div>

                </div>
                <div className="col-md-9 my-auto">
                  <div className="testi-rightbox">
                    <h3>A successful Shoulder Replacement surgery is
                      done for Mrs Norah Mohammed Alsuqufi.</h3>
                    <p>A successful Shoulder Replacement surgery is done for
                      Mrs Norah Mohammed Alsuqufi from Saudi . . . .<a href="#"> Watch Video</a></p>

                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="doctor-name">
                        <p><span><img src="img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                          Muhammed Nazeer </p>
                      </div>
                      <div className="doctor-catagory">
                        <p>Orthopedics & Trauma </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-12" data-aos="fade-left">
              <div className="row testi-card">
                <div className="col-md-3">
                  <div className="overflow-hidden">
                    <img src="img/testi-img4.jpg" alt="" className="img-fluid w-100" />
                  </div>

                </div>
                <div className="col-md-9 my-auto">
                  <div className="testi-rightbox">
                    <h3>Experience Excellence in Medical Care:
                      Maryan Germain's Testimonial at KIMSHEALTH </h3>
                    <p>At KIMSHEALTH Hospital, we prioritize patient satisfaction and
                      aim to provide the best care possible . . . .<a href="#"> Watch Video</a>
                    </p>

                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="doctor-name">
                        <p><span><img src="img/doctor.png" className="img-fluid" alt="" /></span> Dr.
                          Renjith Unnikrishnan </p>
                      </div>
                      <div className="doctor-catagory">
                        <p>Orthopaedics </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="section d-lg-none d-block testimonial-section" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3 col-8">
              <div className="main-heading">
                <h2>Patient Testimonials</h2>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="over-all-btn text-end">
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="owl-carousel owl-theme testimonial">

            <div className="card border-0">
              <div className="card-top">
                <img src="img/testi-mb2.jpg" alt="" className="img-fluid w-100" />
                <div className="play-icon"> <img src="img/play-icon-small.png" alt="" /> </div>
              </div>
              <div className="testi-rightbox card-content">
                <h3>From Aneursym to Happiness.</h3>
                <p>Mr Menon's Remarkable Recovery with Intrasaccular Flow Diverter</p>

                <div className="d-block mt-lg-3 mt-2">
                  <div className="doctor-name mb-1">
                    <p>Dr. Santhosh Joseph </p>
                  </div>
                  <div className="doctor-catagory">
                    <p>Cardiology </p>
                  </div>


                </div>
              </div>
            </div>

            <div className="card border-0">
              <div className="card-top">
                <img src="img/testi-mb1.jpg" alt="" className="img-fluid w-100" />
                <div className="play-icon"> <img src="img/play-icon-small.png" alt="" /> </div>
              </div>
              <div className="testi-rightbox card-content">
                <h3>24-Week Preterm Miracle: Uma's Heartfelt
                  Testimonial </h3>
                <p>Uma, a Scientist at ISRO, Trivandrum, pours her
                  heartfelt gratitude towards . . . .</p>

                <div className="d-block mt-lg-3 mt-2">
                  <div className="doctor-name mb-1">
                    <p>Dr. Naveen Jain </p>
                  </div>
                  <div className="doctor-catagory">
                    <p>Obstetrics & Gynecology </p>
                  </div>
                </div>
              </div>
            </div>



            <div className="card border-0">
              <div className="card-top">
                <img src="img/testi-mb3.jpg" alt="" className="img-fluid w-100" />
                <div className="play-icon"> <img src="img/play-icon-small.png" alt="" /> </div>
              </div>
              <div className="testi-rightbox card-content">
                <h3>A successful Shoulder Replacement surgery is
                  done for Mrs Norah Mohammed Alsuqufi.</h3>
                <p>A successful Shoulder Replacement surgery is done for
                  Mrs Norah Mohammed Alsuqufi from Saudi . . . .</p>

                <div className="d-block mt-lg-3 mt-2">
                  <div className="doctor-name mb-1">
                    <p>Dr. Muhammed Nazeer </p>
                  </div>
                  <div className="doctor-catagory">
                    <p>Orthopedics & Trauma </p>
                  </div>
                </div>
              </div>
            </div>



          </div>



        </div>
      </section>


      {/* <!-- ========== testimonial section end ============ --> */}

      <div className="line-divider"></div>
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
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="owl-carousel owl-theme blog">
            <div className="card border-0" data-aos="slide-down" data-aos-duration="1000">
              <div className="card-top">
                <img src="img/blog1.jpg" className="img-fluid w-100" alt="" />
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
            <div className="card border-0" data-aos="slide-down" data-aos-duration="1400">
              <div className="card-top">
                <img src="img/blog2.jpg" className="img-fluid w-100" alt="" />
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
            <div className="card border-0" data-aos="slide-down" data-aos-duration="1800">
              <div className="card-top">
                <img src="img/blog3.jpg" className="img-fluid w-100" alt="" />
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
            <div className="card border-0" data-aos="slide-down" data-aos-duration="2200">
              <div className="card-top">
                <img src="img/blog4.jpg" className="img-fluid w-100" alt="" />
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
            <div className="card border-0" data-aos="slide-down" data-aos-duration="2400">
              <div className="card-top">
                <img src="img/blog2.jpg" className="img-fluid w-100" alt="" />
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
            <div className="card border-0" data-aos="slide-down" data-aos-duration="2600">
              <div className="card-top">
                <img src="img/blog3.jpg" className="img-fluid w-100" alt="" />
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
          </div>
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
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
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
                    <img src="img/blog2.jpg" className="img-fluid w-100" alt="" />
                  </div>
                </div>
              </div>

              <div className="blog-card" data-aos="fade-up">
                <div className="row">
                  <div className="col-6 my-auto">
                    <div className="testi-rightbox">
                      <h3>High Cholesterol </h3>
                      <p>Cholesterol is a type of fat, it is a
                        double-edged sword Cholesterol is a type of fat </p>

                      <div className="d-block align-items-center justify-content-between">
                        <div>
                          <strong> By: Dr Aman Agarwal </strong>
                        </div>
                        <div className="main-btn mt-lg-0 mt-1">
                          <a href="#">Read More <span><i
                            className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <img src="img/blog3.jpg" className="img-fluid w-100" alt="" />
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* <!-- <div className="owl-carousel owl-theme blog">
            <div className="card border-0">
              <div className="card-top">
                <img src="img/blog1.jpg" className="img-fluid w-100" alt="" />
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
                <img src="img/blog2.jpg" className="img-fluid w-100" alt="" />
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
                <img src="img/blog3.jpg" className="img-fluid w-100" alt="" />
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
                <img src="img/blog4.jpg" className="img-fluid w-100" alt="" />
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
                <img src="img/blog2.jpg" className="img-fluid w-100" alt="" />
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
                <img src="img/blog3.jpg" className="img-fluid w-100" alt="" />
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


      {/* <!-- ========== blog section end =========== --> */}

      <div className="line-divider"></div>
      <section className="section">
        <div className="container">
          <div className="row justify-content-between" data-aos="fade-up">
            <div className="col-md-4 col-8">
              <div className="main-heading">
                <h2>Hear From The Doctor </h2>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="over-all-btn text-end">
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-12 hear-doctor-img mb-lg-0 mb-3">
              <div className="position-relative overflow-hidden" data-aos="fade-up">
                <img src="img/hear-doc1.jpg" className="img-fluid d-lg-block d-none doc-image-hover w-100" alt="" />
                <img src="img/hear-mb1.png" className="img-fluid w-100 d-lg-none d-block doc-image-hover" alt="" />
                <div className="hear-doctor-content">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p>A Deep Dive into Epilepsy Diagnosis and Effective Treatments</p>
                    </div>
                    <div className="main-btn d-lg-block d-none">
                      <span><img src="img/play-button.png" className="img-fluid" alt="" /> </span>
                      <a href="#">Watch Video <span><i className="fa-solid fa-arrow-right"></i></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-4 col-12 blog-right-col">
              <div className="row g-2">
                <div className="col-md-12 col-6 mb-3">
                  <div className="position-relative overflow-hidden" data-aos="fade-up">
                    <img src="img/hear-doc2.jpg" className="img-fluid w-100 hear-doc-image d-lg-block d-none"
                      alt="" />
                    <img src="img/hear-doc-mb2.png" className="img-fluid w-100 d-lg-none d-block" alt="" />
                    <div className="hear-doctor-content">
                      <div className="d-block align-items-center justify-content-between">
                        <div>
                          <h5 className="d-lg-block d-none">12<sup>th</sup> May 2024</h5>
                          <p>A talk on Liver Transplant by Dr. Shabeer Ali T U</p>
                        </div>
                        <div className="main-btn d-lg-block d-none">
                          <span><img src="img/play-button.png" className="img-fluid" alt="" /> </span>
                          <a href="#">Watch Video <span><i
                            className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-6">
                  <div className="position-relative overflow-hidden" data-aos="fade-up">
                    <img src="img/hear-doc3.jpg" className="img-fluid w-100 hear-doc-image d-lg-block d-none"
                      alt="" />
                    <img src="img/hear-doc-mb3.png" className="img-fluid w-100 d-lg-none d-block" alt="" />
                    <div className="hear-doctor-content">
                      <div className="d-block align-items-center justify-content-between">
                        <div>
                          <h5 className="d-lg-block d-none">20<sup>th</sup> May 2024</h5>
                          <p>Understanding Hernias & Hydroceles in Children</p>
                        </div>
                        <div className="main-btn d-lg-block d-none">
                          <span><img src="img/play-button.png" className="img-fluid" alt="" /></span>
                          <a href="#">Watch Video <span><i
                            className="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="line-divider"></div>
      <section className="section d-lg-block d-none">
        <div className="container">
          <div className="row justify-content-between" data-aos="fade-right">
            <div className="col-md-4 col-8">
              <div className="main-heading">
                <h2>Social Media Updates </h2>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="over-all-btn text-end">
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
              <div className="media-card" data-aos="fade-right" data-aos-duration="2200" data-aos-delay="100">
                <div className="media-img">
                  <img src="img/media1.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="media-content">
                  <p>At KIMSHEALTH, we believe in the
                    power of prevention.Join us in
                    recognizing National . . . .</p>

                  <div className="media-border-bottom">
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="media-name">
                        <div>
                          <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                        </div>
                        <p>KIMSHEALTH <br /> 10th June 2024</p>
                      </div>
                      <div className="media-social">
                        <img src="img/facebook.svg" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="media-heart">
                      <div>
                        <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                      </div>
                      <img src="img/chat.png" className="img-fluid" alt="" />
                    </div>
                    <div className="media-share">
                      <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
              <div className="media-card" data-aos="fade-right" data-aos-duration="1800" data-aos-delay="100">
                <div className="media-img">
                  <img src="img/media2.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="media-content">
                  <p>At KIMSHEALTH, our Cardiology
                    Department specializes in
                    electrophysiology, accurately . . . . </p>

                  <div className="media-border-bottom">
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="media-name">
                        <div>
                          <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                        </div>
                        <p>KIMSHEALTH <br /> 10th June 2024</p>
                      </div>
                      <div className="media-social">
                        <img src="img/facebook.svg" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="media-heart">
                      <div>
                        <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                      </div>
                      <img src="img/chat.png" className="img-fluid" alt="" />
                    </div>
                    <div className="media-share">
                      <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
              <div className="media-card" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="100">
                <div className="media-img">
                  <img src="img/media3.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="media-content">
                  <p>Happy #DoctorsDay to all the amazing
                    doctors who keep us healthy! Your
                    dedication is a gift to our . . . . . </p>

                  <div className="media-border-bottom">
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="media-name">
                        <div>
                          <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                        </div>
                        <p>KIMSHEALTH <br /> 10th June 2024</p>
                      </div>
                      <div className="media-social">
                        <img src="img/facebook.svg" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="media-heart">
                      <div>
                        <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                      </div>
                      <img src="img/chat.png" className="img-fluid" alt="" />
                    </div>
                    <div className="media-share">
                      <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
              <div className="media-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                <div className="media-img">
                  <img src="img/media4.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="media-content">
                  <p>Don't let scoliosis go unnoticed. Look
                    out for signs like uneven shoulders, a
                    visible spine curve, or . . . . . </p>

                  <div className="media-border-bottom">
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="media-name">
                        <div>
                          <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                        </div>
                        <p>KIMSHEALTH <br /> 10th June 2024</p>
                      </div>
                      <div className="media-social">
                        <img src="img/facebook.svg" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="media-heart">
                      <div>
                        <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                      </div>
                      <img src="img/chat.png" className="img-fluid" alt="" />
                    </div>
                    <div className="media-share">
                      <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="section d-lg-none d-block" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4 col-8">
              <div className="main-heading">
                <h2>Social Media Updates </h2>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="over-all-btn text-end">
                <a href="#">View All <span><img src="img/slider-right-arrow.svg" className="img-fluid"
                  alt="" /></span></a>
              </div>
            </div>
          </div>

          <div className="row g-2">
            <div className="col-xl-3 col-lg-3 col-md-3 col-6">
              <div className="media-card">
                <div className="media-img">
                  <img src="img/media1.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="media-content">
                  <p>At KIMSHEALTH, we believe in the
                    power of prevention.Join us in
                    recognizing National . . . .</p>

                  <div className="media-border-bottom">
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="media-name">
                        <div>
                          <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                        </div>
                        <p>KIMSHEALTH <br /> 10th June 2024</p>
                      </div>
                      <div className="media-social">
                        <img src="img/facebook.svg" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="media-heart">
                      <div>
                        <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                      </div>
                      <img src="img/chat.png" className="img-fluid" alt="" />
                    </div>
                    <div className="media-share">
                      <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 col-6">
              <div className="media-card">
                <div className="media-img">
                  <img src="img/media2.jpg" className="img-fluid w-100" alt="" />
                </div>
                <div className="media-content">
                  <p>At KIMSHEALTH, our Cardiology
                    Department specializes in
                    electrophysiology, accurately . . . . </p>

                  <div className="media-border-bottom">
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="media-name">
                        <div>
                          <img src="img/kims-small-logo.png" className="img-fluid" alt="" />
                        </div>
                        <p>KIMSHEALTH <br /> 10th June 2024</p>
                      </div>
                      <div className="media-social">
                        <img src="img/facebook.svg" className="img-fluid" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <div className="media-heart">
                      <div>
                        <p><span> <img src="img/heart.png" className="img-fluid" alt="" /></span>8</p>
                      </div>
                      <img src="img/chat.png" className="img-fluid" alt="" />
                    </div>
                    <div className="media-share">
                      <p><span> <img src="img/share.png" className="img-fluid" alt="" /></span> Share</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
