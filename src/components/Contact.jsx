import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: 'bi-linkedin', color: '#0077b5' },
    { name: 'GitHub', url: '#', icon: 'bi-github', color: '#333' },
    // { name: 'Twitter', url: '#', icon: 'bi-twitter', color: '#1da1f2' },
    { name: 'Instagram', url: '#', icon: 'bi-instagram', color: '#e4405f' }
  ];

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">Get In Touch</h2>
            <div className="section-divider mx-auto"></div>
            <p className="lead">Have a question or want to work together? I'd love to hear from you!</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
                <div className="contact-info text-center p-4 bg-white rounded shadow-sm h-100">
                  <i className="bi bi-envelope display-4 text-primary mb-3"></i>
                  <h5>Email</h5>
                  <p className="mb-0">
                    <a href="mailto:kdkathiravan78@gmail.com" className="text-dark text-decoration-none">
                      kdkathiravan78@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="contact-info text-center p-4 bg-white rounded shadow-sm h-100">
                  <i className="bi bi-telephone display-4 text-primary mb-3"></i>
                  <h5>Phone</h5>
                  <p className="mb-0">
                    <a href="tel:+15551234567" className=" text-dark text-decoration-none ">
                      +91 94420 50688
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="contact-info text-center p-4 bg-white rounded shadow-sm h-100">
                  <i className="bi bi-geo-alt display-4 text-primary mb-3"></i>
                  <h5>Location</h5>
                  <p className="mb-0">India, Erode</p>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <div className="bg-white p-4 rounded shadow-sm">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">
                          Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                      ></textarea>
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12 text-center">
                <h5 className="mb-3">Follow Me</h5>
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-lg me-3 mb-2 social-btn"
                      style={{ '--social-color': link.color }}
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;