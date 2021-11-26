import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservationData, cancelReservationToApi } from '../redux/reservation/reservation_duck';

function Reservations() {
  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getReservationData(1));
  }, []);

  return (
    <h1 className="text-center">
      My Reservations page
      <button type="button" onClick={() => dispatch(cancelReservationToApi(22, 1))}>
        Cancel Reservation
      </button>
    </h1>
  );
}

export default Reservations;
