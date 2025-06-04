import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import 'swiper/css';
import ClientSlide from './ClientSlide';
import anime from 'animejs';
import OurClientHome from './OurClientHome';

export default function Home() {
    // Add form state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        comment: ''
    });
    const [result, setResult] = useState("");

    // Add form handling functions
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
                    phone: '',
                    subject: '',
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

    const sliderContent = [
        {
          id: 1,
          title: 'Preserving Chemical Solutions',
          subtitle: 'Connecting health with reliability',
          button1Text: 'Learn More',
          button1Link: 'about-us.html',
          button2Text: 'Our Services',
          button2Link: 'services.html',
          image: 'images/demo-green-energy-slider-left-01.jpg',
          backgroundImage: 'images/slider3.jpg',
        },
        {
          id: 2,
          title: 'Welcome to Gentry Corporation',
          subtitle: 'Taking quality, delivering trust',
          button1Text: 'Learn More',
          button1Link: 'about-us.html',
          button2Text: 'Our Services',
          button2Link: 'services.html',
          image: 'images/demo-green-energy-slider-left-01.jpg',
          backgroundImage: 'images/slider1.jpg',
        },
        {
          id: 3,
          title: 'Excellence in Pharmaceuticals Supply',
          subtitle: 'Supplying premium Medicinal solutions.',
          button1Text: 'Learn More',
          button1Link: 'about-us.html',
          button2Text: 'Our Services',
          button2Link: 'services.html',
          image: 'images/demo-green-energy-slider-left-01.jpg',
          backgroundImage: 'images/slider2.jpg',
        }
      ];
      

  
    
   useEffect(() => {
          const targets = ['.w-tag', '.a-tag', '.b-tag', '.c-tag', '.d-tag', '.e-tag', '.f-tag','.g-tag','.h-tag','.i-tag','.j-tag'];
          
          const triggerAnimation = () => {
            
            anime({
              targets: '.w-tag',
              translateX: [30, 0],
              opacity: [0, 1],
              duration: 600,
              delay: 0,
              easing: 'easeOutQuad',
              stagger: 150,
            });

            anime({
                targets: '.a-tag',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 0,
                easing: 'easeOutQuad',
                stagger: 150,
              });
        
              anime({
                targets: '.b-tag',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 250,
                easing: 'easeOutQuad',
                stagger: 150,
              });
        
              anime({
                targets: '.c-tag',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 450,
                easing: 'easeOutQuad',
                stagger: 150,
              });

              anime({
                targets: '.d-tag',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 0,
                easing: 'easeOutQuad',
                stagger: 150,
              });

              anime({
                targets: '.e-tag',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 200,
                easing: 'easeOutQuad',
                stagger: 150,
              });

              anime({
                targets: '.f-tag',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 350,
                easing: 'easeOutQuad',
                stagger: 250,
              });

              anime({
                targets: '.g-tag',
                translateX: [-15, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 0,
                easing: 'easeOutQuad',
                stagger: 150,
              });

              anime({
                targets: '.h-tag',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 0,
                easing: 'easeOutQuad',
                stagger: 150,
              });

              anime({
                targets: '.i-tag',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 800,
                delay: 100,
                easing: 'easeOutQuad',
                stagger: 250,
              });

              anime({
                targets: '.j-tag',
                translateX: [20, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 100,
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


      useEffect(() => {
        const targets = ['.k-tag', '.l-tag', '.m-tag', '.n-tag', '.mn-tag'];
        
        const triggerAnimation = () => {
          
          anime({
            targets: '.k-tag',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            delay: 0,
            easing: 'easeOutQuad',
            stagger: 150,
          });
          anime({
            targets: '.l-tag',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 100,
            easing: 'easeOutQuad',
            stagger: 250,
          });

          anime({
            targets: '.m-tag',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            delay: 0,
            easing: 'easeOutQuad',
            stagger: 150,
          });
          anime({
            targets: '.n-tag',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            delay: 100,
            easing: 'easeOutQuad',
            stagger: 250,
          });


          anime({
            targets: '.mn-tag',
            translateX: [30, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 100,
            easing: 'easeOutQuad',
            stagger: 850,
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

      const [slideNumber, setSlideNumber] = useState(1);
      const isAnimationInProgress = useRef(false);
    
      const sliderAnimation = () => {
       
        if (isAnimationInProgress.current) return;
    
        isAnimationInProgress.current = true;
    
        const targets = [".p-tag", ".q-tag", ".r-tag"];

        anime({
          targets: targets[0],
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 600,
          delay: 0,
          easing: "easeOutQuad",
          stagger: 150,
          complete: () => {
            isAnimationInProgress.current = false;
          },
        });
    
        anime({
          targets: targets[1],
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 600,
          delay: 250,
          easing: "easeOutQuad",
          stagger: 150,
        });
    
        anime({
          targets: targets[2],
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 600,
          delay: 450,
          easing: "easeOutQuad",
          stagger: 150,
        });
      };
    
      useEffect(() => {
        sliderAnimation();
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                sliderAnimation();
              }
            });
          },
          { threshold: 0.5 }
        );
    
        const targets = [".p-tag", ".q-tag", ".r-tag"];
    
  
        targets.forEach((selector) => {
          const element = document.querySelector(selector);
          if (element) observer.observe(element);
        });
    
        return () => observer.disconnect();
      }, [slideNumber]);

      const [cursorStyle, setCursorStyle] = useState({ opacity: 0, left: 0, top: 0 });

      
  // useEffect(() => {
  //   let mouseX = 0;
  //   let mouseY = 0;
  //   let cursorX = 0;
  //   let cursorY = 0;
  //   const speed = 0.15; // Adjust speed for smoother motion

  //   const handleMouseMove = (e) => {
  //     const heroSection = document.querySelector(".hero-section");

  //     if (heroSection && heroSection.contains(e.target)) {
  //       mouseX = e.clientX;
  //       mouseY = e.clientY;
  //       setCursorStyle((prev) => ({ ...prev, opacity: 1 })); // Show cursor
  //     }
  //   };

  //   const handleMouseLeave = () => {
  //     setCursorStyle((prev) => ({ ...prev, opacity: 0 })); // Hide cursor when leaving hero section
  //   };

  //   const animateCursor = () => {
  //     cursorX += (mouseX - cursorX) * speed;
  //     cursorY += (mouseY - cursorY) * speed;

  //     setCursorStyle((prev) => ({
  //       ...prev,
  //       left: cursorX,
  //       top: cursorY,
  //     }));

  //     requestAnimationFrame(animateCursor);
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);
  //   document.addEventListener("mouseleave", handleMouseLeave);
  //   document.querySelector(".hero-section")?.addEventListener("mouseleave", handleMouseLeave);

  //   animateCursor(); // Start smooth animation loop

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     document.removeEventListener("mouseleave", handleMouseLeave);
  //     document.querySelector(".hero-section")?.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);
      

      
  return (
    <>  
        <section
      className="p-0 mt-6 top-space-margin hero-section position-relative overflow-hidden"
      style={{ marginTop: "124.984px" }}
    >
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          el: ".swiper-number",
          clickable: true,
          renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
        }}
        navigation={{
          nextEl: ".slider-one-slide-next-1",
          prevEl: ".slider-one-slide-prev-1",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        effect="slide"
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        className="swiper full-screen swiper-number-pagination-style-01 md-h-auto magic-cursor"
        style={{ height: "840px" }}
        onSlideChange={(swiper) => {
            setSlideNumber(swiper.activeIndex);
          }}
      >
        {sliderContent.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="container-fluid h-100 g-0">
              <div className="row h-100 p-0">
                <div
                  className="col-xxl-5 col-lg-6 text-white bg-primary cover-background ps-6 xxl-ps-4 sm-ps-15px order-2 order-lg-1 md-pt-50px md-pb-15 xs-pb-20"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div
                    className="d-flex justify-content-center align-items-lg-start align-items-center text-lg-start text-center flex-column h-100 anime-child anime-complete"
                    style={{ transition: "none" }}
                  >
                    <span className="p-tag fs-15 fw-500 ls-05px mb-20px d-inline-block border-bottom border-2 border-color-transparent-white text-uppercase appear">
                      {slide.title}
                    </span>
                    <div className="q-tag fs-75 lg-fs-55 fw-600 ls-minus-2px md-w-80 sm-w-100 xs-w-90 appear">
                      <span>{slide.subtitle.split(",")[0]}</span>
                      <span className="position-relative z-index-1">
                        {slide.subtitle.split(",")[1]}
                        <img
                          src="images/gentry-highlight-separator.svg"
                          alt=""
                          className="position-absolute bottom-5px left-0px w-100 z-index-minus-1"
                          data-no-retina=""
                        />
                      </span>
                    </div>
                    {/* <div className="r-tag d-inline-block mt-45px sm-mt-30px appear">
                      <Link
                        to={slide.button1Link}
                        className="btn btn-extra-large btn-white btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon"
                      >
                        <span>
                          <i className="feather icon-feather-thumbs-up"></i>
                          <span
                            className="btn-double-text ls-minus-05px"
                            data-text={slide.button1Text}
                          >
                            {slide.button1Text}
                          </span>
                        </span>
                      </Link>
                      <Link
                        to={slide.button2Link}
                        className="btn btn-link btn-hover-animation-switch fw-500 btn-extra-large text-white btn-icon-left xs-mt-15px"
                      >
                        <span>
                          <span className="btn-text">{slide.button2Text}</span>
                          <span className="btn-icon">
                            <i className="feather icon-feather-box"></i>
                          </span>
                          <span className="btn-icon">
                            <i className="feather icon-feather-box"></i>
                          </span>
                        </span>
                      </Link>
                    </div> */}
                  </div>
                </div>
                <div
                  className="col-xxl-7 col-lg-6 cover-background sm-background-position-top-center order-1 order-lg-2 md-h-500px sm-h-400px"
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
{/* 
<div
      // className="custom-cursor"
      style={{
        position: "fixed",
        width: "80px",
        height: "80px",
        backgroundColor: "black",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        zIndex: 999999,
        fontSize: "14px",
        pointerEvents: "none",
        transition: "opacity 0.2s ease",
        left: `${cursorStyle.left}px`,
        top: `${cursorStyle.top}px`,
        opacity: cursorStyle.opacity,
        gap: "12px",
      }}
    >
      <i class="fa-solid fa-chevron-left"></i>
      <i class="fa-solid fa-chevron-right"></i>
    </div> */}


      </Swiper>

      {/* <div className="swiper-pagination w-auto left-0 md-right-0px text-center swiper-pagination-clickable swiper-number fs-14 ps-6 xxl-ps-4 md-ps-0 swiper-pagination-bullets swiper-pagination-horizontal"></div> */}
        </section>

        {/* <section>
            <div className="container">
                <div className="row justify-content-center mb-6 md-mb-50px">
                <div className="col-lg-7 col-12 md-mb-35px last-paragraph-no-margin">
                    <div className="mb-10px">
                    <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
                    <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">About Our Services</span>
                    </div>
                    <h2 className="text-dark-gray fw-700 ls-minus-2px">Leading Pharmaceutical & Chemical Supplier.</h2>
                    <p className="w-85 lg-w-100">
                    At <span className="text-base-color fw-500">Gentry Corporation</span>, we harness the power to deliver medicine and chemicals of all types from anywhere to anywhere in the most effective manner through robust manufacturing processes to deliver high-quality pharmaceutical products and chemical solutions that drive health, safety, and progress across global markets.
                    </p>
                </div>
                <div className="col-xl-4 col-lg-5 offset-xl-1 col-12">
                    <div className="border-radius-10px overflow-hidden">
                    <div className="p-30px bg-light-gray text-center">
                        <span className="fs-24 ls-minus-05px fw-600 text-dark-gray">Since 1985, our partners have trusted us to deliver excellence.</span>
                    </div>
                    <div className="feature-box feature-box-left-icon-middle bg-base-color p-8 overflow-hidden last-paragraph-no-margin">
                        <div className="feature-box-icon me-15px">
                        <i className="fas fa-shipping-fast fa-2x text-white"></i>
                        </div>
                        <div className="feature-box-content">
                        <span className="d-inline-block fs-45 xl-fs-30 lg-fs-24 text-white fw-700 ls-minus-2px">1,200,000+</span>
                        <p className="text-white fs-18">Products Delivered</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>


                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mb-6 sm-mb-50px">
                <div className="col custom-icon-with-text-style-02 border-end xs-border-end-0 md-mb-30px">
                    <div className="feature-box last-paragraph-no-margin">
                    <div className="feature-box-icon">
                        <i className="fa-solid fa-suitcase-medical text-base-color mb-30px fs-30"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="d-block fs-20 fw-600 text-dark-gray mb-10px">Effective Supply Chain</span>
                        <p className="w-80 xl-w-100 mx-auto">Our advanced formulations set new standards in efficacy and safety.</p>
                    </div>
                    </div>
                </div>

                <div className="col custom-icon-with-text-style-02 border-end md-border-end-0 md-mb-30px">
                    <div className="feature-box last-paragraph-no-margin">
                    <div className="feature-box-icon">
                        <i className="fas fa-globe fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="d-block fs-20 fw-600 text-dark-gray mb-10px">Global Expertise</span>
                        <p className="w-80 xl-w-100 mx-auto">Leveraging international standards to delivering to markets worldwide.</p>
                    </div>
                    </div>
                </div>

                <div className="col custom-icon-with-text-style-02 border-end xs-border-end-0 xs-mb-30px">
                    <div className="feature-box last-paragraph-no-margin">
                    <div className="feature-box-icon">
                        <i className="fas fa-handshake fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="d-block fs-20 fw-600 text-dark-gray mb-10px">Commercial Solutions</span>
                        <p className="w-80 xl-w-100 mx-auto">Ensuring efficient supply chains and product delivery in time.</p>
                    </div>
                    </div>
                </div>

                <div className="col custom-icon-with-text-style-02">
                    <div className="feature-box last-paragraph-no-margin">
                    <div className="feature-box-icon">
                        <i className="fas fa-microscope fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="d-block fs-20 fw-600 text-dark-gray mb-10px">R&amp;D Excellence</span>
                        <p className="w-80 xl-w-100 mx-auto">Pioneering research to drive the next generation of logistics architecture.</p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </section> */}



      <section style={{ padding: '25px 0', background: '#fff' }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-auto text-center">
              <img
                src="https://biaa.org.bd/wp-content/uploads/2018/07/biaa.gif"
                alt="BIAA logo"
                style={{ width: '100px', height: 'auto' }}
                data-no-retina
              />
            </div>
            <div className="col-auto text-center fs-6">
              <p style={{ margin: 0, fontSize: '22px', fontWeight: 500, color: '#333' }}>
                Member of{' '}
                <a
                  href="https://biaa.org.bd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: '#007bff' }}
                >
                  Bangladesh Indenting Agents’ Association (BIAA)
                </a>
              </p>
            </div>
            <div className="col-auto text-center">
              <img
                src="images/logo.png"
                alt="Gentry logo"
                style={{ width: '70px', height: 'auto' }}
                data-no-retina
              />
            </div>
          </div>
        </div>
      </section>


    <section>
      <div className="container">
        <div className="row justify-content-center mb-6 md-mb-50px">
          <div className="col-lg-7 col-12 md-mb-35px last-paragraph-no-margin appear anime-child anime-complete" data-anime='{"el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad"}'>
            <div className="mb-10px a-tag">
              <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">About Our Services</span>
            </div>
            <h2 className="text-dark-gray fw-700 ls-minus-2px b-tag">Leading Pharmaceutical &amp; Chemical Supplier.</h2>
            <p className="w-85 lg-w-100 c-tag">
              <span className="text-base-color fw-500">Gentry Corporation</span> delivers APIs and intermediates for human use, veterinary use, sourcing exclusively from all over the world to supply trusted pharmaceutical partners in Bangladesh. With over 40 years of experience, we are committed to providing high-quality products and solutions, ensuring the highest standard of service.
            </p>
          </div>
          <div className="col-xl-4 col-lg-5 offset-xl-1 col-12 b-tag">
            <div className="border-radius-10px overflow-hidden appear anime-complete" data-anime='{"translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad"}'>
              <div className="p-30px bg-light-gray text-center">
                <span className="fs-24 ls-minus-05px fw-600 text-dark-gray">Since 1984, our partners have trusted us to deliver excellence.</span>
              </div>
              <div className="feature-box feature-box-left-icon-middle bg-base-color p-8 overflow-hidden last-paragraph-no-margin">
                <div className="feature-box-icon me-15px">
                  <i className="fa-sharp fa-solid fa-ship fa-2x text-white"></i>
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fs-45 xl-fs-30 lg-fs-24 text-white fw-700 ls-minus-2px">1,200,000+</span>
                  <p className="text-white fs-18">Products Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* misson , vission */}
      <section className="cover-background">
        <div className="container">
          {/* mission */}
          <div className="row mb-4 text-center">
            <div className="col">
              <h2 className="fw-700 mb-2 text-dark-gray ls-minus-2px sm-mb-10 k-tag">Our Mission</h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mb-6 l-tag">
            {[
              { icon: "fa-flask", title: "Quality Pharmaceutical Ingredients", text: "Delivering top-tier APIs to enhance global health standards." },
              { icon: "fa-globe", title: "Global Network", text: "Sourcing globally from trusted suppliers to ensure superior quality." },
              { icon: "fa-handshake", title: "Customer-Centric Solutions", text: "Optimizing supply chains for reliable and timely delivery." },
              { icon: "fa-microscope", title: "Continuous Innovation", text: "Advancing research to lead healthcare developments." }
            ].map((item, index) => (
              <div className="col" key={index}>
                <div className="feature-box text-center">
                  <div className="feature-box-icon">
                    <i className={`fas ${item.icon} fa-2x text-base-color mb-30px`}></i>
                  </div>
                  <div className="feature-box-content">
                    <span className="fs-20 fw-600 text-dark-gray mb-10px">{item.title}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* vision */}
          <div className="row mb-4 text-center">
            <div className="col">
              <h2 className="fw-700 mb-2 text-dark-gray ls-minus-2px sm-mb-10 k-tag">Our Vision</h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mb-6 l-tag">
            {[
              { icon: "fa-flask", title: "Leadership in APIs", text: "Becoming the benchmark in pharmaceutical ingredients worldwide." },
              { icon: "fa-globe", title: "Global Influence", text: "Establishing global standards for excellence and innovation." },
              { icon: "fa-handshake", title: "Operational Excellence", text: "Streamlining operations for exceptional efficiency." },
              { icon: "fa-microscope", title: "Future-Driven Research", text: "Committed to pioneering healthcare advancements." }
            ].map((item, index) => (
              <div className="col" key={index}>
                <div className="feature-box text-center">
                  <div className="feature-box-icon">
                    <i className={`fas ${item.icon} fa-2x text-base-color mb-30px`}></i>
                  </div>
                  <div className="feature-box-content">
                    <span className="fs-20 fw-600 text-dark-gray mb-10px">{item.title}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>



        {/* 
        <section className="p-0">
            <div className="container-fluid p-0">
                <div className="row g-0">
            
                <div
                    className="col-xxl-7 col-lg-6 cover-background md-h-600px sm-h-400px"
                    style={{ backgroundImage: 'url("images/img1.jpg")' }}
                >
                    <a
                    href="https://www.youtube.com/watch?v=6a06M7Ayx_w"
                    className="absolute-middle-center bg-white d-inline-block rounded-circle video-icon-box video-icon-extra-large popup-youtube"
                    >
                    <span>
                        <span className="video-icon">
                        <i className="fa-solid fa-play text-green"></i>
                        <span className="video-icon-sonar">
                            <span className="video-icon-sonar-bfr bg-white"></span>
                        </span>
                        </span>
                    </span>
                    </a>
                </div>
     
                <div className="col-xxl-5 col-lg-6 bg-very-light-green p-6 xl-p-4 md-p-50px sm-p-30px">
                    <div className="mb-10px">
                    <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
                    <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">
                        What we do
                    </span>
                    </div>
                    <h3 className="text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100">
                    Provide efficient distribution networks.
                    </h3>
                    <p className="w-80 sm-w-100">
                    Leverage advanced research and state-of-the-art manufacturing, our
                    services adhere to the highest quality and safety standards in the
                    pharmaceutical and chemical sector.
                    </p>
                    <div className="mb-20px">
                  
                    <div className="icon-with-text-style-08 mb-10px">
                        <div className="feature-box feature-box-left-icon-middle">
                        <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                            <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
                        </div>
                        <div className="feature-box-content">
                            <span className="text-dark-gray fw-600">
                            Uncompromised efficiency control.
                            </span>
                        </div>
                        </div>
                    </div>
              
                    <div className="icon-with-text-style-08">
                        <div className="feature-box feature-box-left-icon-middle">
                        <div className="feature-box-icon feature-box-icon-rounded w-40px h-40px bg-white box-shadow-medium-bottom rounded-circle me-10px">
                            <i className="fa-solid fa-check fs-14 text-dark-gray"></i>
                        </div>
                        <div className="feature-box-content">
                            <span className="text-dark-gray fw-600">
                            Driving innovation through R&D.
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="d-inline-flex flex-wrap">
                    <a
                        href="about-us.html"
                        className="btn btn-extra-large btn-base-color btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon mt-15px"
                    >
                        <span>
                        <span>
                            <i className="feather icon-feather-thumbs-up"></i>
                        </span>
                        <span className="btn-double-text ls-minus-05px" data-text="Discover more">
                            Discover more
                        </span>
                        </span>
                    </a>
                    <div className="feature-box feature-box-left-icon-middle mt-15px">
                        <div className="feature-box-icon feature-box-icon-rounded bg-white box-shadow-medium-bottom w-65px h-65px rounded-circle me-10px">
                        <i className="feather icon-feather-phone-call icon-extra-medium text-dark-gray"></i>
                        </div>
                        <div className="feature-box-content">
                        <span className="d-block fs-14">Have any questions?</span>
                        <a
                            href="tel:+8802-7912936"
                            className="d-block text-dark-gray text-dark-gray-hover fs-22 fw-700 ls-minus-1px"
                        >
                            +8802-7912936
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section> */}

        <section className="p-0">
            <div className="container-fluid p-0">
                <div className="row g-0">
                <div
                    className="col-xxl-4 g-tag col-lg-4 cover-background md-h-600px sm-h-400px"
                    style={{ backgroundImage: "url('images/img1.jpg')" }}
                >
                    <Link
                    href="https://www.youtube.com/watch?v=6a06M7Ayx_w"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    className="absolute-middle-center bg-white d-inline-block rounded-circle video-icon-box video-icon-extra-large popup-youtube"
                    >
                    <span>
                        <span className="video-icon">
                        <i className="fa-solid fa-play text-green"></i>
                        <span className="video-icon-sonar">
                            <span className="video-icon-sonar-bfr bg-white"></span>
                        </span>
                        </span>
                    </span>
                    </Link>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content background-transparent">
                            <div className="mfp-wrapper">
                                <div className="mfp-content">
                                    <div className="mfp-iframe-scaler" style={{ position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden", maxWidth: "100%" }}>
                                    <div className="mfp-close"></div>
                                    <iframe 
                                        className="mfp-iframe" 
                                        src="//www.youtube.com/embed/VwTVB0Mdt_4?autoplay=1" 
                                        allowFullScreen
                                        style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                                    ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button title="Close (Esc)" type="button" data-bs-dismiss="modal" className="mfp-close">×</button>
                </div>


                <div
                    className="col-xxl-8 col-lg-8 bg-very-light-green p-6 xl-p-4 md-p-50px sm-p-30px appear anime-child anime-complete"
                >
                    <div className="mb-10px d-tag">
                    <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
                    <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">What we do</span>
                    </div>
                    <h3 className="e-tag text-dark-gray fw-700 ls-minus-2px w-85 xxl-w-100">
                    Provide efficient distribution networks.
                    </h3>
                    <p className="f-tag w-80 sm-w-100">
                    Our primary focus at Gentry Corporation is sourcing and providing the highest quality active pharmaceutical ingredients (APIs) and intermediates. We scour the global market to identify and procure materials that meet the stringent requirements of our pharmaceutical partners. Whether it's fulfilling specific needs or discovering new and innovative materials, our dedication to excellence ensures we deliver unparalleled products to the market. This meticulous approach guarantees that our clients receive the best possible solutions, maintaining our reputation as a leading supplier in the industry.
                    </p>
                </div>
                </div>
            </div>
        </section>

        <section className="pb-8 sm-pb-50px position-relative overflow-hidden" style={{ backgroundColor: "#FDFCFD" }}>
            <div className="container">
            <div className="row mb-6 text-center appear anime-complete">
  <div className="col">
    <span className="m-tag fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">
      A Global Leader In Pharmaceutical logistics
    </span>
    <h2 className="n-tag fw-700 mb-0 text-dark-gray ls-minus-2px">Discover Our Global Impact</h2>
  </div>
</div>

<div className="row align-items-center justify-content-between text-lg-start text-center">
  <div
    className="col-md-6 col-lg-6 col-xxl-6 lg-mb-6 sm-mb-50px position-relative appear anime-complete"
    data-anime='{"opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad"}'
  >
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%", paddingLeft: "10px", paddingRight: "10px" }}
    >
      <img
        src="images/logo.gif"
        alt=""
        className="rotating-logo"
        style={{ width: "20rem", maxWidth: "100%" }}
        data-no-retina=""
      />
    </div>
  </div>

  <div className="col-md-6 col-lg-6 col-xxl-6 lg-ms-0 mn-tag md:rotate-below-text text-center appear anime-child anime-complete">
    <div className="row justify-content-center">
      {[
        { value: 200, text: "Logistic solutions delivered" },
        { value: 150, text: "Pharma clients served" },
        { value: "350+", text: "Categories of Products Delivered" },
        { value: 54, text: "Global partners worldwide" },
      ].map((item, index) => (
        <div key={index} className="col-6 col-md-6 mb-4">
          <h2
            className={`fw-700 text-dark-gray ls-minus-3px mb-5px counter appear`}
            style={item.value === "350+" ? { marginLeft: "18px" } : {}}
            data-speed="2000"
            data-to={item.value}
          >
            {item.value}
          </h2>
          <span className="d-inline-block lh-22 w-85 lg-w-60">{item.text}</span>
        </div>
      ))}
    </div>
  </div>
</div>

            </div>
            <div className="position-absolute bottom-minus-40px lg-bottom-minus-20px text-center w-100 fs-250 xxl-fs-200 xl-fs-180 lg-fs-140 d-none d-md-block text-gradient-light-green-white z-index-minus-2 ls-minus-8px fw-700 appear anime-complete" data-anime='{"translateY": [30, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad"}'>
                Excellence
            </div>
        </section>


        {/* <section className="pb-14 sm-pb-50px position-relative overflow-hidden" style={{ backgroundColor: "#FDFCFD" }}>
            <div className="container">
                <div className="row mb-6 text-center">
                <div className="col">
                    <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">
                    A Global Leader In Pharmaceutical logistics
                    </span>
                    <h2 className="fw-700 mb-0 text-dark-gray ls-minus-2px">Discover Our Global Impact</h2>
                </div>
                </div>
                <div className="row align-items-center justify-content-center text-lg-start text-center">
                <div className="col-xl-4 col-lg-5 col-md-9 lg-mb-6 sm-mb-50px">
                    <i className="fa-regular fa-user-doctor-hair mb-20px" style={{ fontSize: "50px", color: "black", marginLeft: "10px", fontWeight: "500" }}></i>
                    <h4 className="fw-700 text-dark-gray ls-minus-1px mb-20px">Advancing Logistics in Healthcare Through Efficiency</h4>
                    <p className="mb-35px w-90 lg-w-100">
                    Driven by rigorous research and precision manufacturing, our solutions set the benchmark for quality, safety, and efficiency in the global pharmaceutical arena.
                    </p>
                    <a href="services.html" className="btn btn-large btn-dark-gray btn-rounded btn-switch-text btn-box-shadow">
                    <span>
                        <span className="btn-double-text" data-text="View services">View Services</span>
                        <span><i className="feather icon-feather-arrow-right"></i></span>
                    </span>
                    </a>
                </div>
                <div className="col-xl-5 col-lg-7 lg-mb-6 sm-mb-50px">
                    <img src="images/logo.gif" alt="" className="position-absolute top-50 start-50 translate-middle rotating-logo" style={{ width: "20rem" }} />
                </div>
                <div className="col-xl-2 ms-6 lg-ms-0 rotate-below-text">
                    <div className="row justify-content-center">
                    <div className="col-lg-auto mb-50px lg-mb-30px">
                        <h2 className="fw-700 text-dark-gray ls-minus-3px mb-5px counter" data-speed="2000" data-to="350">350</h2>
                        <span className="d-inline-block lh-22 w-85 lg-w-60">New Logistic Networks developed</span>
                    </div>
                    <div className="col-lg-auto mb-50px lg-mb-30px">
                        <h2 className="fw-700 text-dark-gray ls-minus-3px mb-5px counter" data-speed="2000" data-to="1250">1250</h2>
                        <span className="d-inline-block lh-22 w-85 lg-w-60">Healthcare providers served</span>
                    </div>
                    <div className="col-lg-auto">
                        <h2 className="fw-700 text-dark-gray ls-minus-3px mb-5px counter" data-speed="2000" data-to="87">87</h2>
                        <span className="d-inline-block lh-22 w-85 lg-w-60">Industry awards received</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="position-absolute bottom-minus-40px lg-bottom-minus-20px text-center w-100 fs-250 xxl-fs-200 xl-fs-180 lg-fs-140 d-none d-md-block text-gradient-light-green-white z-index-minus-2 ls-minus-8px fw-700" style={{}}>Excellence</div>
        </section> */}

        <OurClientHome/>

        {/* <section>
            <div className="container">
                <div className="row text-center justify-content-center">
                <div className="col-xxl-6 col-lg-8 mb-4 xs-mb-30px">
                
                    <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">
                    A Global Leader in Pharmaceutical Logistics Services
                    </span>
                    <h3 className="fw-700 mb-0 text-dark-gray ls-minus-1px">
                    Powering Health Related Logistics & Supply Chain Innovations Worldwide
                    </h3>
                </div>
                <div className="col-12">
                    <img src="images/demo-green-energy-home-img-04.jpg" alt="Global Pharmaceutical Distribution" className="w-100" />
                </div>
                </div>
            </div>
        </section> */}

        <section className="pt-0 mt-8">
            <div className="container">
                <div className="row">
      
                <div className="col-xxl-4 col-lg-5 md-mb-40px d-flex flex-column">
                    <h3 className="fw-700 h-tag text-dark-gray ls-minus-1px mb-20px w-85 xs-w-100">
                    We’d Love to Hear from You
                    </h3>
                    <p className="mb-35px w-85 i-tag sm-w-100">
                    Whether you’re seeking our latest pharmaceutical services or have questions about our global distribution network, our team is here to help.
                    </p>
                    <div className="feature-box i-tag feature-box-left-icon-middle mt-auto">
                    <div className="me-15px" style={{ fontSize: '25px' }}>
                        <i className="fa-solid fa-phone-volume text-base-color"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="text-dark-gray fs-20 fw-600 d-block ls-minus-1px">
                        Call us directly
                        </span>
                        <Link to="tel:+8801736348856" className="fs-18">+8801736-348856</Link>
                    </div>
                    </div>
                </div>

                <div className="col-lg-7 offset-xxl-1 j-tag">
                    <form onSubmit={onSubmit} className="contact-form-style-03">
                    <div className="row justify-content-center">
         
                        <div className="col-md-6 xs-mb-30px">
                        <label htmlFor="home-name" className="form-label fw-600 text-dark-gray text-uppercase fs-14 mb-0">
                            Enter your name*
                        </label>
                        <div className="position-relative form-group mb-25px xs-mb-0">
                            <span className="form-icon">
                            <i className="bi bi-emoji-smile text-dark-gray"></i>
                            </span>
                            <input 
                                className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required" 
                                id="home-name" 
                                type="text" 
                                name="name" 
                                placeholder="What's your good name?" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        </div>
                  
                        <div className="col-md-6 xs-mb-30px">
                        <label htmlFor="home-phone" className="form-label fw-600 text-dark-gray text-uppercase fs-14 mb-0">
                            Phone number
                        </label>
                        <div className="position-relative form-group mb-25px xs-mb-0">
                            <span className="form-icon">
                            <i className="bi bi-telephone text-dark-gray"></i>
                            </span>
                            <input 
                                className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control" 
                                id="home-phone" 
                                type="tel" 
                                name="phone" 
                                placeholder="Enter your phone number" 
                                value={formData.phone} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        </div>
                       
                        <div className="col-md-6 xs-mb-30px">
                        <label htmlFor="home-email" className="form-label fw-600 text-dark-gray text-uppercase fs-14 mb-0">
                            Email address*
                        </label>
                        <div className="position-relative form-group mb-25px xs-mb-0">
                            <span className="form-icon">
                            <i className="bi bi-envelope text-dark-gray"></i>
                            </span>
                            <input 
                                className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control required" 
                                id="home-email" 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email address" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        </div>
                  
                        <div className="col-md-6 xs-mb-30px">
                        <label htmlFor="home-subject" className="form-label fw-600 text-dark-gray text-uppercase fs-14 mb-0">
                            Subject
                        </label>
                        <div className="position-relative form-group mb-25px xs-mb-0">
                            <span className="form-icon">
                            <i className="bi bi-journals text-dark-gray"></i>
                            </span>
                            <input 
                                className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control" 
                                id="home-subject" 
                                type="text" 
                                name="subject" 
                                placeholder="How can we help you?" 
                                value={formData.subject} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        </div>
                   
                        <div className="col-12 mb-4 xs-mb-30px">
                        <label htmlFor="home-message" className="form-label fw-600 text-dark-gray text-uppercase fs-14 mb-0">
                            Your message*
                        </label>
                        <div className="position-relative form-group form-textarea mb-0">
                            <textarea 
                                className="ps-0 border-radius-0px border-color-dark-gray bg-transparent form-control" 
                                id="home-message"
                                name="comment" 
                                placeholder="Tell us about your inquiry..." 
                                rows="3" 
                                value={formData.comment} 
                                onChange={handleInputChange}
                            ></textarea>
                            <span className="form-icon">
                            <i className="bi bi-chat-square-dots text-dark-gray"></i>
                            </span>
                        </div>
                        </div>

                        {/* Success/Error Message */}
                        {result && (
                            <div className="col-12 mb-20px">
                                <div className={`alert ${result.includes('Successfully') ? 'alert-success' : 'alert-danger'} d-flex align-items-center`}>
                                    <i className={`${result.includes('Successfully') ? 'fa-solid fa-check-circle' : 'fa-solid fa-exclamation-triangle'} me-10px`}></i>
                                    {result}
                                </div>
                            </div>
                        )}
                 
                        <div className="col-xl-5 col-md-7">
                        <p className="mb-0 fs-14 lh-24 text-center text-md-start">
                            We will never collect information about you without your explicit consent.
                        </p>
                        </div>
                        <div className="col-xl-7 col-md-5 text-center text-md-end sm-mt-25px">
                        <button 
                            className="btn btn-medium btn-dark-gray btn-rounded btn-switch-text btn-box-shadow fw-500 left-icon submit" 
                            type="submit" 
                            disabled={result === "Sending...."}
                        >
                            <span>
                            <span><i className={result === "Sending...." ? 'fa-solid fa-spinner fa-spin' : 'fa-regular fa-envelope'}></i></span>
                            <span className="btn-double-text" data-text={result === "Sending...." ? 'Sending...' : 'Submit request'}>
                                {result === "Sending...." ? 'Sending...' : 'Submit request'}
                            </span>
                            </span>
                        </button>
                        </div>
                    </div>
                    </form>
             
                </div>
                </div>
            </div>
        </section>


        

    </>
  )
}
