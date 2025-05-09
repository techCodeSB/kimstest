import BlogCarousel from "@/components/BlogCarousel";
import ExpertCarousel from "@/components/ExpertCarousel";
import HearFromDoctor from "@/components/HearFromDoctor";
import TestimonialSection from "@/components/TestimonialSection";
import dynamic from "next/dynamic";
const Header = dynamic(() => import('@/components/Header'), {
  // ssr: false,
});
import Link from "next/link";


const Page = () => {
  return (
    <>
      <Header />
      <div role="main" className="main">
        <section className="section details-page-before py-0">
          <div className="details-page-header">
            <div className="container">
              <div className="row">
                <div className="col-md-6">

                  <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                    <div className="row">
                      <div className="col-12 px-0">
                        <ul className="breadcrumb mb-0">
                          <li><Link href="/">Home</Link></li>
                          <li>
                            <Link href="/speciality">Specialities</Link>
                          </li>
                          <li className="active"> Cardiac Sciences </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="details-banner">
                    <div className="details-heading">
                      <h3>Have a query?</h3>
                      <form action="" method="">
                        <div className="row">
                          <div className="col-xl-8 col-lg-8 col-md-8 col-12 mb-3">
                            <input type="text" className="form-control border-0" placeholder="Enter Your Name *" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <div className="col-xl-8 col-lg-8 col-md-8 col-12 mb-3">
                            <input type="text" className="form-control border-0" placeholder="Enter 10 Digit Mobile Number *" aria-label="Username" aria-describedby="basic-addon1" />
                          </div>
                          <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                            <div className="from-btn">
                              <button type="button" className="btn py-1">REQUEST A CALL BACK</button>
                            </div>
                          </div>
                        </div>
                      </form>
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

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 sub-heading mb-lg-0 mb-3">
                <div className="main-heading">
                  <h2>Cardiac Sciences</h2>
                </div>

                <p>KIMSHEALTH offers one of the country's most advanced cardiac care facilities with a
                  distinguished faculty. Our Department of Cardiac Science provides comprehensive
                  services, including diagnostics, interventional procedures, therapy, and prevention. We offer
                  outpatient and inpatient care and state-of-the-art investigative and interventional facilities.</p>
                <p>Our specialised department has expert cardiologists who address heart-related problems such as heart failure, arrhythmias, pediatric cardiology, and cardiomyopathy. Heart specialists, or cardiologists, as they are commonly known, not only treat heart conditions but also deal with problems in the cardiovascular system, a network of blood vessels running throughout the body. Our hospital is well-equipped with the latest technology for diagnosing and treating cardiovascular conditions, which allows us to provide the best patient care. The cardiologists work closely with other departments at the hospital to provide complete patient care. These include
                  rehabilitation, nutritionists, physicians, interventional radiologists, cardiac surgeons and others. This multidisciplinary approach ensures . . . . Read More</p>
              </div>
              <div className="col-md-5">
                <div className="details-right-col text-center">
                  <img src="/img/details-rightcol.jpg" alt="" className="img-fluid w-100" />
                  <h5>Cardiology at KIMSHEALTH</h5>
                  <p>The KIMSHEALTH Department of Cardiology is regarded . . . . </p>
                  <div className="main-btn">
                    <a href="#">Watch Video <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="line-divider"> </div>

        <section className="section details__section__extra">
          <div className="container">
            <div className="details-card-wrapper pb-5">
              <div className="row position-relative" style={{ zIndex: 99 }}>
                <div className="col-md-4 mb-lg-0 mb-3">
                  <div className="details-card text-center">
                    <div className="card-content">
                      <h4>Cardiology</h4>
                      <p>Cardiology is the medical specialty focusing on heart diseases, including diagnosis, treatment, and prevention of cardiovascular conditions.</p>

                      <div className="main-btn">
                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-lg-0 mb-3">
                  <div className="details-card text-center">
                    <div className="card-content">
                      <h4>Cardiac Surgery</h4>
                      <p>Cardiac science studies the heart’s function, diseases, diagnostics, treatments, and technologies for maintaining cardiovascular health and performance.</p>

                      <div className="main-btn">
                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-lg-0 mb-3">
                  <div className="details-card text-center">
                    <div className="card-content">
                      <h4>Interventional Cardiology</h4>
                      <p>Interventional Cardiology employs minimally invasive procedures to diagnose and treat heart conditions, such as angioplasty and stent placement.</p>

                      <div className="main-btn">
                        <a href="#">Read More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="detsils-key-procedures">
              <div className="main-heading text-center">
                <h2>Diseases and Key Procedures</h2>
              </div>

              <div className="details-key-row">
                <div className="row justify-content-between">
                  <div className="col-md-5 col-12 mt-lg-0 mt-3">
                    <form action="">
                      <div className="input-group p-0 my-lg-5 my-1 position-relative justify-content-center">

                        <select className="form-select diseases-page-search">
                          <option value={""}>Search for conditions/diseases </option>
                          <option defaultValue="1">One</option>
                          <option defaultValue="2">Two</option>
                          <option defaultValue="3">Three</option>
                        </select>
                        <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-magnifying-glass"></i></button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-5 col-12 mb-lg-0 mb-3">
                    <form action="">
                      <div className="input-group p-0 my-lg-5 my-1 position-relative justify-content-center">

                        <select className="form-select treatments-page-search">
                          <option value={""}>Search for procedures/treatments </option>
                          <option defaultValue="1">One</option>
                          <option defaultValue="2">Two</option>
                          <option defaultValue="3">Three</option>
                        </select>
                        <button className="input-group-text border-0 search-btn-page"><i className="fa-solid fa-magnifying-glass"></i></button>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-4 mb-lg-0 mb-3">
                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Coronary Artery Disease (CAD)</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Myocardial Infarction (Heart Attack)</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Arrhythmias</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Hypertension (High Blood Pressure)</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="details-key-box border-0">
                        <div className="details-key-left-col">
                          <h5>Valvular Heart Disease</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>

                    <div className="over-all-btn text-start mt-3 ms-2 ps-1">
                      <a href="#">View all Diseases <span><img src="/img/slider-right-arrow.svg" className="img-fluid" alt="" /></span></a>
                    </div>
                  </div>


                  <div className="col-md-4 mb-lg-0 mb-3">
                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Congenital Heart Disease</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Aortic Aneurysm</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Cardiomyopathy</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Pulmonary Embolism</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="details-key-box border-0">
                        <div className="details-key-left-col">
                          <h5>Stroke</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>C</span>
                        </div>
                      </div>
                    </a>
                  </div>


                  <div className="col-md-4 mb-lg-0 mb-3">
                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Angioplasty and Stenting</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>T</span>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Coronary Artery Bypass Grafting (CABG)</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>T</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Heart Transplantation</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>T</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="details-key-box">
                        <div className="details-key-left-col">
                          <h5>Cardiac Catheterization</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>T</span>
                        </div>
                      </div>
                    </a>

                    <a href="#">
                      <div className="details-key-box border-0">
                        <div className="details-key-left-col">
                          <h5>Implantable Cardioverter Defibrillator (ICD)</h5>
                        </div>
                        <div className="details-key-right-col">
                          <span>T</span>
                        </div>
                      </div>
                    </a>

                    <div className="over-all-btn text-start mt-3 ms-2 ps-1">
                      <a href="#">View all Procedures <span><img src="/img/slider-right-arrow.svg" className="img-fluid" alt="" /></span></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="line-divider"> </div>

        <ExpertCarousel />
        <TestimonialSection />
        <HearFromDoctor />
        <BlogCarousel />
      </div>
    </>
  )
}

export default Page;