import React from 'react'
import './style.css'

function Contact() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center get-in-touch'>
            <h1 style={{color:"#000000"}}>Get in Touch</h1>
        </div>
        
        <div className='row grid-both'>
        <div className='col-md-7 contact-img-grid' style={{backgroundColor:'#55ADCC'}}>
            <img className='img-fluid' src='contact.png'/>
        </div>
        <div className='col-md-5 contact-grid-form' style={{backgroundColor:'#000000',color:'#FFFFFF'}}>
            <div className='contact-form'>
                <p style={{fontSize:'14px'}}>Please fill out our request for proposal form to get a quote or contact us about your upcoming project. we’ll get back to you shortly.</p>
                <input placeholder='Enter name*'/>
                <hr/>
                <input placeholder='Email*'/><hr/>
                <input placeholder='Phone number(Optional)'/><hr/><br/>
                <input placeholder='message(Optional)'/> <hr/>
                <button>Submit</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
