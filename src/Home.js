import React from 'react'
import Navbar from './features/navbar/NavBar'
import Slider from './features/slider/Slider'
import Menu from './features/menu/Menu'

function Home() {
  return (
    <div>
        <Navbar />
        <Slider />
        <Menu />
    </div>
  )
}

export default Home