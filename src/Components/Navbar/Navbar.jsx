import AOS from 'aos';
import 'aos/dist/aos.css';
import './Navbar.scss'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {


  useEffect(() => {
    AOS.init();
}, []);
  
  
  
  return (
    <div className='Navbar-main'>
     <div className="container-fluid deskTop-Navbar">
     <div className="row navigation-bar">
        <div className="col-lg-6 col-md-6 nav-left">
            <div className="nav-logo-img" data-aos="fade-down" data-aos-duration="1000"><img src="/images/sp logo gold-01-01.png" alt="" /></div>
        </div>
        <div className="col-lg-6 col-md-6 nav-right">
            <div className="nav-items">
                <div data-aos="fade-down" data-aos-duration="1000"><Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></div>
                <div data-aos="fade-down" data-aos-duration="1200"><Link to='/about' className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link></div>
                <div data-aos="fade-down" data-aos-duration="1300"><Link to='/services' className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link></div>
                <div data-aos="fade-down" data-aos-duration="1400"><Link to='/media'  className={`nav-link ${location.pathname === '/media' ? 'active' : ''}`}>Media</Link></div>
                <div data-aos="fade-down" data-aos-duration="1500"><a href="#foooter" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</a></div>
            </div>
        </div>
      </div>
     </div>
     {/* ------------------------mobile-nav--------------- */}
     <nav className="navbar mobile-nav fixed-top" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#"><img src="/images/sp logo gold-01-01.png" className='mobile-nav-logo' alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav5" aria-controls="navbarNav5" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <HiMiniBars3BottomRight />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav5">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/' className="nav-link" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/services'>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/media'>Media</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#foooter'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    {/* ------------------------mobile-nav--------------- */}
    </div>
   
  )
}

export default Navbar
