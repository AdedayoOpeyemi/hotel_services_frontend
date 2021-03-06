import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/user/user_duck';

function Sidebar({ show }) {
  const dispatch = useDispatch();

  return (
    <div className={`sidebarcont sidebarbg h-100 ${show ? '' : 'd-none'}`}>
      <nav className="nav-menu vh-100 pt-5 ">
        <div className="row h-100 ps-3 ">
          <h1 className="sidebarfont rotate text-center">Services</h1>
          <div className="list-group border-0 ">
            <NavLink to="/services" className="nav-link text-dark sidefont">
              Services
            </NavLink>
            <NavLink to="/reserve" className="nav-link text-dark sidefont">
              Reserve
            </NavLink>
            <NavLink to="/reservations" className="nav-link text-dark sidefont">
              My Reservations
            </NavLink>
            <NavLink to="/newservice" className="nav-link text-dark sidefont">
              Add Services
            </NavLink>
            <NavLink to="/delete" className="nav-link text-dark sidefont">
              Delete service
            </NavLink>
          </div>
          <div className="text-center row mt-auto pb-5">
            <NavLink to="/login" onClick={() => dispatch(logOut)} className="nav-link text-dark sidefont">
              Log out
            </NavLink>
            <div className="col fs-3">
              <i className="fab fa-facebook" />
              <i className="fab fa-twitter px-3" />
              <i className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Sidebar;
