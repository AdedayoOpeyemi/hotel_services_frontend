import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getServices } from '../redux/service/service_duck';
import store from '../redux/configurateStore';

function Services() {
  const { services } = store.getState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices);
  }, []);

  return (
    <div>
      <h1 className="text-center">
        services page
      </h1>
      <h3>{JSON.stringify(services)}</h3>
    </div>
  );
}

export default Services;
