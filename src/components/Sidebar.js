import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/user/user_duck';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebarcont m-2">
      <button type="button" className="btn green menubtn" onClick={showSidebar}>
        <i className="fas fa-bars" />
      </button>
      <nav className={sidebar ? 'nav-menu active mt-5 sidebarbg ' : 'nav-menu mt-5 sidebarbg'}>
        <div className="row vh-100 px-3 ">
          <h1 className="fw-light fst-italic">Services</h1>

          <div className="list-group border-0 ">
            <NavLink to="/services" className="nav-link text-dark">
              Services
            </NavLink>
            <NavLink to="/reserve" className="nav-link text-dark">
              Reserve
            </NavLink>
            <NavLink to="/reservations" className="nav-link text-dark">
              My Reservations
            </NavLink>
            <NavLink to="/newservice" className="nav-link text-dark">
              Add Services
            </NavLink>
            <NavLink to="/delete" className="nav-link text-dark">
              Delete service
            </NavLink>
          </div>
          <div className="text-center row mt-auto pb-5">
            <NavLink to="" type="button" onClick={() => dispatch(logOut)} className="nav-link text-dark">
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

export default Sidebar;
