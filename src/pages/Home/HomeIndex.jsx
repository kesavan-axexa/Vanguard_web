import React from 'react'
import Hero from '../../components/Home/HomeHero'
import HomeEnquiryForm from '../../components/Home/HomeEnquiryForm'
import HomeInfo from '../../components/Home/HomeInfo'
import Features from '../../components/Home/WhyChooseUs'
import HomeAboutUs from '../../components/Home/HomeAboutUs'

const HomeIndex = () => {
  return (
    <div>
      <Hero/>
      <HomeInfo />
      <HomeEnquiryForm/>
      <HomeAboutUs />
      <Features />
    </div>
  )
}

export default HomeIndex