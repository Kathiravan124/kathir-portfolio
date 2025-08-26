import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">
              
              Kathiravan
            </h5>
            <p className="mb-3 fs-5">
              Front End Developer passionate about creating beautiful, functional, 
              and user-friendly web Developments.
            </p>
            <div className="social-links">
              <a href="#" className="text-light me-3" aria-label="LinkedIn">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-light me-3" aria-label="GitHub">
                <i className="bi bi-github fs-5"></i>
              </a>
              {/* <a href="#" className="text-light me-3" aria-label="Twitter">
                <i className="bi bi-twitter fs-5"></i>
              </a> */}
              <a href="#" className="text-light" aria-label="Instagram">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="#home" 
                  className="text-light text-decoration-none"
                  onClick={(e) => handleSmoothScroll(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#about" 
                  className="text-light text-decoration-none"
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#skills" 
                  className="text-light text-decoration-none"
                  onClick={(e) => handleSmoothScroll(e, 'skills')}
                >
                  Skills
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#projects" 
                  className="text-light text-decoration-none"
                  onClick={(e) => handleSmoothScroll(e, 'projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-light text-decoration-none"
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4 mb-4">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Frontend Development</li>
             
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-5 mb-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                kdkathiravan78@gmail.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +91 94420 50688
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                India, Erode.
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              &copy; {currentYear} Kathiravan. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              Built with <i className="bi bi-heart-fill text-danger"></i> using React & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;