import React from 'react'
import { Link  } from 'react-router-dom'
import styled from 'styled-components'
import Slide from '../pages/Slide'
import Bfooter from './Bfooter'
import Carts from './Carts'
import Squad from './Squad'

const Container = styled.div`
 width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://oneesports.azureedge.net/cdn-data/2021/05/CallOfDuty_Warzone_Graphic.jpg")
      center;
      transform: perspective(3d);
      
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;


`

const Navbar = () => {
  return (
    <>
    <Container>
       <div className="bg-transparent">
        <nav className="fixed top-0 left-0 bg-black w-full shadow">
          <div className="container m-auto flex justify-between items-center text-gray-300">
            
            <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
              <a href="/" className="hover:bg-fuchsia-400 py-4 px-6">Home</a>
              <Link to="/contact" className="hover:bg-fuchsia-400 py-4 px-6">Contact</Link>
              <a href="/service" className="hover:bg-fuchsia-400 py-4 px-6">Service</a>
              <a href="/" className="hover:bg-fuchsia-400 py-4 px-6">About</a>
            </ul>
            <div>
            <Link to="/signin" className="y-4 mx-2 rounded focus:outline-none hover:bg-fuchsia-400 group py-4 px-6">
              Sign-in
            </Link>
            <Link to="/register" className="hover:bg-fuchsia-400 group py-4 px-6">
              Register
            </Link>
            </div>
            <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">

              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600 mb-1"></div>
              <div className="w-5 h-1 bg-gray-600"></div>
              <div className="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                  <a href="/" className="hover:bg-fuchsia-400 py-4 px-6 w-full">Home</a>
                  <a href="/contact" className="hover:bg-fuchsia-400 py-4 px-6 w-full">
                    Contact
                  </a>
                  <a href="/service" className="hover:bg-fuchsia-400 py-4 px-6 w-full">
                    Service
                  </a>
                  <a href="/" className="hover:bg-fuchsia-400 py-4 px-6 w-full">About</a>
                </ul>
              </div>
            </button>
          
          </div>
        </nav>
      </div>
      </Container>

      
     <Slide />
      <Carts />
      <div className='bg-slate-900'>
      <br className=' bg-gray-800' />
      <br />
      </div>
      <Squad />
      <Bfooter />
    </>
  )
}

export default Navbar