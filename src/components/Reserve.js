import React from 'react';

function Reserve() {
  return (
    <div className="green">
      <div className="container text-white">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="row">
            <h1 className="text-center">Create a new Service</h1>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nobis harum unde
              consectetur velit rerum iure mollitia quia itaque ipsa error quo
              architecto assumenda, a spernatur vel iste eos, illum quisquam!
            </p>
            <div className="row">
              <div className="col">
                <div className="input-group mb-3 ">
                  <select className="form-select rounded-pill btng text-white" id="year">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2021">2024</option>
                    <option value="2022">2025</option>
                    <option value="2023">2026</option>
                  </select>
                </div>
              </div>
              <div className="col ">
                <div className="input-group mb-3">
                  <select className="form-select rounded-pill btng text-white" id="month">
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="01">July</option>
                    <option value="02">August</option>
                    <option value="03">September</option>
                    <option value="04">October</option>
                    <option value="05">November</option>
                    <option value="06">December</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <select className="form-select rounded-pill btng text-white" id="day">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="01">07</option>
                    <option value="02">08</option>
                    <option value="03">09</option>
                    <option value="04">10</option>
                    <option value="05">11</option>
                    <option value="06">12</option>
                    <option value="01">13</option>
                    <option value="02">14</option>
                    <option value="03">15</option>
                    <option value="04">16</option>
                    <option value="05">17</option>
                    <option value="06">18</option>
                    <option value="01">19</option>
                    <option value="02">20</option>
                    <option value="03">21</option>
                    <option value="04">22</option>
                    <option value="05">23</option>
                    <option value="06">24</option>
                    <option value="02">25</option>
                    <option value="03">26</option>
                    <option value="04">27</option>
                    <option value="05">28</option>
                    <option value="06">29</option>
                    <option value="05">30</option>
                    <option value="06">31</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="input-group mb-3 ">
                  <select className="form-select rounded-pill btng text-white" id="city">
                    <option value="London">London</option>
                    <option value="Melbourne">Melbourne</option>
                    <option value="Zurich">Zurich</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Auckland">Auckland</option>
                    <option value="New York">2026</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <button type="button" className="btn btn-light w-100 textg fw-bolder rounded-pill">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserve;
