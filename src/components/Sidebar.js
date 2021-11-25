import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="row vh-100 w-25 border sidebar">
      <h1>Services</h1>

      <div className="list-group border-0 ">
        <NavLink to="/services" className="nav-link">
          Services
        </NavLink>
        <NavLink to="/reserve" className="nav-link">
          Reserve
        </NavLink>
        <NavLink to="/" className="nav-link">
          My Reservations
        </NavLink>
        <NavLink to="/newservice" className="nav-link">
          Add Services
        </NavLink>
        <NavLink to="/" className="nav-link">
          Delete service
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
