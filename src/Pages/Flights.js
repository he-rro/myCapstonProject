import React from 'react'
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Carousel from '../components/Carousel';


export default function Flights() {

  return (
    <div>
      <Hero />
      <Services />
      <Carousel/>
      <Testimonials />
    </div>
  )
}
