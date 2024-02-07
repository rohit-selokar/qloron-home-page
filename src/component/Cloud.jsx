import React from 'react'
import './style.css'

function Cloud() {
  return (
    <>
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-12 cloud-heading'>
            <h2 className='text-center' style={{color:'#000000'}}>The company that leaders <span style={{color:'#26D6EB'}}>trust to help</span> <br/> them grow and thrive</h2>
        </div>
        <div className='row cloud-grid'>
            <div className='col-md-7 cloud-grid-img'>
                <img className='img-fluid' src='cloud.png' alt='cloud-solution'/>
            </div>
            <div className='col-md-5 cloud-grid-info'>
                <div className='cloud'>
                  <h1 style={{color:'#000000'}}>Cloud solutions for <span style={{color:'#26D6EB'}}>every business</span></h1>
                  <p style={{color:'#262E3A'}}>Proven and best in class: integrated, with silos down, productivity up, and potential unleashed.</p>
                  <button style={{'boxShadow': '0px 4px 25px 0px #5F45FF4D'}}>Get Started with Qloron</button>
                </div>
            </div>
        </div>
      </div>
    </div>


    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12 project-heading'>
          <h2 className='text-center' style={{color:'#000000'}}>Why choose our company for your <br/> <strong style={{color:'#26D6EB'}}>projects?</strong></h2>
        </div>
        
        <div className='row choose-main-grid'>
        <div className='col-md-6 choose-title-grid' id='folder-grid '>
        <div className='choose-project '>      
        <div className='row folder-grid-1'>
            <div className='col-md-6 d-flex justify-content-evenly'>
              <div>
                <img src='Folder-open.png' style={{width:'40px'}}/>
              </div>
              <div>
                <h2>100+</h2>
                <p>Projects</p>
              </div>
            </div>
            <div className='col-md-6 d-flex justify-content-evenly'>
              <div>
                <img src='User.png' style={{width:'40px'}}/>
              </div>
              <div>
                <h2>40+</h2>
                <p>Developers</p>
              </div>
            </div>
          </div>

          <div className='row folder-grid-2'>
            <div className='col-md-6 d-flex justify-content-evenly'>
              <div>
                <img src='Desktop.png' style={{width:'40px'}}/>
              </div>
              <div>
                <h2>80+</h2>
                <p>Satisfied Client</p>
              </div>
            </div>
            <div className='col-md-6 d-flex justify-content-evenly'>
              <div>
                <img src='satisfy.png' style={{width:'40px'}}/>
              </div>
              <div className='positive'>
                <h2>90%</h2>
                <p>Positive Feedback</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='col-md-6 choose-title-grid'>
          <div className='choose-title'>
            <p className='text-light'>We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills.</p>
            <button className='btn-choose'>Contact Us</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Cloud 
