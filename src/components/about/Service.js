import React from 'react'
import styled from 'styled-components'
import Bfooter from '../Bfooter'
import Slide from '../Slide'
const Content = styled.div`
display: flex;
min-height: 110vh;
width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://oneesports.azureedge.net/cdn-data/2021/05/CallOfDuty_Warzone_Graphic.jpg")
      center;
      transform: perspective(3d);
      


`
const Service = () => {
  return (
    <>
    <Content>
        <Slide />
    </Content>
   <div className='bg-gray-900'>
        <div className='max-w-[1320px] md:py-[80] py-5 mx-auto'>
             <h1 className='text-4xl text-center text-yellow-200'>Our Services</h1>
        </div>
        <div className='max-w-[1000px] mx-auto py-[50px] lg:grid grid-cols-4 sm:grid-cols-2 gap-6'>
            <div className='group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-700 cursor-pointer'>
                <i  className='fas fa-laptop-code group-hover:text-white text-blue-600 text-2xl duration-700 animate-bounce'></i>
                <h3 className='group text-xl text-yellow-600 py-2 group-hover:text-gray-700'>WEB DESIGN</h3>
                <p className='text-yellow-500 group-hover:text-gray-700'>Squad is a tactical shooter developed by the Canadian studio Offworld Industries.
The game focuses on team play, leadership skills as well as communication and coordination.
The developers also attach great importance to reality.</p>
            </div>
            <div className='group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-700 cursor-pointer'>
                <i  className='fas fa-laptop-code group-hover:text-white text-blue-600 text-2xl duration-700 animate-bounce'></i>
                <h3 className='text-xl text-yellow-600 py-2 group-hover:text-gray-700'>WEB DESIGN</h3>
                <p className='text-yellow-500 group-hover:text-gray-700'>Squad is a tactical shooter developed by the Canadian studio Offworld Industries.
The game focuses on team play, leadership skills as well as communication and coordination.
The developers also attach great importance to reality.</p>
            </div>
            <div className='group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-700 cursor-pointer'>
                <i  className='fas fa-laptop-code group-hover:text-white text-blue-600 text-2xl duration-700 animate-bounce'></i>
                <h3 className='text-xl text-yellow-600 py-2 group-hover:text-gray-700'>WEB DESIGN</h3>
                <p className='text-yellow-500 group-hover:text-gray-700'>Squad is a tactical shooter developed by the Canadian studio Offworld Industries.
The game focuses on team play, leadership skills as well as communication and coordination.
The developers also attach great importance to reality.</p>
            </div>
            <div className='group shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white duration-700 cursor-pointer'>
                <i  className='fas fa-laptop-code group-hover:text-white text-blue-600 text-2xl duration-700 animate-bounce'></i>
                <h3 className='text-xl text-yellow-600 py-2 group-hover:text-gray-700'>WEB DESIGN</h3>
                <p className='text-yellow-500 group-hover:text-gray-700'>Squad is a tactical shooter developed by the Canadian studio Offworld Industries.
The game focuses on team play, leadership skills as well as communication and coordination.
The developers also attach great importance to reality.</p>
            </div>
        </div>
        </div>
        <Bfooter />

    </>
  )
}

export default Service