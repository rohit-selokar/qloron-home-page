import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className ="navbar navbar-expand-lg navbar-dark navbar-grid" style={{background: '#000000',padding:0,position: 'sticky', top: '0', zIndex: '100'}}>
      <div className ="container-fluid" style={{padding:'0'}}>
        <a className ="navbar-brand bg-light" href="#">
          <img src="company-logo.png" className="img-fluid" style={{height:'11vh'}}/>
        </a> 

        <button
          className ="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className ="navbar-toggler-icon "></span>
        </button>
        

        <div className ="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className ="navbar-nav m-auto mb-2 mb-lg-0 ">
            <li className ="nav-item">
              <a className ="nav-link active anchor-tag" aria-current="page" href="#" >
                HOME
              </a>
            </li>

            <li className ="nav-item dropdown">
              <a
                className ="nav-link dropdown-toggle active anchor-tag"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABOUT US
              </a>
              <ul className ="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li>
                  <a className ="dropdown-item anchor-tag text-light" href="#">
                    S & S
                  </a>
                </li>
              </ul>
            </li>


            <li className ="nav-item dropdown">
              <a
                className ="nav-link dropdown-toggle active anchor-tag"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICES & SUPPORT
              </a>
              <ul className ="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
                <li>
                  <a className ="dropdown-item text-light" href="#">
                    S & S
                  </a>
                </li>
                <li>
                  <a className ="dropdown-item text-light" href="#">
                    S & S
                  </a>
                </li>
                <li>
                  <a className ="dropdown-item text-light" href="#">
                    S & S
                  </a>
                </li>
              </ul>
            </li>

            <li className ="nav-item">
              <a className ="nav-link active anchor-tag" href="#">
                TECHNOLOGIES
              </a>
            </li>
            
            <li className ="nav-item">
              <a className ="nav-link active anchor-tag" href="#">
                PORTFOLIO
              </a>
            </li>

            <li className ="nav-item">
              <a className ="nav-link active anchor-tag" href="#">
                CONTACTS US
              </a>
            </li>

            <li className ="nav-item">
              <a className ="nav-link active anchor-tag" href="#">
                CARRERS
              </a>
            </li>

          </ul>

          <div>
              <button className="btn-sortname">SORTBOXES</button>
              <img src="Vector.png" className="mx-1"/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
