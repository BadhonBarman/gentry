import anime from 'animejs';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function SisterConcern() {
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
      
    const sisterConcerns = [
      {
        name: 'Precisa Techno Trade.',
        description: 'Precisa Techno Trade was founded in 1997 by Rezaul Hasan as a sister concern of Gentry Corporation Limited, established in 1984 by Mr. Asadot Daullah. Over the years, we have become a trusted partner for Bangladeshi pharmaceutical companies by delivering state-of-the-art machinery and engineering solutions. We source technology from top manufacturers in India, Singapore, Taiwan, China, Korea, Germany, Italy, Finland, Spain, Belgium, the U.K., and the United States. With a team of over 45 highly trained engineers, we ensure reliable on-call service and quality maintenance for our systems. Our commitment is to leverage global technological advancements to enhance local pharmaceutical production and support the growing industry needs in Bangladesh.',
        imageUrl: '/clients/precisa.png',
        url : 'https://precisabd.com/',

    },  
      {
          name: 'Gentry Pharmaceuticals Ltd.',
          description: 'Gentry Pharmaceuticals Ltd. was established in 2009 with a focus on delivering the highest quality veterinary and nutritional products in Bangladesh. Within the last decade, Gentry Pharma has become a trusted brand among farmers and veterinarians across the nation. Our growing portfolio currently consists of therapeutic, nutritional, and injectable products. With poultry consumption in Bangladesh expected to grow at a rate 34% annually over the next five years, there was an unmet need in the market – Bangladesh needed higher quality animal health products. Thus, we made it our goal to leverage the rapid advancements in pharmaceutical infrastructure to ultimately meet the needs of the poultry farmers in our nation.',
          imageUrl: '/clients/gentrypharma-logo.png',
          url : 'https://www.gentrypharma.com/',
        },

        {
            name: 'Precisa Techno Fabricators',
            description: 'Precisa Techno Fabricators was established in 2001 with a commitment to delivering premium change parts for pharmaceutical machinery in Bangladesh. Over the years, we have emerged as the foremost supplier of domestically produced change parts—previously, the market relied heavily on imports. Our modern facility, equipped with advanced machinery such as Wire-Cutting, CNC Milling, VMC, Surface Grinding, and more, enables us to meet the growing demand for high-quality components. By providing a cost-efficient and time-saving alternative to imported tools, we have earned the trust of most leading pharmaceutical companies in the nation. Today, Precisa Techno Fabricators stands as a benchmark in the industry, dedicated to continuously raising standards and driving innovation for the benefit of our customers.',
            imageUrl: '/clients/fabricators.png',
            url : 'https://precisabd.com/',

        },
       
      ];
      
  return (
    <>
    <section className="pb-12 sm:pb-50px position-relative overflow-hidden">
        <div 
            className="page-title position-absolute bottom-minus-40px lg-bottom-minus-20px text-center w-100 fs-250 xxl-fs-200 xl-fs-180 lg-fs-140 d-none d-md-block text-gradient-light-green-white z-index-minus-2 ls-minus-8px fw-700 appear"        >
            Sister Concerns
        </div>
    </section>

    <section className="py-0 ps-7 pe-7 xl-ps-5 xl-pe-5 lg-ps-3 lg-pe-3 xs-ps-15px xs-pe-15px mt-1 mb-5">
        <div className="container-fluid">
            <div className="row">
                {sisterConcerns.map((concern, index) => (
                    <>
                    <div className={`mb-2 mb-md-0 ${index === 2 ? 'col-md-12 mx-auto w_lg_50':'col-md-6'}`}>
                        <div className="overflow-hidden bg-very-light-green border-radius-20px lg-border-radius-0px pt-7 pb-7 lg-pt-5 lg-pb-5 lg-ps-3 lg-pe-3 sm-pt-50px sm-pb-50px h-100">
                        <div className="container">
                            <div
                            className="row align-items-center mb-5 sm-mb-9 text-center text-md-start justify-content-center appear anime-child anime-complete"
                            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
                            >
                            <div className="col-12" style={{ textAlign: 'center' }}>
                                <span className="fs-16 text-uppercase text-base-color fw-600 mb-5px d-block">Sister Concern</span>
                            </div>
                            </div>
                            <div className="row align-items-center mb-5 xs-mb-30px">
                            <div className="client-box text-center">
                                <img src={concern.imageUrl} alt="Client Logo" className="mx-auto mb-3" style={{ width: '30rem', height: 'auto' }} />
                                <p className="text-gray fw-400 mt-5">{concern.description}</p>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                            <div className="col-md-12 col-10 text-center appear anime-complete" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                <Link target='_blank' to={concern.url} className="btn btn-base-color border-radius-20px fw-300">
                                See More
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </>
                ))}
          </div>
        </div>
      </section>


    </>
  )
}
