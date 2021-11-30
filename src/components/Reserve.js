import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './assets/new-reservation-background.jpg';
import {
  today,
  nextYears,
  nextMonths,
  nextDays,
} from '../utils/dates';
import isReservationValid from '../utils/reservationValidation';
import ValidationError from './ValidationError';
import { postReservationToApi } from '../redux/reservation/reservation_duck';

const yearsToDisplay = 5;

const findDefault = (serviceId, services) => {
  const found = services.find(({ id }) => id === serviceId);
  if (found) return found.id;
  return -1;
};

function Reserve({ serviceId }) {
  const user = useSelector((state) => state.user.user);
  const services = useSelector((state) => state.services.services);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newReservation, setNewReservation] = useState({
    userId: user.userId,
    serviceId,
    city: '',
    date: {
      ...today,
      month: today.month + 1,
    },
  });

  const [validation, setValidation] = useState({
    valid: false,
    service: '',
    date: '',
    city: '',
  });

  const handleCityChange = (e) => {
    setNewReservation((reservation) => ({
      ...reservation,
      city: e.target.value,
    }));
  };

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

  const postNewReservation = () => {
    const newValidation = isReservationValid(newReservation, services);
    setValidation(newValidation);
    if (newValidation.valid) {
      dispatch(postReservationToApi(newReservation)).then(() => {
        navigate('/reservations');
      });
    }
  };

  return (
    <header>
      <img src={backgroundImage} alt="..." />
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
                  <option
                    value={-1}
                    disabled
                  >
                    Choose a service to reserve
                  </option>
                  { services.map(({ id, name }) => (
                    <option
                      key={`service-${id}`}
                      value={id}
                    >
                      {name}
                    </option>
                  ))}
                </select>
                {validation.service
                 && <ValidationError errorMessage={validation.service} />}
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
                  {validation.date
                   && <ValidationError errorMessage={validation.date} />}
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
                  <select className="form-select rounded-pill btng text-white border-0" id="city" defaultValue="" onChange={handleCityChange}>
                    <option value="" disabled>Please, select a city</option>
                    { ['London', 'Melbourne', 'Zurich', 'Tokyo', 'Auckland',
                      'New York'].map((city) => (
                        <option
                          key={`city-${city}`}
                          value={city}
                        >
                          {city}
                        </option>
                    ))}
                  </select>
                  {validation.city
                   && <ValidationError errorMessage={validation.city} />}
                </div>
              </div>
              <div className="col-md-2">
                <button type="button" className="border-0 btn btn-light w-100 textg fw-bolder rounded-pill" onClick={postNewReservation}>Reserve</button>
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
