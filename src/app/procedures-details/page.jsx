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
                          <Link href="/speciality">Procedures</Link>
                        </li>
                        <li className="active"> Coronary Artery Bypass Grafting (CABG) </li>
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
                <div className="d-flex align-items-center justify-content-end mb-4">
                  <img src="/img/cardiology-proce.png" className="img-fluid" alt="" />
                  <h4>Coronary Artery Bypass Grafting (CABG)</h4>
                </div>
                <div className="d-flex align-items-center justify-content-lg-center">
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

              <p>Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to treat severe coronary artery disease (CAD). It involves creating new pathways for blood to bypass blocked or narrowed coronary arteries, ensuring proper blood flow to the heart.
                Surgeons take a healthy blood vessel—usually from the leg (saphenous vein), chest
                (internal mammary artery), or arm (radial artery)—and graft it onto the affected
                coronary artery. This helps restore oxygen supply to the heart muscle, reducing
                chest pain (angina) and lowering the risk of heart attacks. CABG is recommended for patients with multiple blocked arteries or those who haven’t responded well to other treatments like medications or angioplasty.</p>
              <p>KIMSHEALTH is a leading center for CABG, offering advanced cardiac surgery with high success rates. With state-of-the-art operation theaters, a skilled team of cardiothoracic surgeons, and world-class post-operative care, KIMSHEALTH ensures patient safety and speedy recovery. Their expertise in minimally invasive and robotic-assisted CABG makes them a preferred choice for heart patients seeking the best treatment options with a personalized approach.</p>
            </div>
            <div className="col-md-5 my-auto">
              <div className="details-right-col text-center">
                <img src="/img/details-rightcol.jpg" alt="" className="img-fluid w-100" />
                <h5>Coronary Artery Bypass Grafting (CABG) at KIMSHEALTH</h5>
                <p>Coronary Artery Bypass Grafting (CABG) is regarded . . . . </p>
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
            <h2>Diseases Treated</h2>
          </div>
          <div className="row">
            <div className="col-md-4 mb-lg-0 mb-3">
              <div className="procedure-acc-card mb-3">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        <span>Coronary Artery Disease (CAD)</span>
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse show">
                      <div className="accordion-body px-0 pt-0">
                        <p>Coronary Artery Disease (CAD) occurs when plaque buildup narrows coronary arteries, reducing blood flow to the . . . . <span> Read More</span></p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="speciality-masterpage-card-content">
                <a href="#">Severe Left Main Coronary Artery Disease</a>
              </div>
              <div className="speciality-masterpage-card-content">
                <a href="#">Post-Myocardial Infarction Complications</a>
              </div>
            </div>

            <div className="col-md-4 mb-lg-0 mb-3">
              <div className="procedure-acc-card mb-3">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                        <span>Myocardial Ischemia</span>
                      </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse show">
                      <div className="accordion-body px-0 pt-0">
                        <p>Myocardial ischemia occurs when reduced blood flow to the heart deprives it of oxygen, causing chest pain (angina), shortness . . . .<span> Read More</span></p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="speciality-masterpage-card-content">
                <a href="#">Multi-Vessel Coronary Artery Disease</a>
              </div>
              <div className="speciality-masterpage-card-content">
                <a href="#">Heart Failure </a>
              </div>
            </div>

            <div className="col-md-4 mb-lg-0 mb-3">
              <div className="procedure-acc-card mb-3">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                        <span>Chronic Stable Angina</span>
                      </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse show">
                      <div className="accordion-body px-0 pt-0">
                        <p>Chronic Stable Angina is chest pain or discomfort due to reduced blood flow to the heart. It occurs during exertion or stress and is. . . .<span> Read More</span></p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="speciality-masterpage-card-content">
                <a href="#">Acute Coronary Syndrome (ACS)</a>
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
      <div className="line-divider"> </div>

    </>
  )
}

export default Page;
