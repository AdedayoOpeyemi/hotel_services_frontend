import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from '../redux/user/user_duck';
import videos from './assets/pool.mp4';

const Signup = () => {
  const dispatch = useDispatch();

  const inputTextField = useRef('');

  const toServices = (input) => {
    if (input === ('' || null || undefined)) return;

    dispatch(loginUser(input));

    window.location.reload();
  };

  const checkLogin = (localStorage.getItem('current_user')) ? <Navigate to="/services" /> : '';

  return (
    <header>
      {checkLogin}
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videos} type="video/mp4" />
      </video>
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col text-center text-white">
            <h1>Welcome to City Services</h1>
            <h5 className="fs-6 fw-normal">Please Sign up with your Username</h5>
            <input type="text" className="form-control my-3" id="userName" aria-describedby="emailHelp" placeholder="User Name" ref={inputTextField} />
            <button className="btn green" type="button" onClick={() => toServices(inputTextField.current.value)}>Login/Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Signup;