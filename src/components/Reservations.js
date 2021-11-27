import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservationData, cancelReservationToApi } from '../redux/reservation/reservation_duck';

function Reservations() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user.userId);

  useEffect(() => {
    dispatch(getReservationData(currentUser));
  }, []);

  const reservations = useSelector((state) => state.reservations);

  return (
    <div className="pt-5">
      <h1 className="text-center mb-3">My Reservations</h1>
      { reservations
        && reservations.map(({
          reservation_id: id, date: { day, month, year },
          service_name: serviceName,
          service_description: serviceDescription, image_url: imageUrl, city,
        }) => (
          <div className="container" key={id}>
            <div className="card mb-3 border-0 bg-light">
              <div className="row g-0 ">
                <div className="col-md-4">
                  <img src={imageUrl} className="img-fluid rounded-start w-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center mt-lg-5">
                    <h2 className="card-title mb-3">{serviceName}</h2>
                    <ul className="list-group border-0 mb-5">
                      <li className="list-group-item list-group-item-dark border-0 mt-lg-5">{serviceDescription}</li>
                      <li className="list-group-item list-group-item-light border-0 listbg">
                        {day}
                        /
                        {month}
                        /
                        {year}
                      </li>
                      <li className="list-group-item list-group-item-dark border-0">{city}</li>
                    </ul>
                    <button
                      type="button"
                      className="btn w-50 green text-white fw-bolder rounded-pill mt-lg-5"
                      id={id}
                      onClick={() => dispatch(cancelReservationToApi(id, currentUser))}
                    >
                      Cancel Reservation
                    </button>
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

export default Reservations;
