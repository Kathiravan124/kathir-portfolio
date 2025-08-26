import React from 'react';

const Header = ({ toggleTheme, isDarkMode }) => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Collapse the navbar after clicking (Bootstrap 5)
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // programmatically close it
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#home">
          Kathiravan
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li className="nav-item" key={section}>
                <a
                  className="nav-link"
                  href={`#${section}`}
                  style={{ color: 'white', fontSize: '20px' }}
                  onClick={(e) => handleSmoothScroll(e, section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li className="nav-item ms-3">
              {/* Theme toggle button */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
