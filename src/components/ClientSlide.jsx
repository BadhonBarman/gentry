import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import anime from "animejs";

const ClientSlide = () => {

    useEffect(() => {
        const targets = ['.p-tag', '.q-tag', '.r-tag', '.w-tag'];
        
        const triggerAnimation = () => {
          anime({
            targets: '.p-tag',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            delay: 0,
            easing: 'easeOutQuad',
            stagger: 150,
          });
    
          anime({
            targets: '.q-tag',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            delay: 250,
            easing: 'easeOutQuad',
            stagger: 150,
          });
    
          anime({
            targets: '.r-tag',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 600,
            delay: 450,
            easing: 'easeOutQuad',
            stagger: 150,
          });
    
          anime({
            targets: '.w-tag',
            translateX: [30, 0],
            opacity: [0, 1],
            duration: 600,
            delay: 0,
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


    const clientLogos = [
      { name: "Square Pharmaceuticals Ltd.", src: "clients/1.png" },
      { name: "Incepta Pharmaceuticals Ltd.", src: "clients/2.png" },
      { name: "Beximco Pharmaceuticals Ltd.", src: "clients/3.png" },
      { name: "Healthcare Pharma", src: "clients/4.png" },
      { name: "Renata Limited", src: "clients/5.png" },
      { name: "Eskayef Pharmaceuticals Ltd.", src: "clients/6.png" },
      { name: "Opsonin Pharma Ltd.", src: "clients/7.png" },
      { name: "Aristopharma", src: "clients/8.png" },
      { name: "Popular Pharma", src: "clients/9.png" },
      { name: "Acme Lab", src: "clients/10.png" },
      { name: "ACI Limited", src: "clients/11.png" },
      { name: "Radiant Pharma", src: "clients/12.png" },
      { name: "Drug International", src: "clients/13.png" },
      { name: "Unimed Unihealth", src: "clients/15.png" },
      { name: "Beacon Pharma", src: "clients/16.png" },
      { name: "NIPRO JMI", src: "clients/17.png" },
      { name: "General Pharma", src: "clients/18.png" },
      { name: "Ziska Pharma", src: "clients/19.png" },
      { name: "Ibn Sina Pharma", src: "clients/20.png" },
      { name: "Synovia Pharma Plc", src: "clients/21.png" },
  { name: "Navana", src: "clients/22.png" },
  { name: "Nuvista Pharma", src: "clients/23.png" },
  { name: "Novartis", src: "clients/24.png" },
  { name: "Orion Pharma", src: "clients/25.png" },
  { name: "Labaid Pharma", src: "clients/26.png" },
  { name: "Everest Pharma", src: "clients/27.png" },
  { name: "Bio Pharma", src: "clients/28.png" },
  { name: "Globe Pharma", src: "clients/29.png" },
  { name: "Goodman Pharma", src: "clients/30.png" },
  { name: "SMC Pharma", src: "clients/31.png" },
  { name: "Ad-din Pharma", src: "clients/32.png" },
  { name: "Albion Pharma", src: "clients/33.png" },
  { name: "Apex Pharma", src: "clients/34.png" },
  { name: "Army Pharma", src: "clients/35.png" },
  { name: "Asiatic Pharma", src: "clients/36.png" },
  { name: "Cosmic Pharma", src: "clients/37.png" },
  { name: "EDCL", src: "clients/38.png" },
  { name: "Gentry Pharma", src: "clients/39.png" },
  { name: "Nafco Pharma", src: "clients/40.png" },
  { name: "Unido Pharma", src: "clients/41.png" },
  { name: "Zenith Pharma", src: "clients/42.png" }
    ];
    
    
        
    
  return (
    <>
    <section className="py-0 ps-7 pe-7 xl:ps-5 xl:pe-5 lg:ps-3 lg:pe-3 xs:ps-[15px] xs:pe-[15px]">
        <div className="overflow-hidden bg-very-light-green border-radius-20px lg:border-radius-0px pt-7 pb-7 lg:pt-5 lg:pb-5 lg:ps-3 lg:pe-3 sm:pt-[50px] sm:pb-[50px]">
            <div className="container">
                <div className="row align-items-center mb-5 sm-mb-9 text-center text-md-start">
                    <div className="p-tag col-lg-5 col-md-6 md-mb-20px">
                        <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">
                        Our Clients
                        </span>
                        <h3 className="text-dark-gray fw-700 mb-0 ls-minus-1px">Trusted Partners</h3>
                    </div>
                    <div className="q-tag col-lg-5 col-md-6 last-paragraph-no-margin md-mb-20px">
                        <p className="w-80 xl-w-100 mx-auto">
                        We proudly collaborate with leading organizations across the globe to deliver excellence in pharmaceutical and chemical solutions.
                        </p>
                    </div>
                    <div className="r-tag col-lg-2 d-flex justify-content-center justify-content-xl-end">
                        
                        <div style={{color:"#000", padding:"2rem"}} className="slider-one-slide-prev-1 position-static icon-extra-medium text-dark-gray swiper-button-prev slider-navigation-style-04 bg-white box-shadow-medium-bottom">
                            <i className="feather icon-feather-arrow-left"></i>
                        </div>
                        <div style={{color:"#000", padding:"2rem"}}  className="slider-one-slide-next-1 position-static icon-extra-medium text-dark-gray swiper-button-next slider-navigation-style-04 bg-white box-shadow-medium-bottom">
                            <i className="feather icon-feather-arrow-right"></i>
                        </div>
                       
                    </div>
                </div>
            <div className="row w-tag align-items-center mb-5 xs:mb-[30px]">
                <div className="col-12">
                <div className="slider-25">
                    <Swiper
                    modules={[Navigation, Autoplay, Keyboard]}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={{ nextEl: ".slider-one-slide-next-1", prevEl: ".slider-one-slide-prev-1" }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    breakpoints={{
                        1200: { slidesPerView: 4 },
                        992: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        320: { slidesPerView: 1 },
                    }}
                    >
                    {/* {["square.png", "incepta.png", "beximco.png", "opsonin.png", "renata.png", "eskayef.png"].map((image, index) => (
                        <SwiperSlide key={index} className="swiper-slide transition-inner-all">
                        <div className="client-box text-center">
                            <img src={`images/${image}`} alt="Client Logo" className="mx-auto mb-3" style={{ width: "200px", height: "auto" }} />
                            <h5 className="text-dark-gray fw-600 fs-22">{image.split(".")[0].replace("-", " ")}</h5>
                        </div>
                        </SwiperSlide>
                    ))} */}
                    {clientLogos.map((client, index) => (
                      <SwiperSlide key={index} className="swiper-slide transition-inner-all">
                        <div className="client-box text-center">
                          <div style={{"justify-content": "center","display": "flex","flex-direction": "column","position":"relative"}}>
                          <img
                            src={client.src}
                            alt={`Client ${client.name}`}
                            className="mx-auto mb-3"
                            style={{ width: "200px", height: "auto" }}
                          />
                          <h5 className="text-dark-gray fw-600 fs-22">{client.name}</h5>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                    </Swiper>
                </div>
                </div>
            </div>
            <div className="row justify-content-center r-tag">
                <div className="col-md-12 col-10 text-center">
                <Link style={{color:"#000", padding:".2rem 1rem", marginRight:".4rem"}} className="bg-red fw-700 text-white text-uppercase border-radius-30px ps-[15px] pe-[15px] fs-13 me-[5px] d-inline-block align-middle">
                    Join Us
                </Link>
                <div className="fs-20 text-dark-gray d-inline-block align-middle">
                    Become part of our partnership network. <Link to="/contact" className="text-dark-gray text-dark-gray-hover text-decoration-line-bottom fw-600">Contact us today</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  );
};

export default ClientSlide;