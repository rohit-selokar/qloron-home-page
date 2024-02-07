import React from "react";
import "./style.css";
import { items } from "./Data";

function Card() {
  return (

    <div className="container" style={{paddingTop:'10px',paddingBottom:'10px'}}>

      <div className="row">
        <div className="col-md-12">
          <div className="product-container">
            {
              items.map((product)=>(
                <div key={product.id} className="product-card">
                  <img src={product.img} />
                  <h4>{product.title}</h4>
                  <button>{product.button}</button>
                </div>
              ))
            }
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Card;
