import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import './Media.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';
import ScrollToTopOnMount from '../ScrollToTopOnMount';



const Media = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index

    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
    };

    const slides = [
        {
            imageUrl: "/images/66667413_1219942971541381_6079972479641407935_n.jpg",
            content: {
                title: "Corporate Training",
                description: "Corporate training is a comprehensive approach to enhancing the skills, knowledge, and capabilities of employees within a business setting. It is designed to address specific needs and objectives of the organization, aiming to improve employee performance, productivity, and job satisfaction.These training programs can cover a wide range of topics, including technical skills, such as software proficiency or industry-specific knowledge, as well as soft skills like leadership, communication, and teamwork. They can be delivered through various methods such as workshops, seminars, online courses, and hands-on training sessions.",
            },
        },
        {
            imageUrl: "/images/about-banner-sm.jpg",
            content: {
                title: "Awards",
                description: "Awards are honors or recognitions given to individuals, groups, or organizations in acknowledgment of their outstanding achievements, contributions, or excellence in a particular field or endeavor. These accolades serve to highlight and celebrate exceptional accomplishments and often carry significant prestige within the respective industries or communities.Awards can take various forms, including trophies, certificates, medals, plaques, or monetary prizes. They may be conferred by government institutions, professional associations, academic institutions, non-profit organizations, or commercial entities, depending on the context and purpose.Awards play a crucial role in motivating individuals and entities to strive for excellence, ",
            },
        },
        {
            imageUrl: "/images/433959094_1099319561215031_2527207503646285214_n.jpg",
            content: {
                title: "Celebration",
                description: "Celebration is the act of marking a significant event, achievement, or occasion with joy, enthusiasm, and festivity. It is a universal human experience that brings people together to share happiness, create lasting memories, and strengthen social bonds.Celebrations can take many forms, ranging from small gatherings among family and friends to large-scale cultural or religious festivals. They can be organized to commemorate various milestones such as birthdays, weddings, anniversaries, graduations, religious holidays, national holidays, or cultural observances.",
            },
        },
        // Add more objects for additional slides
    ];

    const handlePrev = () => {
        sliderRef.current.slickPrev(); // Call slickPrev() method on the slider reference
    };

    const handleNext = () => {
        sliderRef.current.slickNext(); // Call slickNext() method on the slider reference
    };

    const sliderRef = React.createRef(); // Create a ref to access the Slider component

    return (
        <div className='media-main-div'>
            <Navbar />
            <ScrollToTopOnMount/>
            <div className="media-banner">
                <h1 data-aos="slide-right" data-aos-duration="1000">Dr.Shajahan Aboobaker</h1>
                <h2 data-aos="slide-left" data-aos-duration="1000">GALLERY</h2>
            </div>
            <div className="media">
             
                <div className="container-fluid">
                    <div className="row images-main">
                       <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='image-div' data-aos='slide-right' data-aos-duration="1000"><img src="/images/107383109_603866720249214_307939071569738007_n.jpg" alt="" className='img1'  /></div>
                        <div className='image-div' data-aos='slide-right' data-aos-duration="1000"><img src="/images/cor3.jpg" alt="" className='img2' /></div>
                        <div className='image-div' data-aos='slide-right' data-aos-duration="1000"><img src="/images/245326491_903684670247891_9185307496393449727_n.jpg" alt="" className='img2' /></div>
                       </div>
                       <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='image-div' data-aos='slide-up' data-aos-duration="1000"><img src="/images/cor4.jpg" className='img3' alt="" /></div>
                        <div className='image-div' data-aos='slide-up' data-aos-duration="1000"><img src="/images/cor2.jpg" alt="" className='img4' /></div>
                        <div className='image-div' data-aos='slide-up' data-aos-duration="1000"><img src="/images/84358878_185359932724062_4367555005422659722_n.jpg" alt="" className='img4' /></div>
                       </div>
                       <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='image-div ' data-aos='slide-left' data-aos-duration="1000"><img src="/images/258242285_228789189357785_3749296962347436860_n.jpg" className='img5' alt="" /></div>
                        <div className='image-div' data-aos='slide-left' data-aos-duration="1000"><img src="/images/170837008_199569298361801_9078260003547241341_n.jpg" alt="" className='img6'/></div>
                        <div className='image-div' data-aos='slide-left' data-aos-duration="1000"><img src="/images/WhatsApp Image 2024-02-13 at 12.36.png" alt="" className='img6'/></div>
                       </div>
                    </div>
                </div>


            </div>

            <div className="carousel-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 carousel-section-main" data-aos="slide-right" data-aos-duration="1000">
                            <Slider {...settings} ref={sliderRef}>
                                {slides.map((slide, index) => (
                                    <div key={index}>
                                        <div className="crsl-image-card">
                                            <img src={slide.imageUrl} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="left-arrow"><img src="/images/next-golden.png" alt="" onClick={handlePrev} /></div>
                            <div className="right-arrow"><img src="/images/next-golden.png" alt="" onClick={handleNext} /></div>
                        </div>
                        <div className="col-lg-6 carouse-right" data-aos="slide-left" data-aos-duration="1000">
                            {/* Render content based on the current slide index */}
                            <h1>{slides[currentSlide].content.title}</h1>
                            <p>{slides[currentSlide].content.description}</p>
                        </div>
                    </div>
                </div>
            </div>
           <section id="foooter">
           <Footer />
           </section>
        </div>
    )
}

export default Media
