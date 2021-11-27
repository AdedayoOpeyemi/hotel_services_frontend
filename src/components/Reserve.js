import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import videos from './assets/resort.mp4';
import {
  today,
  nextYears,
  nextMonths,
  nextDays,
} from '../utils/dates';

const yearsToDisplay = 5;

const findDefault = (serviceId, services) => {
  const found = services.find(({ id }) => id === serviceId);
  if (found) return found.id;
  return -1;
};

function Reserve({ serviceId }) {
  const user = useSelector((state) => state.user.user);
  const services = useSelector((state) => state.services.services);
  const [newReservation, setNewReservation] = useState({
    userId: user.userId,
    serviceId,
    city: '',
    date: today,
  });

  const handleDateChange = (dateField) => (e) => {
    setNewReservation((reservation) => {
      const { date } = reservation;
      return {
        ...reservation,
        date: {
          ...date,
          [dateField]: parseInt(e.target.value, 10),
        },
      };
    });
  };

  const handleServiceChange = (e) => {
    const newId = parseInt(e.target.value, 10);
    setNewReservation((state) => ({
      ...state,
      serviceId: newId,
    }));
  };

  return (
    <header>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videos} type="video/mp4" />
      </video>
      <div className="container text-white">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="row">
            <h1 className="text-center">New Reservation</h1>
            <div className="row my-3">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input type="text" className="form-control rounded-pill border-0 text-center" value={user.username} aria-label="Username" aria-describedby="basic-addon1" disabled />
                </div>
              </div>
              <div className="col-md-6">
                <select
                  className="form-select rounded-pill border-0"
                  id="service-name"
                  onChange={handleServiceChange}
                  defaultValue={findDefault(serviceId, services)}
                >
                  { services.map(({ id, name }) => (
                    <option
                      key={`service-${id}`}
                      value={id}
                    >
                      {name}
                    </option>
                  ))}
                  <option
                    value={-1}
                  >
                    Choose a service to reserve
                  </option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="input-group mb-3 ">
                  <select className="form-select rounded-pill btng text-white border-0" id="year" onChange={handleDateChange('year')}>
                    { nextYears(yearsToDisplay).map((year) => (
                      <option
                        key={`year-${year}`}
                        value={year}
                      >
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="input-group mb-3">
                  <select className="form-select rounded-pill btng text-white border-0" id="month" onChange={handleDateChange('month')}>
                    { nextMonths(newReservation.date).map((month) => (
                      <option
                        key={`month-${month[1]}`}
                        value={month[1]}
                      >
                        {month[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="input-group mb-3">
                  <select className="form-select rounded-pill btng text-white border-0" id="day" onChange={handleDateChange('day')}>
                    { nextDays(newReservation.date).map((day) => (
                      <option
                        key={`day-${day}`}
                        value={day}
                      >
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3 ">
                  <select className="form-select rounded-pill btng text-white border-0" id="city">
                    <option value="London">London</option>
                    <option value="Melbourne">Melbourne</option>
                    <option value="Zurich">Zurich</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Auckland">Auckland</option>
                    <option value="New York">New York</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <button type="button" className="border-0 btn btn-light w-100 textg fw-bolder rounded-pill">Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

Reserve.propTypes = {
  serviceId: PropTypes.number,
};

Reserve.defaultProps = {
  serviceId: -1,
};

export default Reserve;
