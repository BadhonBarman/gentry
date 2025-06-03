import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="pb-30px" 
      style={{
        backgroundColor: "#cedfd2",
    marginTop: "4rem"
      }}
      >
        <div className="container">
          <div className="row mb-5 xs-mb-30px">
            <div className="col-xl-5 col-md-7 sm-mb-30px order-2 order-xl-1">
              <h3 className="text-black fw-600 mb-30px ls-minus-2px">
                The most efficient medicinal logistics is here for you.
              </h3>
              <div className="row">
                <div className="col-xxl-5 col-sm-6 sm-mb-20px">
                  <span className="fs-18 fw-500 text-black d-block">Say hello</span>
                  <a className="text-dark-gray" href="mailto:gentry@gentrycorp.com">gentry@gentrycorp.com</a>
                </div>
                <div className="col-xxl-5 col-sm-6">
                  <span className="fs-18 fw-500 text-black d-block">Call anytime</span>
                  <a className="text-dark-gray" href="tel:+8801736348856">+8801736-348856</a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6 order-3 order-md-2">
              <span className="fs-18 fw-500 d-block text-black mb-5px">Information</span>
              <ul>
                <li>
                  <Link className="text-dark-gray" to="/about">Our company</Link>
                </li>
                <li>
                  <Link className="text-dark-gray" to="/clients">Our Clients</Link>
                </li>
                <li>
                  <Link className="text-dark-gray" to="/sister-concerns">Sister Concerns</Link>
                </li>
                <li>
                  <Link className="text-dark-gray" to="/team">Our Team</Link>
                </li>
                <li>
                  <Link className="text-dark-gray" to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-2 col-6 order-3 order-md-3">
              <span className="fs-18 fw-500 d-block text-black mb-5px">Socials</span>
              <ul>
                <li>
                  <Link className="text-dark-gray" to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</Link>
                </li>
                <li>
                  <Link className="text-dark-gray" to="http://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link>
                </li>
                <li>
                  <Link className="text-dark-gray" to="http://www.dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</Link>
                </li>
                <li>
                  <Link className="text-dark-gray" to="http://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link>
                </li>
                <li>
                  <Link className="text-dark-gray" to="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</Link>
                </li>
              </ul>
            </div> */}
            <div className="col-xl-5 order-1 order-xl-4 lg-mb-30px">
              <Link to="/" className="footer-logo">
                <img src="/logo/logo-xl.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="row g-0 border-top border-color-transparent-white-light"></div>
          <div className="row align-items-center footer-bottom pt-30px">
            <div className="col-md-7 last-paragraph-no-margin">
              <p className="fs-14 lh-24 w-90 sm-w-100 text-dark-gray">
                This site is protected by reCAPTCHA and the Google privacy policy and terms of service apply. You must not use this website if you disagree with any of these website standard terms and conditions.
              </p>
            </div>
            <div className="col-md-5 text-md-end sm-mt-15px last-paragraph-no-margin">
              <p className="fs-14 lh-24 text-dark-gray">
                © 2025 Gentry Corporation Ltd. Developed by
                <Link to="https://aceintelligent.tech/" target="_blank" rel="noopener noreferrer" className=""> ACE Intelligent Technologies</Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
