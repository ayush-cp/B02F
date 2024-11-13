import React from 'react'
import TopBar from './TopBar'
import Navbar from './Navbar'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <TopBar/>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Home