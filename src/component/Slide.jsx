import React from "react";
import "./style.css";
function Slide() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{'boxShadow': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="slide_img_1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <div className="slide-content">
              <h3>
                OUR CREATIVITY IS YOUR <br />
                SUCCESS
              </h3>
              <p>
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button>Read more</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="slide_img_1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <div className="slide-content">
              <h3>
                OUR CREATIVITY IS YOUR
                <br />
                SUCCESS
              </h3>
              <p>
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button>Read more</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="slide_img_1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <div className="slide-content">
              <h3>
                OUR CREATIVITY IS YOUR
                <br />
                SUCCESS
              </h3>
              <p>
                Stay one step ahead with our future-proof technology services.
                We leverage the latest innovations and industry best practices
                to ensure your business remains agile, competitive, and prepared
                for the challenges of tomorrow.
              </p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Slide;
