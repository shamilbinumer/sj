import { Link } from 'react-router-dom'
import './ServicePage.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ScrollToTopOnMount from '../ScrollToTopOnMount'

const ServicePage = () => {
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
  return (
    <div className='AboutPageMainWrapper'>
        <Navbar/>
        <ScrollToTopOnMount/>
        <section id="service" className='services'>
                <div className='Service-main-body'>
                    <div className="services-body">
                        <div className="service-banner">
                      <h1 data-aos="fade-up" data-aos-duration="1000">Services</h1>
                      <p data-aos="fade-up" data-aos-duration="1000">Craft a captivating service page banner for your training website! Emphasize the value you bring with a clear headline and concise subheading. Include a strong call to action and eye-catching visuals that showcase the transformation your training offers. Remember to keep it mobile-friendly and benefit-driven!</p>
                        </div>
                      
                        <div className="container-fluid card-body">

                            <div className="row card-row" >
                                {
                                    contents.services.map((data, index) =>

                                        <div className="col-lg-4 col-md-6 col-sm-12 card-columns" key={index}  >
                                            <Link to={`/service-detailPage/${data.id}`} style={{ textDecoration: "none" }}>
                                               <div className="card-icon">
                                                <img src={data.logo} alt="" />
                                               </div>
                                               <div className="card-heading">
                                                <h3>{data.title}</h3>
                                               </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section><Footer/>
    </div>
  )
}

export default ServicePage
