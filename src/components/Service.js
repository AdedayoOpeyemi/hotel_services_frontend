import React from 'react';
import office from './assets/office.jpeg';

function Service() {
  return (
    <div className="container">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="card mb-3 border-0">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={office} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body px-5">
                <h2 className="card-title text-center mb-lg-5">Service name</h2>
                <ul className="list-group border-0 mb-5">
                  <li className="list-group-item list-group-item-light border-0 listbg">Service description</li>
                  <li className="list-group-item list-group-item-dark border-0">Service Price</li>
                  <li className="list-group-item list-group-item-light border-0 listbg">Service Duration 24 hours</li>
                </ul>
              </div>
              <div className="row justify-content-center">
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
