import React from 'react';
import office from './assets/office.jpeg';

function Service() {
  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-6">
              <img src={office} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-6">
              <div className="card-body px-5">
                <h2 className="card-title text-center mb-5">Service name</h2>
                <ul class="list-group">
                  <li class="list-group-item list-group-item-light">Service description</li>
                  <li class="list-group-item list-group-item-dark">Service Price</li>
                  <li class="list-group-item list-group-item-light">Service Duration 24 hours</li>
                </ul>   
              </div>
              <div class="row justify-content-center">
                <button type="button" className="btn btn-light w-50 green text-white fw-bolder rounded-pill mb-3">Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Service;
