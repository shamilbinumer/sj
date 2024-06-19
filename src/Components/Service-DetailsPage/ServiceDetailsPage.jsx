
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer';
import './ServiceDetailPage.scss'
import ScrollToTopOnMount from '../ScrollToTopOnMount';

const ServiceDetailsPage = () => {

    const {id}=useParams()
    console.log(id);
   

    const contents={
        services:[
            {
                id:1,
                logo:"/images/Corporate Training.png",
                title:"Corporate Training",
                discription:"Lorem ipsum dolor sit amet, consectetur adipiscing sit elit. Donec euismod arcu massa.",
                details:"Corporate training is a comprehensive approach to enhancing the skills, knowledge, and capabilities of employees within a business setting. It is designed to address specific needs and objectives of the organization, aiming to improve employee performance, productivity, and job satisfaction.These training programs can cover a wide range of topics, including technical skills, such as software proficiency or industry-specific knowledge, as well as soft skills like leadership, communication, and teamwork. They can be delivered through various methods such as workshops, seminars, online courses, and hands-on training sessions. "
            },
            {
                id:2,
                logo:"/images/Business Consulting.png",
                title:"Business Consulting",
                discription:"Lorem ipsum dolor sit amet, consectetur adipiscing sit elit. Donec euismod arcu massa.",
                details:"Business consulting involves providing expert advice and guidance to organizations across various industries to help them improve their performance, efficiency, and overall success. Consultants analyze existing business processes, identify areas for improvement, and develop strategies and solutions to address specific challenges and achieve organizational goals.Consultants often have specialized expertise in areas such as management, finance, operations, marketing, human resources, and technology."
            },
            {
                id:3,
                logo:"/images/Sales Training.png",
                title:"Sales Training",
                discription:"Lorem ipsum dolor sit amet, consectetur adipiscing sit elit. Donec euismod arcu massa.",
                details:"Sales training is a strategic and systematic approach to equipping sales professionals with the knowledge, skills, and techniques necessary to excel in their roles. It encompasses a wide range of activities designed to enhance the effectiveness of sales teams and drive revenue growth for businesses.Detailed sales training typically begins with an assessment of the existing skills and knowledge of sales representatives.. This assessment helps identify areas for improvement and tailor the training program to meet the specific needs of the sales team. "
            },
            {
                id:4,
                logo:"/images/Leadership.png",
                title:"Leadership Training",
                discription:"Lorem ipsum dolor sit amet, consectetur adipiscing sit elit. Donec euismod arcu massa.",
                details:"Leadership training is a structured program designed to develop and enhance the leadership skills, competencies, and behaviors of individuals within an organization. It aims to empower participants with the knowledge, tools, and techniques necessary to effectively lead teams, drive organizational change, and achieve strategic goals.These training programs typically cover a wide range of topics relevant to leadership development, including communication skills, conflict resolution, decision-making, emotional intelligence, strategic thinking, and team building. "
            },
            {
                id:5,
                logo:"/images/Mind Power.png",
                title:"Mind Power Training",
                discription:"Lorem ipsum dolor sit amet, consectetur adipiscing sit elit. Donec euismod arcu massa.",
                details:"Mind power training focuses on harnessing the full potential of the human mind through various techniques and exercises aimed at enhancing cognitive abilities, mental clarity, focus, and overall well-being. This training delves into understanding the power of thoughts and beliefs in shaping one's reality, and it provides tools to optimize mental processes for personal and professional growth.Mind power training often draws from principles of neuroscience, psychology, and ancient wisdom traditions to offer a holistic approach to mental empowerment. "
            },
            {
                id:6,
                logo:"/images/Public Speak.png",
                title:"Public Speak and Communication",
                discription:"Lorem ipsum dolor sit amet, consectetur adipiscing sit elit. Donec euismod arcu massa.",
                details:"Public speaking and communication are essential skills that empower individuals to effectively convey their messages to diverse audiences in various settings.Public speaking involves the art of delivering presentations, speeches, or talks to inform, persuade, inspire, or entertain an audience. It encompasses not only verbal communication but also nonverbal cues such as body language, gestures, and facial expressions."
            },
        ]

    }
    const serviceDetails =contents.services.find(service => service.id.toString() === id);

  return (
    <>
    <Navbar/>
    <div>
        
         <ScrollToTopOnMount/>

   
<div className="Service-detailPage-main">
    <div className="banner">
        <h1><span style={{color:"#FFC700"}}>Empower </span> Your Business with Our Comprehensive Training and<span style={{color:"#FFC700"}}> Consulting Solutions</span>.</h1>
    </div>
   <div className="container-fluid">
   <div className="row about-wrapper">
   <div className="col-lg-6 col-md-6 col-sm-12 about-right" data-aos="slide-right" data-aos-duration="1300">
                                <h1 >{serviceDetails.title}</h1>
                                <p className='about-para-desktop'>{serviceDetails.details}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 about-left">
                            <div className="image-main" data-aos="slide-left" data-aos-duration="1300">
                                <div className="border-2"></div>
                                <div className="border-1"></div>
                                <div className="aboutimage"><img src="/images/port.jpeg" alt="" />
                                    <div className="play-icon">
                                        <img src="/images/Play Button Circle Vid.png" alt="" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    

                </div>
   </div>
</div>
<Footer/>
</div>
    </>
  )
}

export default ServiceDetailsPage
