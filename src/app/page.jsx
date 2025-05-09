import BlogCarousel from "@/components/BlogCarousel";
import ExpertCarousel from "@/components/ExpertCarousel";
import HearFromDoctor from "@/components/HearFromDoctor";
import SocialMedia from "@/components/SocialMedia";
import TestimonialSection from "@/components/TestimonialSection";
import WallFame from "@/components/WallFame";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('@/components/Header'), {
  // ssr: false,
});



export default function Home() {

  return (
    <>
      <Header />
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

        <ExpertCarousel/>

        <div className="line-divider"> </div>

        <WallFame/>

        <div className="line-divider"></div>

        <TestimonialSection/>

        {/* <!-- ========== testimonial section end ============ --> */}


        <div className="line-divider"></div>

        <BlogCarousel/>
        {/* <!-- ========== blog section end =========== --> */}

        <div className="line-divider"></div>
        <HearFromDoctor/>

        <div className="line-divider"></div>
        <SocialMedia/>

      </div>
    </>
  );
}
