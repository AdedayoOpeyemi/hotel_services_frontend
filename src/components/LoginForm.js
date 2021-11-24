import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import { getUser } from '../redux/user/user_duck';
import videos from './assets/pool.mp4';

const LoginForm = () => {
  const dispatch = useDispatch();

  const inputTextField = useRef('');
  const message = useSelector((state) => state.user.message);

  const toServices = (input) => {
    if (input === ('' || null || undefined)) return;

    dispatch(getUser(input));
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
            <h5 className="fs-6 fw-normal">{ message }</h5>
            <input type="text" className="form-control my-3" id="userName" aria-describedby="emailHelp" placeholder="User Name" ref={inputTextField} />
            <button className="btn green" type="button" onClick={() => toServices(inputTextField.current.value)}>Login</button>
            <Link to="/signup"><button className="btn green" type="button">Sign up</button></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginForm;
