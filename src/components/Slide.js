import React from 'react'
import './slide.css'
const Slide = () => {
  return (
    <>
    <input type="checkbox" id="check"/>
    <label for="check">
    <i className='fas fa-bars' id='btn'></i>
    <i className='fas fa-times' id='cancel'></i>

        </label>
    <div className='sidebar'>
       <h1>Aziz</h1>
       <ul>
   <li><a href="/"> <i className="fas fa-qrcode"></i>Home</a></li>
   <li><a href="/"> <i className="fas fa-qrcode"></i>About</a></li>
   <li><a href="/contact"> <i className="fas fa-qrcode"></i>Contact</a></li>
   <li><a href="/service"> <i className="fas fa-qrcode"></i>Service</a></li>

       </ul>

    </div>
    
    </>
  )
}





export default Slide