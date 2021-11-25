import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../redux/user/user_duck';
import videos from './assets/pool.mp4';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputTextField = useRef('');

  const createUser = (input) => {
    dispatch(postUser(input));
    navigate('/');
  };

  return (
    <header>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videos} type="video/mp4" />
      </video>
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="alert alert-warning alert-dismissible fade show d-nonce" role="alert">
            <strong>Holy guacamole!</strong>
            {' '}
            You should check in on some of those fields below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
          </div>
          <div className="col text-center text-white">
            <h1>Welcome to City Services</h1>
            <h5 className="fs-6 fw-normal">Please Sign up using your username</h5>
            <input type="text" className="form-control my-3" id="userName" aria-describedby="emailHelp" placeholder="User Name" ref={inputTextField} />
            <button className="btn green" type="button" onClick={() => createUser(inputTextField.current.value)}>Create User</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Signup;
