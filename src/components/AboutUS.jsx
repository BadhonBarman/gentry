import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';

export default function AboutUs() {
   useEffect(() => {
    anime({
        targets: '.title-tag',
        translateY: [30, 0],     
        opacity: [0, 1],         
        duration: 600,          
        delay: 0,                
        easing: 'easeOutQuad',   
        stagger: 200,            
      });
    }, []);

    useEffect(() => {
        anime({
            targets: '.p-tag',
            translateY: [50, 0],     
            opacity: [0, 1],         
            duration: 1200,          
            delay: 0,                
            easing: 'easeOutQuad',   
            stagger: 150,            
          });
        }, []);
    useEffect(() => {
        anime({
            targets: '.q-tag',
            translateY: [50, 0],     
            opacity: [0, 1],         
            duration: 1200,          
            delay: 250,                
            easing: 'easeOutQuad',   
            stagger: 150,            
          });
        }, []);
    useEffect(() => {
        anime({
            targets: '.r-tag',
            translateY: [50, 0],     
            opacity: [0, 1],         
            duration: 1200,          
            delay: 450,                
            easing: 'easeOutQuad',   
            stagger: 150,            
          });
        }, []);


        const [scale, setScale] = useState(.98);
        const sectionRef = useRef(null);

        useEffect(() => {
            const handleScroll = () => {
              if (sectionRef.current) {
                const sectionOffsetTop = sectionRef.current.offsetTop;
                const sectionHeight = sectionRef.current.offsetHeight;
                const scrollY = window.scrollY;
        
                // Only scale the section when it is visible
                if (scrollY >= sectionOffsetTop && scrollY <= sectionOffsetTop + sectionHeight) {
                  const zoomFactor = 1 + (scrollY - sectionOffsetTop) / 1000; // Adjust sensitivity
                  setScale(Math.min(zoomFactor, 1.1)); // Cap the max zoom factor to 1.2
                }
              }
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
        

return (
    <>

        <section className="top-space-margin overflow-hidden p-0 bg-very-light-gray page-title-big-typography" style={{ marginTop: '124.984px' }}>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content container mx-auto">
                    {/* <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */}
                    <div class="modal-body">
                        <div className='d-flex flex-row-reverse'>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <p><b>Mr. Asadot Daullah</b> stands at the helm of Gentry Corporation Limited, steering the company with visionary leadership and unwavering commitment. With a career span of over four decades, Mr. Daullah has been instrumental in transforming Gentry Corporation from a modest API supplier to a leading pharmaceutical powerhouse.</p>
                        <p>
                        Mr. Asadot Daullah was born in 1940 in Sirajganj where the village is called Sengati. His primary school was in the local area. After finishing high school from B.L High school Sirajganj, he moved to Dhaka to pursue his career
                        </p>
                        <p>His Work career started with Shiddirgonj power station in 1960 as a training officer. Then in 1974 he joined Pfizer Bangladesh which is currently known as Renata PLC.In 1982, when he and Mr. Abu Torab embarked on a mission to supply high-quality API to local pharmaceutical companies. Recognizing the potential for growth, Mr. Daullah played a pivotal role in incorporating the Gentry Corporation in 1984, setting the foundation for the company's future success.</p>
                        <p>Under his guidance, Gentry Corporation gained momentum in the 1990s, establishing itself as a renowned service provider. In 1997, Under Gentry Corporation's guidance Mr. Rezaul Hasan opened Precisa Techno which is considered one of the leading providers of pharmaceutical technology and machinery in Bangladesh.</p>
                        <p>By 2005, Gentry Corporation had earned the distinction of being the largest Indenting Firm in the pharmaceutical industry. Mr. Daullah's strategic foresight led to the inception of Gentry Pharma in 2009, focusing on the production of veterinary medicine, further expanding the company's reach. Mr Daullah is currently the Chairman of Gentry Pharma.</p>
                        <p>Mr. Asadot Daullah is actively engaged in various philanthropic endeavors. He supports local NGOs, has developed schools, Madrasas, and orphanages. Additionally, he contributes to the construction of Mosques, hospital buildings and clinics.</p>
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div> */}
                    </div>
                </div>
        </div>


        <div className="container-fluid p-0">
            <div className="row justify-content-center small-screen sm-h-400px g-0">
            <div
                className="col-md-6 d-flex justify-content-center flex-column ps-7 pe-15px sm-ps-15px cover-background text-white text-md-start text-center page-title-large appear anime-child anime-complete"
                style={{
                backgroundImage: "url('/images/demo-green-energy-about-title-left-bg-01.jpg')",
                }}
            >
                <h1 className="title-tag fw-600 mb-10px ls-minus-2px">About us</h1>
            </div>
            <div className="col-md-6">
                <div
                className="h-100 position-relative cover-background sm-pt-50px appear anime-child anime-complete"
                style={{
                    backgroundImage: "url('/images/building2.jpg')",
                    backgroundPosition: 'bottom !important',
                }}
                data-anime={`{"el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad"}`}
                >
                {/* The below div is commented in the original HTML */}
                {/* <div
                    className="fs-140 xl-fs-120 lg-fs-100 md-fs-80 ls-minus-6px md-ls-minus-4px sm-ls-minus-2px text-white position-absolute bottom-minus-20px sm-bottom-minus-10px w-100 text-center"
                >
                    since <span className="fw-700">1998</span>
                </div> */}
                </div>
            </div>
            </div>
        </div>
        </section>
        
        {/* <section>
            <div className="container">
                <div className="row align-items-center justify-content-md-center g-xl-0 g-1">
                <div
                    className="col-lg-6 col-md-10 text-end md-mb-10 sm-mb-15"
                >
                    <div className="position-relative m-0">
                    <img
                        className="lg-w-90 border-radius-10px"
                        src="/images/about2.jpg"
                        alt="Gentry Corporation"
                        data-no-retina=""
                    />
                    <div
                        className="position-absolute box-shadow-double-large border-radius-8px overflow-hidden bottom-minus-50px lg-bottom-minus-30px left-0px xl-left-minus-20px lg-left-0px w-300px lg-w-250px pt-60px pb-60px lg-pt-50px lg-pb-50px ps-5px pe-5px text-center cover-background skrollable skrollable-between"
                        style={{ backgroundImage: "url('/images/demo-green-energy-about-img-02.jpg')" }}
                        data-bottom-top="transform: translateY(-50px)"
                        data-top-bottom="transform: translateY(50px)"
                    >
                        <span className="fs-65 text-white ls-minus-4px position-relative fw-600">6145+</span>
                        <span className="d-block mx-auto fs-20 lh-26 w-70 text-center text-white">Products delivered worldwide</span>
                    </div>
                    </div>
                </div>
                <div
                    className="col-md-10 col-xl-5 offset-xl-1 col-lg-6"
                >
                    <div className="mb-10px">
                    <span className="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
                    <span className="text-uppercase text-base-color fs-16 fw-600 d-inline-block">GENTRY CORPORATION LTD.</span>
                    </div>
                    <h3 className="text-dark-gray fw-700 ls-minus-2px">Company Overview</h3>
                    <p className="w-80 sm-w-100">
                    Gentry Corporation was founded in 1985 by Mr. Asadot Daullah and Mr. Abu Torab, quickly becoming a trusted name in active pharmaceutical ingredients (APIs). With global reach and decades of experience, we provide top-quality pharmaceutical and chemical solutions, empowering better health outcomes and industrial performance globally.
                    </p>
                </div>
                </div>
            </div>
        </section> */}

    <section>
      <div className="container" ref={sectionRef}>
        <div className="row align-items-center justify-content-md-center g-xl-0 g-1">
          <div className="col-lg-6 col-md-10 text-end md-mb-10 sm-mb-15">
            <div className="position-relative m-0 d-flex justify-content-center">
              <img className="p-tag lg-w-90 border-radius-10px" src="/images/about2.jpg" alt="Gentry Corporation" data-no-retina="" />
            </div>
          </div>
          <div className="col-md-10 col-xl-5 offset-xl-1 col-lg-6 appear anime-child anime-complete" data-anime='{"el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad"}'>
            <div className="mb-10px">
              <span className="p-tag w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
              <span className="p-tag text-uppercase text-base-color fs-16 fw-600 d-inline-block">GENTRY CORPORATION LTD.</span>
            </div>
            <h3 className="q-tag text-dark-gray fw-700 ls-minus-2px">Company Overview</h3>
            <p className="r-tag w-80 sm-w-100">
              Gentry Corporation was founded in 1985 by Mr. Asadot Daullah and Mr. Abu Torab, quickly becoming a trusted name in active pharmaceutical ingredients (APIs). With global reach and decades of experience, we provide top-quality pharmaceutical and chemical solutions, empowering better health outcomes and industrial performance globally.
            </p>
          </div>
        </div>
      </div>
    </section>


        {/* <section className="cover-background" style={{ backgroundColor: '#ebf6ee' }}>
            <div className="container">
               
                <div className="row mb-4 text-center">
                <div className="col">
                    <h2 className="fw-700 mb-0 text-dark-gray ls-minus-2px">Our Mission</h2>
                </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mb-6">
                <div className="col">
                    <div className="feature-box">
                    <div className="feature-box-icon">
                        <i className="fas fa-flask fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-20 fw-600 text-dark-gray mb-10px">Quality Pharmaceutical Ingredients</span>
                        <p>Delivering top-tier APIs to enhance global health standards.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-box">
                    <div className="feature-box-icon">
                        <i className="fas fa-globe fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-20 fw-600 text-dark-gray mb-10px">Global Network</span>
                        <p>Sourcing globally from trusted suppliers to ensure superior quality.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-box">
                    <div className="feature-box-icon">
                        <i className="fas fa-handshake fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-20 fw-600 text-dark-gray mb-10px">Customer-Centric Solutions</span>
                        <p>Optimizing supply chains for reliable and timely delivery.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-box">
                    <div className="feature-box-icon">
                        <i className="fas fa-microscope fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-20 fw-600 text-dark-gray mb-10px">Continuous Innovation</span>
                        <p>Advancing research to lead healthcare developments.</p>
                    </div>
                    </div>
                </div>
                </div>
               
                <div className="row mb-4 text-center">
                <div className="col">
                    <h2 className="fw-700 mb-0 text-dark-gray ls-minus-2px">Our Vision</h2>
                </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center mb-6">
                <div className="col">
                    <div className="feature-box">
                    <div className="feature-box-icon">
                        <i className="fas fa-flask fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-20 fw-600 text-dark-gray mb-10px">Leadership in APIs</span>
                        <p>Becoming the benchmark in pharmaceutical ingredients worldwide.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-box">
                    <div className="feature-box-icon">
                        <i className="fas fa-globe fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-20 fw-600 text-dark-gray mb-10px">Global Influence</span>
                        <p>Establishing global standards for excellence and innovation.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-box">
                    <div className="feature-box-icon">
                        <i className="fas fa-handshake fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-20 fw-600 text-dark-gray mb-10px">Operational Excellence</span>
                        <p>Streamlining operations for exceptional efficiency.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="feature-box">
                    <div className="feature-box-icon">
                        <i className="fas fa-microscope fa-2x text-base-color mb-30px"></i>
                    </div>
                    <div className="feature-box-content">
                        <span className="fs-20 fw-600 text-dark-gray mb-10px">Future-Driven Research</span>
                        <p>Committed to pioneering healthcare advancements.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section> */}

        {/* <section style={{ marginBottom: "130px" }}>
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center">
            
            <div
                className="col team-style-08 mt-2 md-mt-0 md-mb-30px skrollable skrollable-between"
                data-bottom-top="transform:scale(1, 1)"
                data-top-bottom="transform:scale(1.2, 1.2)"
                style={{ marginRight: "10rem", transform: "scale(1.07966, 1.07966)" }}
            >
                <figure className="mb-0 position-relative border-radius-8px overflow-hidden">
                <img src="https://placehold.co/600x756" alt="Team Member" />
                <figcaption className="w-100 h-100 d-flex align-items-end p-13 lg-p-8 md-p-13 sm-p-9 bg-gradient-gray-light-dark-transparent">
                    <div className="w-100">
                    <span className="team-member-name fs-19 fw-500 text-white d-block">Matthew Taylor</span>
                    <span className="member-designation fs-16 lh-26 text-white d-block">Manager</span>
                    </div>
                    <div className="social-icon d-flex flex-column flex-shrink-1">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-black bg-white w-55px h-55px">
                        <i className="fa-brands fa-linkedin-in icon-small"></i>
                    </a>
                    </div>
                </figcaption>
                </figure>
            </div>
            
            <div className="col team-style-08 mt-2 md-mt-0 md-mb-30px align-content-center skrollable skrollable-between"
                data-bottom-top="transform:scale(1, 1)" data-top-bottom="transform:scale(1.2, 1.2)"
                style={{ transform: "scale(1.07966, 1.07966)" }}
            >
                <p className="fs-18 text-dark-gray mb-12">
                John Doe, our Senior Manager, is dedicated to achieving excellence in all aspects of the business. He leads his team to continually exceed customer expectations, providing world-class services and solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam hendrerit nibh, ac bibendum turpis molestie sit amet. Pellentesque a elit ac tortor mattis sollicitudin. Ut vulputate augue quis eros semper, non suscipit magna sodales.
                </p>
                <h3 className="fs-24 fw-700 text-dark-gray mb-0">John Doe</h3>
                <h6 className="fs-16 fw-400 text-dark-gray">- Chairman</h6>
            </div>
            
            </div>
        </div>
        </section> */}
    
    <div className='overflow-hidden w-full d-none d-lg-block'>
    <section
      style={{
        marginBottom: "130px",
        transform: `scale(${scale})`,
        transition: 'transform 0.6s ease-in-out', // Smooth zoom transition
      }}
    >
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center">
        
          <div
            className="col team-style-08 mt-2 md-mt-0 md-mb-30px skrollable skrollable-between"
            data-bottom-top="transform:scale(1, 1)"
            data-top-bottom="transform:scale(1.2, 1.2)"
            style={{ marginRight: "10rem", transform: "scale(1.07966, 1.07966)" }}
          >
            <figure className="mb-0 position-relative border-radius-8px overflow-hidden">
              <img src="/images/asad_about.jpg" alt="Team Member" />
              <figcaption className="w-100 h-100 d-flex align-items-end p-13 lg-p-8 md-p-13 sm-p-9 bg-gradient-gray-light-dark-transparent">
                <div className="w-100">
                  <span className="team-member-name fs-19 fw-500 text-white d-block">Mr. Asadot Daullah</span>
                  <span className="member-designation fs-16 lh-26 text-white d-block">Managing Director</span>
                </div>
                {/* <div className="social-icon d-flex flex-column flex-shrink-1">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-black bg-white w-55px h-55px">
                    <i className="fa-brands fa-linkedin-in icon-small"></i>
                  </a>
                </div> */}
              </figcaption>
            </figure>
          </div>
          
          <div
            className="col team-style-08 mt-2 md-mt-0 md-mb-30px align-content-center skrollable skrollable-between"
            data-bottom-top="transform:scale(1, 1)"
            data-top-bottom="transform:scale(1.2, 1.2)"
            style={{ transform: "scale(1.07966, 1.07966)" }}
          >
            <p className="fs-18 text-dark-gray">
            Mr. Asadot Daullah stands at the helm of Gentry Corporation Limited, steering the company with visionary leadership and unwavering commitment. With a career span of over four decades, Mr. Daullah has been instrumental in transforming Gentry Corporation from a modest API supplier to a leading pharmaceutical powerhouse.
            </p>
            <p className='fs-18 text-dark-gray'>
            Mr. Asadot Daullah was born in 1940 in Sirajganj where the village is called Sengati. His primary school was in the local area. After finishing high school from B.L High school Sirajganj, he moved to Dh…
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='border-0 bg-transparent btn-primary'>See more</button>
            </p>
            <h3 className="fs-24 fw-700 text-dark-gray mb-0">Mr. Asadot Daullah</h3>
            <h6 className="fs-16 fw-400 text-dark-gray">- Managing Director</h6>
          </div>

        </div>
      </div>
    </section>
    </div>

    <div className='overflow-hidden w-full d-block d-lg-none'>
    <section
      style={{
        marginBottom: "130px",
      }}
    >
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 justify-content-center">
        
          <div
            className="col team-style-08 mt-2 md-mt-0 md-mb-30px skrollable skrollable-between"
            data-bottom-top="transform:scale(1, 1)"
            data-top-bottom="transform:scale(1.2, 1.2)"
          >
            <figure className="mb-0 position-relative border-radius-8px overflow-hidden">
              <img src="/images/asad_about.jpg" alt="Team Member" />
              <figcaption className="w-100 h-100 d-flex align-items-end p-13 lg-p-8 md-p-13 sm-p-9 bg-gradient-gray-light-dark-transparent">
                <div className="w-100">
                  <span className="team-member-name fs-19 fw-500 text-white d-block">Mr. Asadot Daullah</span>
                  <span className="member-designation fs-16 lh-26 text-white d-block">Managing Director</span>
                </div>
                {/* <div className="social-icon d-flex flex-column flex-shrink-1">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-black bg-white w-55px h-55px">
                    <i className="fa-brands fa-linkedin-in icon-small"></i>
                  </a>
                </div> */}
              </figcaption>
            </figure>
          </div>
          
          <div
            className="col team-style-08 mt-2 md-mt-0 md-mb-30px align-content-center skrollable skrollable-between"
          >
            <p className="fs-18 text-dark-gray">
            Mr. Asadot Daullah stands at the helm of Gentry Corporation Limited, steering the company with visionary leadership and unwavering commitment. With a career span of over four decades, Mr. Daullah has been instrumental in transforming Gentry Corporation from a modest API supplier to a leading pharmaceutical powerhouse.
            </p>
            <p className='fs-18 text-dark-gray'>
                Mr. Asadot Daullah was born in 1940 in Shirajgonj, Sengati. Studying in the primary school in the local area. After finishing high school, he moved to Dh…
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='border-0 bg-transparent' style={{'font-weight':'600'}}>See more</button>
            </p>
            <h3 className="fs-24 fw-700 text-dark-gray mb-0">Mr. Asadot Daullah</h3>
            <h6 className="fs-16 fw-400 text-dark-gray">- Managing Director</h6>
          </div>

        </div>
      </div>
    </section>
    </div>
        

        <section className="half-section pb-7 sm-pb-50px lg-pt-0 mt-8">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 last-paragraph-no-margin lg-mb-30px">
                        <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">Our Milestones</span>
                        <h3 className="text-dark-gray fw-700 ls-minus-1px mb-20px">Journey of Innovation</h3>
                        <p>From our foundation to global expansion, discover how Gentry Corporation became a leading name in pharmaceutical innovation.</p>
                    </div>
                    <div className="col-lg-7">
                        {[
                        { year: "1982", text: "It all started with Mr. Asadot Daullah and Abu Torab supplying API to local pharmaceutical companies." },
                        { year: "1984", text: "Gentry incorporated with Gentry Corporation." },
                        { year: "1990", text: "Started its Pace with its renowned service and establishment." },
                        { year: "1997", text: "Precisa Techno Trade was born and built by Rezaul Hasan in 1997 as a sister concern of Gentry Corporation Limited." },
                        { year: "2004", text: "Precisa Fabricators, another sister concern was built." },
                        { year: "2005", text: "Gentry Corporation Limited was known as the biggest Indenting Firm in the Pharmaceutical industry." },
                        { year: "2009", text: "Gentry pharma started production, mainly focusing on Veterinary medicine." },
                        { year: "2022", text: "Throughout its 40 years of tenure, Gentry Corporation has consistently upheld its reputation by maintaining high standards and delivering top-quality materials to pharmaceutical partners. As a result, the corporation's image has flourished and continues to grow stronger to this day." },
                        ].map((milestone, index) => (
                        <div className="row mt-3" key={index}>
                            <div className="col-md-2 font-semibold">{milestone.year}</div>
                            <div className="col-md-10 font-medium">{milestone.text}</div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="pb-5 bg-very-light-green">
            <div className="container">
                <div className="row">
                <div className="col-lg-5 md-mb-50px sm-mb-30px">
                    <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">Our Core Values</span>
                    <h3 className="fw-700 mb-0 text-dark-gray ls-minus-2px w-85">Guiding Principles for Global Excellence</h3>
                </div>
                <div className="col-lg-7">
                    <div className="row">
                    <div className="col-md-5">
                        <div className="fs-20 fw-600 text-dark-gray ls-minus-05px">Innovation</div>
                    </div>
                    <div className="col-md-7">
                        <p>We foster innovation through cutting-edge research, continuously developing transformative pharmaceutical solutions.</p>
                    </div>
                    </div>
                    <div className="separator-line-1px border-bottom border-color-extra-medium-gray my-30px"></div>
                    <div className="row">
                    <div className="col-md-5">
                        <div className="fs-20 fw-600 text-dark-gray ls-minus-05px">Quality Commitment</div>
                    </div>
                    <div className="col-md-7">
                        <p>Our stringent quality control ensures superior safety, reliability, and performance in every product delivered.</p>
                    </div>
                    </div>
                    <div className="separator-line-1px border-bottom border-color-extra-medium-gray my-30px"></div>
                    <div className="row">
                    <div className="col-md-5">
                        <div className="fs-20 fw-600 text-dark-gray ls-minus-05px">Integrity & Collaboration</div>
                    </div>
                    <div className="col-md-7">
                        <p>Transparency and teamwork are at the heart of our partnerships, driving sustainable success and global trust.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section> */}




    </>
  );
}
