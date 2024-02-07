import React from 'react'
import './style.css'

function Footer() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row footer-grid justify-content-evenly footer-section'>
            <div className='col-md-3 col-sm-12'>
                <p style={{color:'#FFFFFF'}}>Design amazing digital experiences that create more happy in the world.</p>
            </div>
            <div className='col-md-1'>
                <ul style={{listStyle:'none', fontSize:'16px'}}>
                    <p>Product</p>
                    <li >Overview</li>
                    <li>Features</li>
                    <li>Solutions</li>
                    <li>Tutorials</li>
                    <li>Pricing</li>
                    <li>Releases</li>
                </ul>
            </div>
            <div className='col-md-1 '>
                <ul style={{listStyle:'none', fontSize:'16px'}}>
                    <p>Company</p>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>News</li>
                    <li>Media kit</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='col-md-1'>
                <ul style={{listStyle:'none',fontSize:'16px'}}>
                    <p>Resources</p>
                    <li>Blog</li>
                    <li>Newsletter</li>
                    <li>Events</li>
                    <li>Help center</li>
                    <li>Tutorials</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='col-md-1'>
                <ul style={{listStyle:'none',fontSize:'16px'}}>
                    <p>Social</p>
                    <li>Instagram</li>
                    <li>Linkedln</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div className='col-md-1'>
                <ul style={{listStyle:'none',fontSize:'16px'}}>
                    <p>Legal</p>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                    <li>Licenses</li>
                    <li>Setting</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        
        <div className='row'>
            <div className="text-center p-3 col-md-12" style={{ backgroundColor: "#262E3A",color:"white" }}>
            <p style={{fontSize:'16px',fontWeight:"400"}}>© 2023 Qloron All rights reserved.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer