import React from 'react';
import videos from './assets/office.mp4';

function NewService() {
  return (
    <header>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videos} type="video/mp4" />
      </video>
      <div className="container text-white px-5">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="row">
            <h1 className="text-center mb-5">Create a new Service</h1>
            <div className="row">
              <div className="input-group mb-3">
                <div className="input-group-prepend" />
                <input type="text" className="form-control text-center rounded-pill mb-3" placeholder="Service name" aria-label="service_name" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="row">
              <div className="input-group mb-3">
                <div className="input-group-prepend" />
                <input type="text" className="form-control text-center rounded-pill mb-3" placeholder="Service Description" aria-label="Service_description" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="row">
              <div className="input-group mb-3">
                <div className="input-group-prepend" />
                <input type="number" className="form-control text-center rounded-pill mb-3" placeholder="Service Price" aria-label="Service_price" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="row">
              <div className="input-group mb-3">
                <div className="input-group-prepend" />
                <input type="text" className="form-control text-center rounded-pill mb-3" placeholder="Service image URL" aria-label="Service_image" aria-describedby="basic-addon1" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="button" className="btn text-white w-100 green fw-bolder rounded-pill mb-3">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NewService;
