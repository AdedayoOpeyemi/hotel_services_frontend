import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/user/user_duck';
import videos from './assets/pool.mp4';

const LoginForm = () => {
  const dispatch = useDispatch();

  const inputTextField = useRef('');

  const toServices = (input) => {
    if (input === ('' || null || undefined)) return;

    dispatch(loginUser(input));
  };

  return (
    <header>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videos} type="video/mp4" />
      </video>
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col text-center text-white">
            <h1>Welcome to City Services</h1>
            <h5 className="fs-6 fw-normal">Please Log in or Sign in with your Username</h5>
            <input type="text" className="form-control my-3" id="userName" aria-describedby="emailHelp" placeholder="User Name" ref={inputTextField} />
            <Link to={
              localStorage.getItem('current_user') ? '/services' : window.location.pathname
            }
            >
              <button className="btn green" type="button" onClick={() => toServices(inputTextField.current.value)}>Login/Sign in</button>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginForm;
