import { useState } from 'react'
import './styles/App.css'
import './styles/style.css'
import './styles/responsive.css'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop'

const MainContainer = lazy(() => import('./components/MainContainer'));
const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUS'));
const SisterConcern = lazy(() => import('./components/SisterConcern'));
const OurTeam = lazy(() => import('./components/OurTeam'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Gallery = lazy(() => import('./components/Gallery'));
const OurClient = lazy(() => import('./components/OurClient'));


function App() {

  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path='/*' element={<MainContainer/>} >
        <Route index element={<Home/>} />
        <Route path='about' element={<AboutUs/>} />
        <Route path='clients' element={<OurClient/>} />
        <Route path='sister-concerns' element={<SisterConcern/>} />
        <Route path='team' element={<OurTeam/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='contact' element={<ContactUs/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
