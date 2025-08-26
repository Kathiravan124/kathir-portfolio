import React from 'react';

const Hero = () => {
  const handleDownloadResume = () => {
    // In a real application, this would download an actual PDF file
    alert('Resume download functionality would be implemented here');
  };

  return (
  <section id="home" className="hero-section d-flex align-items-center text-center">
  <div className="container">
    <div className="row justify-content-center align-items-center min-vh-100">
      <div className="col-lg-8">
        <div className="hero-content">
          <h1 className="display-3 fw-bold mb-3">
            Hi, I'm <span className="gradient-name">Kathiravan</span> 👋
          </h1>
          <h2 className="h4 mb-4 text-muted typewriter">
            Front End Developer | React Enthusiast | Problem Solver
          </h2>
          <p className="lead mb-4 fs-3">
            Passionate about crafting <strong>beautiful</strong>,
            <strong> functional</strong>, and <strong> user-friendly</strong> websites
        
          and always eager to learn, innovate, and deliver high-quality digital experiences.
          </p>

          {/* Buttons */}
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              className="btn btn-primary btn-lg px-4"
              onClick={handleDownloadResume}
            >
              <i className="bi bi-download me-2"></i>
              Download Resume
            </button>
            <a
              href="#contact"
              className="btn btn-outline-primary btn-lg px-4"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <i className="bi bi-envelope me-2"></i>
              Get In Touch
            </a>
          </div>

        </div>
      </div>

      {/* Optional: Profile Image (uncomment if needed) */}
      {/* 
      <div className="col-lg-6 text-center">
        <div className="hero-image-wrapper">
          <div className="image-glow"></div>
          <img
            src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
            alt="Professional headshot"
            className="img-fluid rounded-circle shadow-lg floating-image mt-5"
            style={{ maxWidth: "400px", width: "100%" }}
          />
        </div>
      </div>
      */}
    </div>
  </div>
</section>
  );
};  
export default Hero;