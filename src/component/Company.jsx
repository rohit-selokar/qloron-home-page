import React from "react";
import "./style.css";

function Company() {
  return (
    <div className="container-fluid world-map">
      <div className="row ">
        <div className="col-md-12 text-center company-heading">
          <h1 style={{ color: "#000000"}} className="mt-4 mb-4">
            <span style={{ color: "#26D6EB" }}>Trusted by companies</span> small
            and large around the <br />globe
          </h1>
          <button className="mt-5 mb-4">Search our customer stories</button>
        </div>

          <div className="slider mt-5" >
            <div className="slide-track">
              <div className="slide">
                <img src="com-1.png" style={{height:'40px' , width:'105px'}}/>
              </div>
              <div className="slide">
                <img src="com-2.png" style={{height:'40px', width:'105px'}}/>
              </div>
              <div className="slide">
                <img src="com-3.png" style={{height:'40px',width:'105px'}}/>
              </div>
              <div className="slide">
                <img src="com-4.png" style={{height:'40px',width:'105px'}}/>
              </div>
              <div className="slide">
                <img src="com-5.png" style={{height:'40px',width:'105px'}}/>
              </div>
              <div className="slide">
                <img src="com-6.png" style={{height:'40px',width:'105px'}}/>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Company;
