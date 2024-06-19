import { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import './Index.scss'
import Modal from 'react-modal';
import { RiCloseLargeFill } from "react-icons/ri";
import Footer from '../Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount';
import { IoMdCloseCircle } from "react-icons/io";
// import axios from 'axios';
import emailjs from 'emailjs-com';

import app from '../../../firbaseConfig';
import { collection, getDocs,getFirestore } from 'firebase/firestore';





const customStyles = {

    content: {
        top: '9%',
        left: '33%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        // transform: 'translate(-50%, -50%)', 
        animation: 'zoomIn 0.3s forwards',
        display: 'flex',
        justifyContent: 'center'
    },
};



Modal.setAppElement('#root');

const Index = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        message: ''
      });
    
      const [countries, setCountries] = useState([]);

    const db=getFirestore(app)
      const getData=async()=>{
   
        const data = await getDocs(collection(db, 'Country'));
        data.forEach(doc => {
         setCountries(doc.data())
        });
        console.log(countries);
      }
    
  
    useEffect(() => {
        getData();
        AOS.init();
    }, []);
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    //   async function getCountryData() {
    //     try {
    //       const countryCollection = db.collection('Country');
    //       const snapshot = await countryCollection.get();
    //       console.log(snapshot);
    //     //   const countries = [];
    //     //   snapshot.forEach(doc => {
    //     //     countries.push({ id: doc.id, ...doc.data() });
    //     //   });
    //     //   console.log('Countries:', countries);
    //     //   return countries;
    //     } catch (error) {
    //       console.error('Error getting documents:', error);
    //     }
    //   }
      
    //   // Run the function to get data
    //   getCountryData();

      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.send('service_0ar5egk', 'template_ok9xc4k', formData, 'kH_9Zh0FIzYQ0yMJz')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
          }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send your message. Please try again later.');
          });
    
        setFormData({
          name: '',
          number: '',
          message: ''
        });
      };

    const contents = {
        services: [
            {
                id: 1,
                logo: "/images/Corporate Training.png",
                title: "Corporate Training",
                discription: "Tailored training enhances employee skills to meet company goals.",
            },
            {
                id: 2,
                logo: "/images/Business Consulting.png",
                title: "Business Consulting",
                discription: "Consulting optimizes operations and achieves goals efficiently.",
            },
            {
                id: 3,
                logo: "/images/Sales Training.png",
                title: "Sales Training",
                discription: "Boosts sales pros' skills for closing deals and driving revenue.",
            },
            {
                id: 4,
                logo: "/images/Leadership.png",
                title: "Leadership Training",
                discription: "Leadership development fosters teamwork and drives organizational growth.",
            },
            {
                id: 5,
                logo: "/images/Mind Power.png",
                title: "Mind Power Training",
                discription: " Mental exercises for personal and professional growth.",
            },
            {
                id: 6,
                logo: "/images/Public Speak.png",
                title: "Public Speak and Communication",
                discription: " Enhancing communication skills for confident and compelling messaging in diverse situations.",
            },
        ]
    }



    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            openModal();
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const sliderRef = useRef(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 900,

        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]


    };


    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };


    const sectionRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const animateValue = (id, start, end, duration) => {
        const obj = document.getElementById(id);
        const range = end - start;
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const timer = setInterval(() => {
            current += increment;
            if (current === end && id === 'Participense') {
                obj.textContent = "1 M+";
            } else {
                obj.textContent = current + "+";
            }
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    };
    
    
    const animateNumbers = () => {
        animateValue("trainingsCompleted", 900, 1000, 2000);
        animateValue("Participense", 0, 1, 2000);
        animateValue("yearsOfExperience", 0, 17, 2000);
        animateValue("SMEToForune", 400, 500, 2000);
        animateValue("Clients", 0, 100, 2000);
        animateValue("Countries", 0, 10, 2000);
    };


    // const getCountryImg = async () => {
    //     const res = await axios.get('https://shajahan.firstlogicinfolab.com/active-countries')
    //     setImage(res.data[0].imagefile);
    //     console.log(Image);
    // }
    // useEffect(() => {
    //     getCountryImg()
    // }, [])

    return (
        <div className='IndexPageMain'>
            <Navbar />
            <ScrollToTopOnMount />
            {/* --------------------------------hero-section------------------------------- */}
            <section id="heroSection">
                <div className="hero-main">
                    <div className="container-fluid">
                        <div className="row  mainbanner">
                            <div className="col-lg-7 hero-left">
                                <div className="hero-heading" data-aos="slide-right" data-aos-duration="1000">
                                    <h1><img src="/images/quote white.png" className='starting-qoute' alt="" /><span style={{ color: "#FFC700" }}>Empower </span> your voice, inspire the <span style={{ color: "#FFC700" }}>world</span><img src="/images/quote.png" alt="" className='ending-qoute' />
                                        <div>  </div></h1>
                                </div>
                                <div className="play-now-wrapper">
                                    <div>
                                        <img src="/images/play black gold.png" alt="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ zIndex: '99', cursor: "pointer" }} /></div>

                                </div>
                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-body vedio-main">
                                                <div><IoMdCloseCircle className='vedio-close' data-bs-dismiss="modal" aria-label="Close" /></div>
                                                <video width="100%" height="360" className='banner' muted autoPlay controls="false">
                                                    <source src="/Vedios/banner-vedio.mp4" type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-5 hero-right">
                                <div className="image-square-wrapper" data-aos="slide-left" data-aos-duration="1000">
                                    <div className="square">
                                        <img src="/images/Banner Image.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Enquire-btn" onClick={openModal}>
                        <img src="/images/logo spj-1.png" alt="" />
                        <div className="available-indicator"></div>
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    className='row'
                >
                    <div className='col-md-6 modalMD'>
                        <div className="modal-content-main">
                            <div className="closeBtn" onClick={closeModal}><RiCloseLargeFill className='close-btn' /></div>
                            <div className="profile"><img src="/images/WhatsApp Image 2024-02-13 at 12.36.png" alt="" /></div>
                            <h3>I am Dr.Shajahan Aboobaker</h3>
                            <p>Am helping to unleash your best version and unlock your true potential to achieve your dreams</p>
                            <div className="form">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="name-number-fields">
                                        <input type="text" placeholder='Name' name='name' className='name-field'   value={formData.name}
                                            onChange={handleChange} />
                                        <input type="text" placeholder='Number' name='number' className='number-field'  value={formData.number} onChange={handleChange} />
                                    </div>
                                    <textarea name="message" id="" placeholder='Message'   value={formData.message}
        onChange={handleChange}></textarea>
                                    <button>Enquire Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal>
            </section>
            {/* --------------------------------hero-section------------------------------- */}
            {/* ----------------------------about-us------------------------ */}
            <section id="about-section">
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
                            <div style={{ paddingTop: "15px" }}> <Link className='about-read-more' to='/about'>Read More</Link></div>
                        </p>
                        <p className="about-para-mobile">
                            Corporate trainer, psychotherapist and motivational speaker Shajahan Aboobaker started the climb to the top of the corporate ladder as an insurance sales agent and a teacher at summer camps at the age of 16.
                            <div style={{ paddingTop: "15px" }}> <Link className='about-read-more' to='/about'>Read More</Link></div>
                        </p>
                    </div>
                </div>
            </section>
            {/* ----------------------------about-us------------------------ */}
            {/* --------------------------service-section------------------ */}
            <section id="service" className='services'>
                <div className='Service-main-body'>
                    <div className="services-body">
                        <div className="service-heading" data-aos="slide-right" data-aos-duration="1000">
                            <h1>Services</h1>
                        </div>
                        <div className="container-fluid card-body">
                            <div className="row card-row" data-aos="fade-up" data-aos-duration="1000">
                                {
                                    contents.services.map((data, index) =>
                                        <div className="col-lg-4 col-md-6 col-sm-12 card-columns" key={index} >
                                            <Link to={`/service-detailPage/${data.id}`} style={{ textDecoration: "none" }}>
                                                <div className="card-details">
                                                    <div className="service-card-logo">
                                                        <img src={data.logo} alt="" />
                                                    </div>
                                                    <div className="service-card-headings">
                                                        <p>{data.title}</p>
                                                    </div>
                                                    <div className="service-card-details">
                                                        <p>{data.discription}</p>
                                                    </div>
                                                    <div className="sevice-card-arrow">
                                                        <img src="/images/next.png" alt="" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --------------------------service-section------------------ */}

            {/* ----------------------------featured-in-section--------------- */}
            <section id="featured-in">
                <div className="featuredin-wrapper">
                    <h1 data-aos="slide-right" data-aos-duration="1000">Featured in</h1>
                    <div className="row featured-in-card-wrapper">
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <a href="https://www.youtube.com/watch?v=9o-dtsOKK3c"> <div className="featured-in-card" data-aos="fade-up-right" data-aos-duration="1000"><img src="/images/480px-Josh_Talk_Logo.png" alt="" /></div></a>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="featured-in-card" data-aos="slide-up" data-aos-duration="1000"><img src="/images/Madhyamam.jpg" alt="" /></div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <a href="https://www.mid-day.com/brand-media/article/fighting-the-odds-dr-shajahan-aboobaker-helps-people-discover-the-world-of-crypto-and-blockchain-23230960"> <div className="featured-in-card" data-aos="slide-up" data-aos-duration="1000"><img src="/images/2.png" alt="" /></div></a>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <a href="https://foxinterviewer.com/business/blockchain-expert-business-coach-dr-shajahan-aboobaker-help-million-of-youths-through-his-vast-knowledge/"><div className="featured-in-card" data-aos="slide-up" data-aos-duration="1000"><img src="/images/Fox-News.png" alt="" /></div></a>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <a href="https://www.newindianexpress.com/cities/kochi/2020/Feb/22/talking-sense-2106712.html"> <div className="featured-in-card" data-aos="slide-up" data-aos-duration="1000"><img src="/images/New Indian Express Logo.png" alt="" /></div></a>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="featured-in-card" data-aos="fade-up-left" data-aos-duration="1000"><img src="/images/Gulf Madhyamam Logo.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----------------------------featured-in-section--------------- */}

            {/* ----------------------------carousel-vedio---------------------- */}
            <section id="media-crsl">
                <div className="video-carousel-body">
                    <div className="video-body">
                        <div className="video-heading">
                            <h1 data-aos="slide-right" data-aos-duration="1000">Media</h1>
                        </div>



                        <div className="carousel-wrapper">

                            <div className="carousel-arrow">
                                <div className="left-arrrow" onClick={handlePrev}>
                                    <img src="/images/next-golden.png" alt="" />
                                </div>
                                <div className="right-arrow" onClick={handleNext}>
                                    <img src="/images/next-golden.png" alt="" />
                                </div>
                            </div>

                            <Slider ref={sliderRef}  {...settings}>
                                <div>
                                    <div className="carousel-cards">
                                        <div className="carousel-image" data-aos="fade-up" data-aos-duration="1000">
                                            <img src="/images/cor1.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="carousel-cards">
                                        <div className="carousel-image" data-aos="fade-up" data-aos-duration="1000">
                                            <img src="/images/258242285_228789189357785_3749296962347436860_n.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="carousel-cards">
                                        <div className="carousel-image" data-aos="fade-up" data-aos-duration="1000">
                                            <img src="/images/cor3.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="carousel-cards">
                                        <div className="carousel-image" data-aos="fade-up" data-aos-duration="1000">
                                            <img src="/images/cor4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            {/* ----------------------------carousel-vedio---------------------- */}
            {/* ------------------------------map-section-------------------------- */}
            <section id="map-section">
                <div className="map-wrapper">
                    <div className="locations-main">
                        {/* <img src={Image} alt="" className='Armenia'/> */}
                        <img src='/images/location/India.svg' alt="" className='Armenia' />
                    </div>

                </div>
            </section>
            {/* ------------------------------map-section-------------------------- */}

            {/* ------------------------------couting-section----------------------- */}
            <section id="couting-section" ref={sectionRef}>
                <div className="couting-section-wrapper">
                    <div className="row">
                        <div className="col-lg">
                            <div className="counting-item">
                                <h3 id="trainingsCompleted">0</h3>
                                <p>Trainings Completed</p>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="counting-item">
                                <h3 id="Participense">0</h3>
                                <p>Participants</p>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="counting-item">
                                <h3 id="SMEToForune">0</h3>
                                <p>SME to Fortune</p>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="counting-item">
                                <h3 id="Clients">0</h3>
                                <p>Clients</p>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="counting-item">
                                <h3 id="Countries">0</h3>
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------------------couting-section----------------------- */}
            <section id="foooter">
                <Footer />
            </section>
        </div>
    )
}

export default Index
