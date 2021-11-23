import React from 'react';

function Services() {
  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <row>
        <h1 className="text-center fw-bolder">
          All Services
        </h1>
        <p className="fw-lighter text-center">
          Please select a Service
        </p>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://picsum.photos/700" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/600" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/700" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </row>
      </div>

    </div>
  );
}

export default Services;
