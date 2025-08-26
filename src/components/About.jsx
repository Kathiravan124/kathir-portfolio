import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h2 className="display-5 fw-bold">About Me</h2>
        <div className="section-divider mx-auto"></div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="about-content text-center">
          <h3 className="creative-heading h4 mb-3 fst-italic">
            Front End Developer & Lifelong Learner
          </h3>

          <p className="mb-4 fs-4">
            I’m a passionate <strong>Front End Developer</strong> with a love for building 
            seamless and engaging user experiences. With hands-on experience in 
            <span className="fw-semibold"> React, JavaScript, Bootstrap, and modern web technologies</span>,  
            I enjoy turning ideas into functional, accessible, and visually appealing digital products.  
          </p>

          <p className="mb-4 fs-5">
            Beyond coding, I thrive on learning emerging tools and frameworks, 
            contributing to open-source communities, and collaborating with creative minds. 
            My mission is simple: <em>to build web applications that are not only functional but memorable.</em>
          </p>

          {/* Quick Info Section */}
          <div className="row about-info mb-4">
            <div className="col-md-6 mb-3">
              <div className="about-detail glass-card">
                <strong>
                  <i className="bi bi-person me-2 text-primary icon-animate"></i>
                  Name:
                </strong>
                <span className="ms-2 fs-5">Kathiravan</span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="about-detail glass-card">
                <strong>
                  <i className="bi bi-envelope me-2 text-primary icon-animate"></i>
                  Email:
                </strong>
                <span className="ms-2 fs-5">kdkathiravan78@gmail.com</span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="about-detail glass-card">
                <strong>
                  <i className="bi bi-telephone me-2 text-primary icon-animate"></i>
                  Phone:
                </strong>
                <span className="ms-2 fs-5">+91 94420 50688</span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="about-detail glass-card">
                <strong>
                  <i className="bi bi-geo-alt me-2 text-primary icon-animate"></i>
                  Location:
                </strong>
                <span className="ms-2 fs-5">Erode, India</span>
              </div>
            </div>
          </div>

          {/* Extra Content: Skills & Interests */}
          <div className="skills-interests mt-4">
            <h4 className="fw-bold mb-3">What I Do</h4>
            <p className="fs-5 mb-4">
              🚀 I specialize in building responsive websites, optimizing performance, 
              and creating smooth user experiences with modern technologies.  
              I love tackling challenges that push me to grow both technically and creatively.
            </p>

            <h4 className="fw-bold mb-3">Tech Stack</h4>
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              <span className="badge bg-primary fs-6 px-3 py-2">React</span>
              <span className="badge bg-secondary fs-6 px-3 py-2">JavaScript</span>
              <span className="badge bg-dark fs-6 px-3 py-2">Bootstrap</span>
              {/* <span className="badge bg-success fs-6 px-3 py-2">Node.js</span> */}
              <span className="badge bg-info text-dark fs-6 px-3 py-2">Git & GitHub</span>
              <span className="badge bg-warning text-dark fs-6 px-3 py-2">REST APIs</span>
            </div>

            <h4 className="fw-bold mb-3">Hobbies & Interests</h4>
            <p className="fs-5">
              💡 Exploring new frameworks, 🎨 designing creative UI components,  
              📚 reading about tech innovations, and ✍️ writing tutorials to help beginners.  
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;