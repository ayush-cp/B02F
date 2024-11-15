import React from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Hero from './Hero'
import SuccessInfo from './SuccessInfo'
import IeltsPrep from './IeltsPrep'
import AwesomeFeatures from './AwesomeFeatures'
import Services from './Services'
import Assistance from './Assistance'
import Faqs from './Faqs'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col items-center gap-4 '>
        <TopBar/>
        <Navbar/>
        <Hero/>
        <SuccessInfo/>
        <IeltsPrep/>
        <AwesomeFeatures/>
        <Services/>
        <Assistance/>
        <Faqs/>
        <Footer/>
    </div>
  )
}

export default Home