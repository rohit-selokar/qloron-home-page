import React from 'react'
import './style.css'

function Chanllenges() {
  return (
    <div className='container'>
      <div className='row mt-4 chanllenge-content' style={{backgroundColor:'#141416'}}>
        <div className='col-md-7 col-sm-12'>
            <div className='text-light chanllenge-title'>
                <h2>CREATIVE <strong style={{color:'#26D6EB'}}>CHALLENGES</strong> ARE <br/> OUR PASSION</h2>
                <p className='mt-4'>Stay one step ahead with our future-proof technology services. 
                   We leverage the latest innovations and industry best practices to ensure your business remains agile, competitive, and prepared for the challenges of tomorrow.
                </p>
            </div>
        </div>
        <div className='col-md-5 light-image'>
            <div className='mt-4 mt-md-0 text-center'>
                <img src='creative-bg.png' alt='creative img' className='image-fluid'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chanllenges
