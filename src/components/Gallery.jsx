import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import anime from 'animejs';
export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    { url: "/images/gallery/28.jpg", title: "title 1" },
    { url: "/images/gallery/29.jpg", title: "title 2" },
    { url: "/images/gallery/30.jpg", title: "title 3" },
    { url: "/images/gallery/33.jpg", title: "title 4" },
    { url: "/images/gallery/1.jpg", title: "title 5" },
    { url: "/images/gallery/2.jpg", title: "title 6" },
    { url: "/images/gallery/3.jpg", title: "title 21" },
    { url: "/images/gallery/4.jpg", title: "title 7" },
    { url: "/images/gallery/5.jpg", title: "title 8" },
    { url: "/images/gallery/6.jpg", title: "title 9" },
    { url: "/images/gallery/7.jpg", title: "title 10" },
    { url: "/images/gallery/8.jpg", title: "title 11" },
    { url: "/images/gallery/9.jpg", title: "title 12" },
    { url: "/images/gallery/10.jpg", title: "title 13" },
    { url: "/images/gallery/11.jpg", title: "title 14" },
    { url: "/images/gallery/12.jpg", title: "title 15" },
    { url: "/images/gallery/13.jpg", title: "title 16" },
    { url: "/images/gallery/14.jpg", title: "title 17" },
    { url: "/images/gallery/15.jpg", title: "title 18" },
    { url: "/images/gallery/16.jpg", title: "title 19" },
    { url: "/images/gallery/17.jpg", title: "title 20" },
    { url: "/images/gallery/18.jpg", title: "title 22" },
    { url: "/images/gallery/19.jpg", title: "title 23" },
    { url: "/images/gallery/20.jpg", title: "title 24" },
    { url: "/images/gallery/21.jpg", title: "title 25" },
    { url: "/images/gallery/22.jpg", title: "title 26" },
    { url: "/images/gallery/23.jpg", title: "title 27" },
    { url: "/images/gallery/24.jpg", title: "title 28" },
    { url: "/images/gallery/25.jpg", title: "title 29" },
    { url: "/images/gallery/26.jpg", title: "title 30" },
    { url: "/images/gallery/27.jpg", title: "title 31" },
    { url: "/images/gallery/34.jpg", title: "title 32" },
    { url: "/images/gallery/35.jpg", title: "title 33" },
    { url: "/images/gallery/36.jpg", title: "title 34" },
    { url: "/images/gallery/37.jpg", title: "title 35" },

  ];
  

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

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
  

  

  

  return (
    <>
      <section className="pb-12 sm:pb-50px position-relative overflow-hidden">
      <div 
        className="page-title position-absolute bottom-minus-40px lg-bottom-minus-20px text-center w-100 fs-250 xxl-fs-200 xl-fs-180 lg-fs-140 d-none d-md-block text-gradient-light-green-white z-index-minus-2 ls-minus-8px fw-700 appear"
      >
        Image Gallery
      </div>
    </section>

      <section style={{ marginTop: '-70px' }}>
        <div
          className="container appear anime-complete"
          data-anime='{"opacity": [0,1], "duration": 600, "staggervalue": 300, "easing": "easeOutQuad"}'
        >
          <div className="row image-gallery-style-01 gallery-wrapper">

            {galleryItems.map((item, index) => (
    <div className="grid-item transition-inner-all col-12 col-sm-6 col-lg-4 mb-4" key={index} onClick={() => handleImageClick(index)}>
      <div className="gallery-box border-radius-6px" style={{ filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.3))" }}>
        <div className="position-relative gallery-image bg-dark-gray overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
          <img
            src={item.url}
            alt={item.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100 gallery-hover move-bottom-top">
            <div className="d-flex align-items-center justify-content-center rounded-circle bg-white" style={{ width: "60px", height: "60px" }}>
              <i className="icon feather icon-feather-search icon-extra-medium text-dark-gray"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
          </div>
        </div>
      </section>

      <Lightbox
  open={isOpen}
  index={currentIndex} // <- Correct prop
  close={() => setIsOpen(false)}
  on={{
    view: ({ index }) => setCurrentIndex(index), // Update current index when user navigates
  }}
  slides={galleryItems.map(item => ({ src: item.url, title: item.title }))}
/>

    </>
  );
}
