import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';

const navbarOptions = {
  content: {
    bar: true,
    button: false,
  },
  form: {
    bar: false,
    button: true,
  },
};

const MainPage = ({ type, children }) => {
  const [showSidebar, setShowSidebar] = useState(navbarOptions[type]);
  const currentUser = useSelector((state) => state.user.user.userId);
  const navigate = useNavigate();

  if (currentUser === -1) navigate('/login');

  useEffect(() => {
    setShowSidebar(navbarOptions[type]);
  }, [type]);

  const toggleSidebar = () => {
    setShowSidebar(({ bar }) => ({
      bar: !bar,
      button: true,
    }));
  };

  return (
    <div className="d-flex">
      <button
        type="button"
        className={`btn green menubtn ${showSidebar.button ? '' : 'd-sm-none'}`}
        onClick={toggleSidebar}
      >
        <i className="fas fa-bars" />
      </button>
      <Sidebar show={showSidebar.bar} />
      <main className="container-fluid p-0">{children}</main>
    </div>
  );
};

MainPage.propTypes = {
  type: PropTypes.oneOf(['content', 'form']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default MainPage;
