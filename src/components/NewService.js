import React from 'react';

function NewService() {
  return (
    <div className="green">
      <div className="container text-white">
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
                <button type="button" className="btn btn-light w-100 textg fw-bolder rounded-pill mb-3">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewService;
