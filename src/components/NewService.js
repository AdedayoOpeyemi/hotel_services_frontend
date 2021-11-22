import React from 'react';

function NewService() {
  return (
    <div className="container">
      <h1>Book a new Service</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nobis harum unde
        consectetur velit rerum iure mollitia quia itaque ipsa error quo architecto assumenda, a
        spernatur vel iste eos, illum quisquam!
      </p>
      <div className="row">
        <div className="col">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li> actions</li>
              <li> actions</li>
              <li> actions</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li> actions</li>
              <li> actions</li>
              <li> actions</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <button type="button" className="btn btn-dark">Dark</button>
        </div>
      </div>
    </div>
  );
}

export default NewService;
