import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Base/Header'
import Footer from './Base/Footer'
export default function MainContainer() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollHeight(scrollPercentage);


      setIsVisible(scrollTop > window.innerHeight *0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <div className={`scroll-progress d-none d-xxl-block ${isVisible ? "visible" : "hidden"}`}>
        <Link className="scroll-top" aria-label="scroll">
          <span className="scroll-text">Scroll</span>
          <span className="scroll-line">
            <span className="scroll-point" style={{ height: `${scrollHeight}%` }}></span>
          </span>
        </Link>
      </div>
    </>
  )
}
