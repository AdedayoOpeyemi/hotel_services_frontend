import React from 'react';
import office from './assets/office.jpeg';

function ServicesCard() {
  return (
    <div>
      <div className="card border-0 w-100 px-5">
        <img src={office} className="img-fluid imgcont" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="stretched-link" />
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
