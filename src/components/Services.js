import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getServices } from '../redux/service/service_duck';

function Services(props) {
  const { services } = props;
  const dispatch = useDispatch();
  dispatch(getServices());

  return (
    <div>
      <h1 className="text-center">
        services page
      </h1>
      <p>{JSON.stringify(services)}</p>
    </div>
  );
}

Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

Services.defaultProps = {
  services: [],
};

export default Services;
