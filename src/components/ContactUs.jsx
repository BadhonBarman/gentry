import anime from 'animejs';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [result, setResult] = useState("");

  useEffect(() => {
          anime({
            targets: '.page-title',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1200,
            delay: 0,
            easing: 'easeOutQuad',
            stagger: 150,
          });
        }, []);

    useEffect(() => {
              const targets = ['.a-tag', '.b-tag', '.c-tag'];
              
              const triggerAnimation = () => {
              
                anime({
                  targets: '.a-tag',
                  translateX: [-50, 0],
                  opacity: [0, 1],
                  duration: 1200,
                  delay: 0,
                  easing: 'easeOutQuad',
                  stagger: 150,
                });

                anime({
                  targets: '.b-tag',
                  translateX: [50, 0],
                  opacity: [0, 1],
                  duration: 1200,
                  delay: 0,
                  easing: 'easeOutQuad',
                  stagger: 150,
                });

                anime({
                  targets: '.c-tag',
                  translateY: [0, 0],
                  opacity: [0, 1],
                  duration: 1200,
                  delay: 10,
                  easing: 'easeOutQuad',
                  stagger: 150,
                });
    
              
              };
          
              const observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      triggerAnimation();
                      observer.unobserve(entry.target);
                    }
                  });
                },
                { threshold: 0.5 }
              );
          
              targets.forEach(target => {
                const element = document.querySelector(target);
                if (element) {
                  observer.observe(element);
                }
              });
          
          
              return () => {
                targets.forEach(target => {
                  const element = document.querySelector(target);
                  if (element) {
                    observer.unobserve(element);
                  }
                });
              };
          }, []);
        
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "6256b3cd-7db2-42f6-9b3f-f3f6acdc9086");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        // Reset controlled form state
        setFormData({
          name: '',
          email: '',
          comment: ''
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Network error. Please try again.");
    }
  };

  return (
    <>
    <section className="top-space-margin overflow-hidden p-0 bg-very-light-gray page-title-big-typography" style={{ marginTop: '124.984px' }}>
        <div className="container-fluid p-0">
            <div className="row justify-content-center small-screen sm-h-400px g-0">
            <div
                className="col-md-6 d-flex justify-content-center flex-column ps-7 pe-15px sm-ps-15px cover-background text-white text-md-start text-center page-title-large appear anime-child anime-complete"
                style={{
                backgroundImage: "url('/images/demo-green-energy-about-title-left-bg-01.jpg')",
                }}
                data-anime={`{"el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad"}`}
            >
                <h1 className="fw-600 mb-10px ls-minus-2px page-title">Contact</h1>
            </div>
            <div className="col-md-6">
                <div
                className="h-100 position-relative cover-background sm-pt-50px appear anime-child anime-complete"
                style={{
                    backgroundImage: "url('/images/contact1.jpg')",
                    backgroundPosition: 'bottom !important',
                }}
                data-anime={`{"el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad"}`}
                >
                </div>
            </div>
            </div>
        </div>
    </section>

    <section className="bg-very-light-green overflow-hidden">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-5 a-tag col-lg-6 md-mb-50px appear" data-anime='{"el": "childs", "translateX": [-50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad"}'>
            <div className="bg-white c-tag border-radius-6px box-shadow-quadruple-large p-14 xxl-p-10 lg-ps-8 lg-pe-8 appear">
              <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">Let's work together</span>
              <h4 className="text-dark-gray ls-minus-1px fw-700 mb-15px">Ready to help you!</h4>
              <p className="w-85 sm-w-100">We're here to help and answer any question you might have.</p>
              <div className="row row-cols-1 row-cols-sm-2">
                <div className="col last-paragraph-no-margin mb-25px">
                  <p>Call us directly?</p>
                  <a href="tel:+8801736348856" className="text-dark-gray fw-600">+8801736-348856</a>
                </div>
                <div className="col last-paragraph-no-margin mb-25px">
                  <p>Need live support?</p>
                  <a href="mailto:gentry@gentrycorp.com" className="text-dark-gray fw-600">gentry@gentrycorp.com</a>
                </div>
                {/* <div className="col last-paragraph-no-margin sm-mb-25px">
                  <p>Join growing team?</p>
                  <a href="mailto:join@gentrycorp.com" className="text-dark-gray fw-600">join@gentrycorp.com</a>
                </div> */}
                <div className="col-12 col-sm-12 last-paragraph-no-margin">
                  <p>Visit headquarters?</p>
                  <a href="https://maps.app.goo.gl/FuNWj18Qge4LEbKe6" target="_blank" className="text-dark-gray fw-600">
                  UNIT- 3A, Plot-16 & 18, Navana Centroid,<br />
Gareeb-e-Newaz Ave, Uttara, Dhaka 1230.</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 b-tag offset-xl-1 md-mb-50px sm-mb-0 appear anime-child anime-complete" data-anime='{"el": "childs", "translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad"}'>
            <h3 className="text-dark-gray ls-minus-2px fw-700">Looking for any help?</h3>
            <form action="email-templates/contact-form.php" method="post" className="contact-form-style-03" onSubmit={onSubmit}>
              <label htmlFor="exampleInputEmail1" className="form-label fs-13 text-uppercase text-dark-gray fw-600 mb-0">Enter your name*</label>
              <div className="position-relative form-group mb-20px">
                <span className="form-icon"><i className="bi bi-emoji-smile text-dark-gray"></i></span>
                <input className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required" id="exampleInputEmail1" type="text" name="name" placeholder="What's your good name" value={formData.name} onChange={handleInputChange} />
              </div>
              <label htmlFor="exampleInputEmail2" className="form-label fs-13 text-uppercase text-dark-gray fw-600 mb-0">Email address*</label>
              <div className="position-relative form-group mb-20px">
                <span className="form-icon"><i className="bi bi-envelope text-dark-gray"></i></span>
                <input className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required" id="exampleInputEmail2" type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleInputChange} />
              </div>
              <label htmlFor="comment" className="form-label fs-13 text-uppercase text-dark-gray fw-600 mb-0">Your message</label>
              <div className="position-relative form-group form-textarea mb-0">
                <textarea className="fs-15 ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control" name="comment" placeholder="Describe about your project" rows="3" value={formData.comment} onChange={handleInputChange}></textarea>
                <span className="form-icon"><i className="bi bi-chat-square-dots text-dark-gray"></i></span>
              </div>
              <div className="row mt-25px align-items-center">
                <div className="col-xl-7 col-lg-12 col-sm-7 lg-mb-30px md-mb-0">
                  <p className="mb-0 fs-14 lh-22 text-center text-sm-start">We will never collect information about you without your explicit consent.</p>
                </div>
                <div className="col-xl-5 col-lg-12 col-sm-5 text-center text-sm-end text-lg-start text-xl-end xs-mt-25px">
                  <input id="exampleInputEmail3" type="hidden" name="redirect" value="" />
                  <button className="btn btn-medium btn-dark-gray btn-rounded btn-box-shadow submit" type="submit">
                    Send message
                  </button>
                </div>
                <div className="col-12 mt-20px mb-0 text-center text-md-start">
                  <div className="form-results d-none"></div>
                  {result && (
                    <div className={`mt-3 ${result === 'Form Submitted Successfully' ? 'text-success' : 'text-danger'}`}>
                      {result}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className="p-0 bg-very-light-green">
        <div className="container-fluid">
            <div className="row justify-content-center">
            <div className="col-12 p-0 text-center">
                <h3 className="text-dark-gray ls-minus-2px fw-700">Find us in the map</h3>
                  
                <div className='map-wrapper'>
                  <div
                  id="map"
                  className="map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.0770616330674!2d90.3909578!3d23.870781899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c564a19502db%3A0xf85c480b444db94f!2sNavana%20Centroid!5e1!3m2!1sen!2sbd!4v1745227791906!5m2!1sen!2sbd"
                      style={{ width: "100%", height: "100%", border: "0" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  </div>
                  <img
                    src="images/building_map.jpg"
                    className='map-overlay'
                    alt="Building location"
                    data-no-retina=""
                  />
                </div>
              
            </div>
            </div>
        </div>
    </section>

    {/* <section className="bg-very-light-green overflow-hidden">
        <div
            className="row align-items-center justify-content-center "
            style={{}}
        >
            <div className="col-md-auto text-center text-md-end sm-mb-20px">
            <h6 className="text-dark-gray fw-600 mb-0">Connect with social media </h6>
            </div>
            <div className="col-2 d-none d-lg-inline-block">
            <span className="w-100 h-1px bg-dark-gray opacity-2 d-flex mx-auto"></span>
            </div>
        
            <div className="col-md-auto elements-social social-icon-style-04 text-center text-md-start ps-lg-0">
            <ul className="large-icon dark">
                <li className="m-0">
                <Link className="facebook" to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i><span></span>
                </Link>
                </li>
                <li className="m-0">
                <Link className="dribbble" to="http://www.dribbble.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-dribbble"></i><span></span>
                </Link>
                </li>
                <li className="m-0">
                <Link className="twitter" to="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i><span></span>
                </Link>
                </li>
                <li className="m-0">
                <Link className="instagram" to="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i><span></span>
                </Link>
                </li>
                <li className="m-0">
                <Link className="linkedin" to="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i><span></span>
                </Link>
                </li>
            </ul>
            </div>

        </div>
    </section>
 */}


    </>
  )
}
