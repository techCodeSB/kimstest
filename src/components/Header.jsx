"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import detectedAndSetLocationORLanguage from "@/app/helper/detectedAndSetLangOrLanguage";
import baseUrlGenerator from "@/app/helper/baseUrlGenerator";
import mainHelper from "@/app/helper/mainHelper";
import {onLangChangeRedirection, onLocChangeRedirection} from "@/app/helper/onChageRedirection";

const Header = () => {
  const [allLanguages, setAllLanguage] = useState([]); // Store all language;
  const [allLocations, setAllLocations] = useState([]); // Store all locations;
  const pathname = usePathname();
  let [selectedLang, setSelectedLang] = useState(null);
  let [selectedLoc, setSelectedLoc] = useState(null);

  // Get all languages
  useEffect(() => {
    const getLang = async () => {
      const lang = await mainHelper.getLanguages();
      setAllLanguage([...lang]);
    }

    const getLoc = async () => {
      const loc = await mainHelper.getLocations();
      setAllLocations([...loc]);
    }

    getLang()
    getLoc()

  }, [])

  


  // Set Current Language and location on Page load or URL redirection
  useEffect(() => {
    const refer = document.referrer;
    const origin = location.origin;

    if (refer == "" || `${origin}/` !== refer) {
      detectedAndSetLocationORLanguage()
        .then((d) => {
          // console.log(baseUrlGenerator(true, true));
          setSelectedLang(JSON.parse(localStorage.getItem("systemLang")))
          setSelectedLoc(JSON.parse(localStorage.getItem("systemLocation")))
        })
        .catch(er => {
          console.log(er)
        })

    }
  }, [pathname])




  // For carousel calls
  useEffect(() => {
    const interval = setInterval(() => {
      const isReady =
        typeof window !== "undefined" &&
        window.initHomeBannerCarousel &&
        window.initExellenceCarousel &&
        window.initExpertCarousel &&
        window.initTestimonialCarousel &&
        window.initWallFrameCarousel &&
        window.initBlogCarousel &&
        window.hospitalCarousel &&
        window.hospitalDetails;

      if (isReady) {
        window.initHomeBannerCarousel();
        window.initExellenceCarousel();
        window.initExpertCarousel();
        window.initTestimonialCarousel();
        window.initWallFrameCarousel();
        window.initBlogCarousel();
        window.hospitalDetails();
        window.hospitalCarousel();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return <>
    <header id="header-sticky" className="header">
      <section id="topheader" className="d-lg-block d-none">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="navbar-logo py-2 ">
            <Link href="/">
              <img src="/img/logo.png" alt="" className="img-fluid" />
            </Link>
          </div>
          <div className="header-contact d-flex align-items-center justify-content-center">
            <ul>
              <li><Link href="hospital">About Us</Link></li>
              <li><a href="#">Home Care</a></li>
              <li><a href="">Second Opinion</a></li>
              <li><a href="#">My Reports</a></li>
              <li><a href="#">Call Ambulance</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Locations</a></li>
            </ul>

            <div className="top-bar-icon d-flex align-items-center">
              <div className="whatapp-icon">
                <a href="#"> <img src="/img/whatsapp.svg" className="img-fluid" alt="" /></a>
              </div>
              <div className="search-icon ms-3 me-2">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="top-drop-down">

                <select value={selectedLang?.slug || ""} className="form-select border-0 pe-1" onChange={onLangChangeRedirection}>
                  {
                    allLanguages.length < 1 ? <option>Loading...</option> :
                      allLanguages.map((l, _) => {
                        return <option value={l.code} data-fulldata={JSON.stringify(l)} key={l.id}>
                          {l.name}
                        </option>
                      })
                  }
                </select>

                <select value={selectedLoc?.slug || ""} className="form-select border-0 pe-1" onChange={onLocChangeRedirection}>
                  <option value="">Location</option>
                  {
                    allLocations.length < 1 ? <option>Loading...</option> :
                      allLocations.map((l, _) => {
                        return <option value={l.slug} data-fulldata={JSON.stringify(l)} key={l.id}>
                          {l.title}
                        </option>
                      })
                  }
                </select>

              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="header-menu mobileMenuBar" id="menuHeader">
        <div className="container">
          <nav className="header-menu-container justify-content-lg-end">
            <div className="navbar-brand">
              <a href="#" className="text-decoration-none">
                <img src="/img/logo.png" height="55" className="img-fluid" />
              </a>
            </div>
            <div className="mobile_primary" id="primary-nav">
              {/* <!-- <div className="navbar-brand navbar-logo d-none d-lg-block">
                  <a href="#">
                    <img src="/img/imi-logo.png" alt="" className="img-fluid">
                  </a>
                </div> --> */}
              <ul className="menu-navigation" id="menu-main-navigation-1">
                <li><Link href={"/speciality"} className="anchor-menu">Specialities & Treatments</Link></li>
                <li><a href="" className="anchor-menu">Find a Doctor</a></li>
                <li><a href="" className="anchor-menu">Health Checkup</a></li>
                <li><a href="" className="anchor-menu">Visa Medical</a></li>
                <li><a href="" className="anchor-menu">International Patients</a></li>
                {/* <!-- <li className="menu-item-has-children show-submenu">
                    <a href="#" className="anchor-menu">Programmes</a>
                    <div className="sub-menu">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <h3>Admissions</h3>
                            <ul>
                              <li>
                                <a href="">Centre for Heart & Vascular Care</a>
                              </li>
                              <li>
                                <a href="">
                                  Centre for Bone & Joint Care</a>
                              </li>

                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <h3>Executive Education</h3>
                            <ul>
                              <li>
                                <a href="">
                                  Centre for Gastro Sciences</a>
                              </li>
                              <li>
                                <a href="">
                                  Centre for Nephro urosciences and Kidney Transplantation</a>
                              </li>

                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <h3>Faculty</h3>
                            <ul>
                              <li>
                                <a href="">
                                  Centre For Neurosciences</a>
                              </li>

                              <li>
                                <a href="">
                                  Centre for Blood Disease, BMT & Cancer Immunotherapy</a>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sub-menu sub-menu-single">
                      <div className="sub-menu-details">
                        <ul>
                          <li>
                            <a href="#">Post-Graduate Diploma In Management (PGDM)</a>
                          </li>
                          <li>
                            <a href="#">Fellow Programme In Management (FPM)</a>
                          </li>
                          <li>
                            <a href="#">Online Post Graduate Diploma In Management (OPGDM)</a>
                          </li>
                          <li>
                            <a href="#">International Student Exchange Programme (ISEP)</a>
                          </li>
                          <li>
                            <a href="#">Post Graduate Certificate In Financial Market
                              (PGCFM)</a>
                          </li>
                          <li>
                            <a href="#">Certificate Programme In Data Science</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li> --> */}
                {/* <!-- <li className="menu-item-has-children show-submenu">
                    <a href="" className="anchor-menu">Admissions</a>
                    <div className="sub-menu">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <ul>
                              <li>
                                <a href="">
                                  Anesthesiology and Pain Management</a>
                              </li>
                              <li>
                                <a href="">
                                  Clinical Laboratory and Pathalogy</a>
                              </li>
                              <li>
                                <a href="">
                                  Clinical Nutrition and Dietary Services</a>
                              </li>
                              <li>
                                <a href="">
                                  Endocrinilogy</a>
                              </li>
                              <li>
                                <a href="">
                                  ENT</a>
                              </li>
                              <li>
                                <a href="">
                                  Physical Medicine and Rehabilitation</a>
                              </li>
                              <li>
                                <a href="">
                                  Radiology and Imaging</a>
                              </li>
                              <li>
                                <a href="">
                                  Speech and Audiology</a>
                              </li>

                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="sub-menu-details">
                            <ul>
                              <li>
                                <a href="">
                                  Critical Care Medicine</a>
                              </li>
                              <li>
                                <a href="">
                                  Dental and Maxillofacial Surgery</a>
                              </li>
                              <li>
                                <a href="">
                                  Dermatology</a>
                              </li>
                              <li>
                                <a href="">
                                  Emergency Medicine</a>
                              </li>
                              <li>
                                <a href="">
                                  GI Surgery, Laproscopic and Gastro Oncosurgery</a>
                              </li>
                              <li>
                                <a href="">
                                  Psychiatry</a>
                              </li>
                              <li>
                                <a href="">
                                  Pulmonology</a>
                              </li>
                              <li>
                                <a href="">
                                  Tranfusion Medicine and Blood Centre</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="">
                            <ul>
                              <li>
                                <a href="">
                                  Gynae and Laproscopic Surgery</a>
                              </li>
                              <li>
                                <a href="">
                                  General Medicine</a>
                              </li>
                              <li>
                                <a href="">
                                  General Laproscopic Surgery</a>
                              </li>
                              <li>
                                <a href="">
                                  Hematology</a>
                              </li>
                              <li>
                                <a href="">
                                  Heart and Lung Transplant</a>
                              </li>
                              <li>
                                <a href="">
                                  Laboratory Medicine</a>
                              </li>
                              <li>
                                <a href="">
                                  Plastic Surgery</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sub-menu sub-menu-single">
                      <div className="sub-menu-details">
                        <ul>
                          <li>
                            <a href="#">Post-Graduate Diploma In Management (PGDM)</a>
                          </li>
                          <li>
                            <a href="#">Fellow Programme In Management (FPM)</a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </li> --> */}
                {/* <!-- <li><a href="" className="anchor-menu">Executive Education</a>
                    <div className="sub-menu sub-menu-single">
                      <div className="sub-menu-details">
                        <ul>
                          <li>
                            <a href="">Collaborative Programme</a>
                          </li>
                          <li>
                            <a href="">Custom Programme</a>
                          </li>
                          <li>
                            <a href="">Custom Programme - Contact</a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </li> --> */}
                {/* <!-- <li><a href="" className="anchor-menu">Faculty</a></li> --> */}
                {/* <!-- <li><a href="" className="anchor-menu">Research</a>
                    <div className="sub-menu sub-menu-single">
                      <div className="sub-menu-details">
                        <ul>
                          <li>
                            <a href="">Faculty Publications</a>
                          </li>
                          <li>
                            <a href="">IMI Kolkata Publications</a>
                          </li>
                          <li>
                            <a href="">Certers Of Exellence</a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </li> --> */}

              </ul>
            </div>

            <div className="appointment-btn d-lg-block d-none me-4">
              <button className="btn" type="submit">Book An Appointment</button>
            </div>
            <div className="menu-button">
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
            </div>
          </nav>

        </div>
      </div>
    </header>
  </>
}

export default Header;
