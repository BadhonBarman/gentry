import { useEffect } from "react";
import ClientSlide from "./ClientSlide";
import anime from "animejs";
import ClientSlideHome from "./ClintSlideHome";

const OurClientHome = () => {
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
                className="page-title position-absolute bottom-minus-40px lg-bottom-minus-20px text-center w-100 fs-250 xxl-fs-200 xl-fs-180 lg-fs-140 d-none d-md-block text-gradient-light-green-white z-index-minus-2 ls-minus-8px fw-700 appear"             >
                Gentry Clients
            </div>
        </section>

        <ClientSlideHome/>
    </>
  );
};

export default OurClientHome;