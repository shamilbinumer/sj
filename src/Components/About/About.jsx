// import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.scss'
// import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

const About = () => {
     return (
          <div className='About-body'>
               <Navbar />
               <ScrollToTopOnMount />
               <div className="about-sub-body">
                    <div className="about-description">
                         <div className="about-description-text">
                              <p data-aos="slide-down" data-aos-duration="1000">Contributing to revealing <span>your utmost potential and unlocking the pathway to reaching your </span>desired outcomes.</p>

                         </div>
                    </div>
               </div>

               {/* ....................................about................................ */}

               <div className="container-fluid">
                    <div className="row about-wrapper">
                         <div className="col-lg-6 col-md-12 col-sm-12 about-left">
                              <div className="image-main" data-aos="slide-right" data-aos-duration="1300">
                                   <div className="border-2"></div>
                                   <div className="border-1"></div>
                                   <div className="aboutimage"><img src="/images/port.jpeg" alt="" /></div>
                              </div>
                         </div>
                         <div className="col-lg-6 col-md-12 col-sm-12 about-right" data-aos="slide-left" data-aos-duration="1300">
                              <h1 >Dr.Shajahan Aboobaker</h1>
                              <p className='about-para-desktop'>Corporate trainer, psychotherapist and motivational speaker Shajahan Aboobaker started the climb to the top of the corporate ladder as an insurance sales agent and a teacher at summer camps at the age of 16. He was born with a speech disability and was ridiculed for it in his childhood. However, this never dampened the spirit of compassion within Shajahan and he always found happiness in paying it forward and giving back to others. Earning the Master of Business Administration with a specialisation in sales and marketing has led Shajahan to many opportunities including senior sales managerial and directorial positions in a span of 15years.
                              </p>
                              <p className="about-para-mobile">
                                   Corporate trainer, psychotherapist and motivational speaker Shajahan Aboobaker started the climb to the top of the corporate ladder as an insurance sales agent and a teacher at summer camps at the age of 16.
                              </p>
                         </div>

                    </div>
               </div>
               {/* ....................................about................................ */}


               {/* ..................................Image-background-About........................... */}

               <div className="about-details-image">
                    <div className="banner-details-text">
                         <p data-aos="fade-up" data-aos-duration="1000">Am Helping to <span> Unleash Your Best Version and Unlock your True Potential To </span>Achieve Your Dreams.</p>

                    </div>
               </div>

               {/* ..................................Services-main........................... */}
               <section id="serviceMain">
                    <div className="service-wrapper">
                         <div className="row">
                              <div className="col-lg-4"><div className="service-card1" data-aos="slide-right" data-aos-duration="1000">
                                   <h3><span>Corporate</span> Training</h3>
                              </div>
                              </div>
                              <div className="col-lg-4"><div className="service-card2" data-aos="fade-up" data-aos-duration="1000">
                                   <h3><span>Business</span> Consulting</h3>
                              </div>
                              </div>
                              <div className="col-lg-4"><div className="service-card3" data-aos="slide-left" data-aos-duration="1000">
                                   <h3><span>Leadership</span> Training</h3>
                              </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* ..................................Services-main........................... */}

               {/* 
     <div className="image-triangle">
           <div className="sub-img-triangle">
                 <div className="img-1"><img src="/images/IMG_9159.PNG" alt="" /></div>
                 <div className="img-2"><img src="/images/IMG_9158.PNG" alt="" /></div>
                 <div className="img-3"><img src="/images/IMG_9162.PNG" alt="" /></div>
                 <div className="img-4"><img src="/images/IMG_9160.PNG" alt="" /></div>
                 <div className="img-5"><img src="/images/IMG_9159.PNG" alt="" /></div>
           </div>
     </div> */}

               <section id="foooter">
                    <Footer />
               </section>
          </div>

     )
}

export default About
