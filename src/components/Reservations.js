import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservationData, cancelReservation } from '../redux/reservation/reservation_duck';

function Reservations() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getReservationData(userId));
  }, []);

  return (
    <h1 className="text-center">
      My Reservations page
    </h1>
  );
}

export default Reservations;
