import React from 'react'
import Bfooter from '../components/Bfooter'
import Slide from '../components/Slide'
import './Contacts.css'
const Contacts = () => {
  return (
    <>
    
    <div className='all'>
   
     <div className='content'>
     <Slide />
        <div className='content-form'>
            <section>
            <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
            <h2>address</h2>
            <p>
                        Mourouj 4 <br/>
                        Ben Arous <br/>
                        Tunisia
                    </p>
            </section>
            <section>
                    <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                    <h2>Phone</h2>
                    <p>+216 92 156 030</p>
                </section>
                <section>
                    <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    <h2>E-mail</h2>
                    <p>Ezzoguennichi@gmail.com</p>
                </section>
        </div>
     </div>
     <form>
        <div className="form">
            <div className="right">
              <div className="contact-form">
                  <input type="text" required/>
                  <span>Full Name</span>
              </div>
  
              <div className="contact-form">
                  <input type="E-mail" required/>
                  <span>E-mail Id</span>
              </div>
              <div className="contact-form">
                  <textarea name="text">
                    
                  </textarea>
                  <span> Type your Message....</span>
              </div>
  
              <div className="contact-form">
                 <input type="submit" value="Send Message" name="submit"/>
                     
              </div>
              </div>
            </div>
    </form>
    </div>
    <Bfooter />
  
    </>
  )
}

export default Contacts