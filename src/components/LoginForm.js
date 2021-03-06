import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { getUser, loadUser } from '../redux/user/user_duck';
import videos from './assets/pool.mp4';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputTextField = useRef('');
  const message = useSelector((state) => state.user.message);

  useEffect(() => {
    navigate('/login');

    if (localStorage.getItem('current_user')) {
      dispatch(loadUser);
      navigate('/services');
    }
  }, []);

  const toServices = (input) => {
    dispatch(getUser(input)).then(() => {
      if (localStorage.getItem('current_user')) {
        navigate('/services');
      }
    });
  };

  return (
    <header>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videos} type="video/mp4" />
      </video>
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="alert alert-warning alert-dismissible fade show d-none" role="alert">
            <strong>Holy guacamole!</strong>
            {' '}
            You should check in on some of those fields below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
          </div>
          <div className="col text-center text-white">
            <h1>Welcome to City Services</h1>
            <h5 className="fs-6 fw-normal">{ message }</h5>
            <input type="text" className="form-control my-3" id="userName" aria-describedby="emailHelp" placeholder="User Name" ref={inputTextField} />
            <button className="btn green mx-3" type="button" onClick={() => toServices(inputTextField.current.value)}>Login</button>
            <Link to="/signup"><button className="btn green" type="button">Sign up</button></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginForm;
