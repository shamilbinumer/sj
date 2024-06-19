import './Footer.scss'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [status, setStatus] = useState(null);
  useEffect(() => {
    AOS.init();
}, []);


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const templateParams = {
      from_email: email,
      message: message
    };

    await emailjs.send(
      'service_0ar5egk',
      'template_ok9xc4k',
      templateParams,
      'kH_9Zh0FIzYQ0yMJz'
    );

    setStatus('Email sent successfully');
    alert(status)
    setEmail('');
    setMessage('');
  } catch (error) {
    setStatus('Error sending email');
    console.error('Error:', error);
  }
};


  return (
    <div className='container-fluid FooterMainWrapper'>
      <div className="row footer">
        <div className="col-lg-4 col-md-12 fotter-left" data-aos="slide-right" data-aos-duration="1000">
            <div><img src="/images/footer-icon.png" alt="" /></div>
            <h3>Dr.Shajahan Aboobaker</h3>
            <p><IoIosMail className='email-icon' /><a href="mailto:connectshajahan@gmail.com">connectshajahan@gmail.com</a></p>
            <p><FaPhoneAlt  className='email-icon' /><a href="tel:90375 45094">+91 90375 45094</a></p>
            <p><FaLocationDot  className='email-icon' />Perinthalmanna, Malappuram</p>
        </div>
        <div className="col-lg-4 col-md-12 footer-center" data-aos="fade-up" data-aos-duration="1000">
            <h3>Quick links</h3>
            <div><a href=""><Link to='/'>Home</Link></a></div>
            <div><Link to='/about'>About</Link></div>
            <div><a href="">Services</a></div>
            <div><Link to='/media'>Media</Link></div>
            <div><a href="">Contact</a></div>
        </div>
        <div className="col-lg-4 col-md-12 footer-right" data-aos="slide-left" data-aos-duration="1000">
            <h2>CONNECT ME</h2>
            <div className="social-icons">
                <div><a href="https://www.instagram.com/shajahanaboobaker/"><FaInstagram className='footer-social-icons' /></a></div>
                <div><a href="https://www.facebook.com/shajahanaboobakerofficial/"><FaFacebook  className='footer-social-icons' /></a></div>
                <div><a href=""><FaSquareXTwitter  className='footer-social-icons' /></a></div>
                <div><a href="https://wa.me/9037545094"><ImWhatsapp  className='footer-social-icons' /></a></div>
                <div><a href="https://www.linkedin.com/in/shajahan-aboobacker-400670108/?originalSubdomain=in"><FaLinkedinIn   className='footer-social-icons' /></a></div>
            </div>
            <div className="msg-form">
              <form action="" onSubmit={handleSubmit} >
                  <input className='email' placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <div style={{display:"flex",justifyContent:"space-between",gap:"6px",paddingTop:"10px"}}>
                    <input type="text" placeholder='Message' className="msg" value={message} onChange={(e) => setMessage(e.target.value)} required  />
                    <button >Send</button>
                  </div>
              </form>
            </div>
            <p className='cpy-rgt-txt'>Designed By <a href="https://firstlogicmetalab.com/" style={{color:"#FFC700"}}>First Logic Meta Lab PVT LTD</a> - All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
