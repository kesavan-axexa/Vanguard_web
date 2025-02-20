import React from 'react'
import Hero from '../../components/Home/HomeHero'
import HomeEnquiryForm from '../../components/Home/HomeEnquiryForm'
import HomeInfo from '../../components/Home/HomeInfo'
import Features from '../../components/Home/WhyChooseUs'
import HomeAboutUs from '../../components/Home/HomeAboutUs'
import SolarStatsSection from '../../components/Home/HomeSolarStatsSection'
import ContactUsForm from '@/components/ContactUs/ContactUsForm'

const HomeIndex = () => {
  return (
    <div>
      <Hero/>
      <HomeInfo />
      <HomeEnquiryForm/>
      <HomeAboutUs />
      <Features />
      <SolarStatsSection/>
      {/* <ContactUsForm /> */}
    </div>
  )
}

export default HomeIndex