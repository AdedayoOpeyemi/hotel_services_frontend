import React from 'react';
import videos from './assets/pool.mp4';

const LoginForm = () => {
  const inputTextField = React.createRef();

  const printInput = (name) => {
    console.log(name);
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
            <button className="btn green" type="submit" onClick={() => printInput(inputTextField.current.value)}>Login/Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginForm;
