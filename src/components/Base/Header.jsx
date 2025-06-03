import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  useEffect(() => {
    const header = document.querySelector('header');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add('sticky', 'sticky-active');
      } else {
        header.classList.remove('sticky', 'sticky-active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg header-light bg-white header-reverse" data-header-hover="light">
        <div className="container-fluid">
          <div className="col-auto">
            <NavLink className="navbar-brand" to="/">
              <img src="/logo/logo-xl.png" alt="Logo" className="default-logo" data-no-retina="" />
            </NavLink>
          </div>

          <div className="col-auto menu-order left-nav">
            <button
              className="navbar-toggler float-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/clients', label: 'Our Clients' },
                  { to: '/sister-concerns', label: 'Our Sister Concerns' },
                  { to: '/team', label: 'Our Team' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/contact', label: 'Contact' },
                ].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink className="nav-link" to={item.to} onClick={handleNavLinkClick}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-auto ms-auto ps-lg-0 d-none d-sm-flex">
            <div className="d-none d-xl-flex me-25px xl-me-0">
              <div className="d-flex align-items-center widget-text fw-600">
                <Link to="tel:+8801736348856">
                  <span className="d-inline-block align-middle me-10px bg-very-light-green h-45px w-45px lh-44 text-center rounded-circle text-base-color">
                    <i className="feather icon-feather-phone-call"></i>
                  </span>
                  <span className="d-none d-xxl-inline-block align-middle">+8801736-348856</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
