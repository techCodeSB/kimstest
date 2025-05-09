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
            <div className="container">
              <div className="row">
                <div className="col-md-6 details-proceduce-banner-left-col">

                  <div className="breadcrumb-wrapper py-2 ps-2 ms-1">
                    <div className="row">
                      <div className="col-12 px-0">
                        <ul className="breadcrumb mb-0">
                          <li>
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="/conditions">Conditions</Link>
                          </li>
                          <li className="active"> Coronary Artery Disease (CAD) </li>
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

                <div className="col-md-6 details-proceduce-banner-right-col my-lg-auto pb-5">
                  <div className="d-flex align-items-center justify-content-center mb-4">
                    <img src="/img/cardiology-proce.png" className="img-fluid" alt="" />
                    <h4>Coronary Artery Disease (CAD)</h4>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a href="#" className="procedure-btn-left">Get Second Opinion</a>
                    <a href="#" className="procedure-btn-right">Meet Our Cardiologist</a>
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
                  <h2>Overview</h2>
                </div>

                <p>Coronary Artery Disease (CAD) is a condition where the arteries that supply blood to the heart become narrowed or blocked due to plaque buildup (atherosclerosis). This
                  reduces blood flow to the heart, potentially leading to chest pain (angina), shortness of breath, or heart attacks. Risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, and a sedentary lifestyle. Treatment options include
                  lifestyle changes, medications, angioplasty, or bypass surgery.</p>
                <p>KIMSHEALTH is a top choice for CAD treatment due to its advanced facilities,
                  experienced cardiologists, and cutting-edge technology. The hospital offers
                  comprehensive cardiac care, from early diagnosis to minimally invasive procedures and complex surgeries. With a patient-centric approach, world-class infrastructure, and international standards in healthcare, KIMSHEALTH ensures high success rates in
                  treating heart conditions. Their dedicated cardiac team provides personalized
                  treatment plans, making it a trusted destination for those seeking the best
                  heart care solutions . </p>
              </div>
              <div className="col-md-5 my-auto">
                <div className="details-right-col text-center">
                  <img src="/img/details-rightcol.jpg" alt="" className="img-fluid w-100" />
                  <h5>Coronary Artery Disease (CAD) treatment at KIMSHEALTH</h5>
                  <p>Coronary Artery Disease (CAD) is regarded . . . . </p>
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
            <div className="main-heading text-center">
              <h2>Treatments</h2>
            </div>
            <div className="row">
              <div className="col-md-4 mb-lg-0 mb-3">
                <div className="procedure-acc-card mb-3">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                          <span>Enhanced External Counterpulsation (EECP)</span>
                        </button>
                      </h2>
                      <div id="collapse1" className="accordion-collapse collapse show">
                        <div className="accordion-body px-0 pt-0">
                          <p>Enhanced External Counterpulsation (EECP) is a non-invasive therapy that improves blood flow, reduces angina, and . . . <span> Read More</span></p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="speciality-masterpage-card-content">
                  <a href="#">Angioplasty & Stenting</a>
                </div>
                <div className="speciality-masterpage-card-content">
                  <a href="#">ACE Inhibitors/ARBs</a>
                </div>
              </div>

              <div className="col-md-4 mb-lg-0 mb-3">
                <div className="procedure-acc-card mb-3">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                          <span>Gene & Stem Cell Therapy</span>
                        </button>
                      </h2>
                      <div id="collapse2" className="accordion-collapse collapse show">
                        <div className="accordion-body px-0 pt-0">
                          <p>Gene and stem cell therapy are emerging
                            treatments for CAD, aiming to regenerate heart tissue and improve blood vessel . . . .<span> Read More</span></p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="speciality-masterpage-card-content">
                  <a href="#">Nitrates </a>
                </div>
                <div className="speciality-masterpage-card-content">
                  <a href="#">Beta-Blockers </a>
                </div>
              </div>

              <div className="col-md-4 mb-lg-0 mb-3">
                <div className="procedure-acc-card mb-3">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                          <span>Coronary Artery Bypass Grafting (CABG)</span>
                        </button>
                      </h2>
                      <div id="collapse3" className="accordion-collapse collapse show">
                        <div className="accordion-body px-0 pt-0">
                          <p>Coronary Artery Bypass Grafting (CABG) is a
                            surgical procedure that improves blood flow to the heart by bypassing . . . .<span> Read More</span></p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="speciality-masterpage-card-content">
                  <a href="#">Antiplatelet Drugs</a>
                </div>

                <div className="speciality-masterpage-card-content">
                  <a href="#">Statins</a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="line-divider"> </div>

        <ExpertCarousel/>
        <div className="line-divider"> </div>
        <TestimonialSection/>
        <div className="line-divider"> </div>
        <HearFromDoctor/>
      </div>
    </>
  )
}

export default Page;
