import React from 'react'
import Hero from '../../components/Home/HomeHero'
import HomeEnquiryForm from '../../components/Home/HomeEnquiryForm'
import HomeInfo from '../../components/Home/HomeInfo'
import Features from '../../components/Home/WhyChooseUs'
import HomeAboutUs from '../../components/Home/HomeAboutUs'
import SolarStatsSection from '../../components/Home/HomeSolarStatsSection'

const HomeIndex = () => {
  return (
    <div>
      <Hero/>
      <HomeInfo />
      <HomeEnquiryForm/>
      <HomeAboutUs />
      <Features />
      <SolarStatsSection/>
    </div>
  )
}

export default HomeIndex