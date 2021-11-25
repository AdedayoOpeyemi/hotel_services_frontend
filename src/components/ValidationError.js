import React from 'react';
import PropTypes from 'prop-types';

const ValidationError = ({ errorMessage }) => (
  <div className="fs-6 text-danger"><p>{errorMessage}</p></div>
);

ValidationError.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ValidationError;
