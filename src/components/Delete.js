import React from 'react';
import { useSelector } from 'react-redux';

function Delete() {
  const services = useSelector((state) => state.services);

  return (
    <div className="pt-5">
      <h1 className="text-center mb-3">Delete Service</h1>
      { services.services
        && services.services.map(({
          id, name, description, imageUrl, price,
        }) => (
          <div className="container" key={id}>
            <div className="card mb-3 border-0 bg-light">
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img src={imageUrl} className="img-fluid rounded-start w-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center mt-lg-5">
                    <h2 className="card-title mb-3">{name}</h2>
                    <ul className="list-group border-0 mb-5">
                      <li className="list-group-item list-group-item-light border-0 listbg mt-lg-5">{description}</li>
                      <li className="list-group-item list-group-item-dark border-0">
                        $
                        {price}
                      </li>
                    </ul>
                    <button type="button" className="btn w-50 green text-white fw-bolder rounded-pill mt-lg-5" id={id}>Delete Service</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      {' '}

    </div>
  );
}

export default Delete;
