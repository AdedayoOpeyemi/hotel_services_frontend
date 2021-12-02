

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  MemoryRouter as Router,
} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from '../redux/configurateStore';
import CarouselReact from '../components/CarouselReact';
import LoginForm from '../components/LoginForm';
import MainPage from '../components/MainPage';
import NewService from '../components/NewService';
import Reservations from '../components/Reservations';
import Reserve from '../components/Reserve';
import Service from '../components/Service';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Signup from '../components/Signup';
import Delete from '../components/Delete';
import './LocalStorageMock';

describe('Render Carousel', () => {
  it('Renders the Carousel', () => {
    const history = createMemoryHistory();
    history.push('/services');
    const carousel = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <CarouselReact />
        </Router>
      </Provider>,
    ).toJSON();
    expect(carousel).toMatchSnapshot();
  });
});

describe('Render Delete page', () => {
  it('Renders the Delete page', () => {
    const history = createMemoryHistory();
    history.push('/delete');
    const del = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <Delete />
        </Router>
      </Provider>,
    ).toJSON();
    expect(del).toMatchSnapshot();
  });
});

describe('Render LoginForm page', () => {
  it('Renders the LoginForm page', () => {
    const history = createMemoryHistory();
    history.push('/login');
    const logform = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <LoginForm />
        </Router>
      </Provider>,
    ).toJSON();
    expect(logform).toMatchSnapshot();
  });
});

// describe('Render MainPage page', () => {
//   it('Renders the MainPage page', () => {
//     const mainpage = TestRenderer.create(
//       <Provider store={store}>
//         <MainPage />
//       </Provider>,
//     ).toJSON();
//     expect(mainpage).toMatchSnapshot();
//   });
// });

describe('Render NewService page', () => {
  it('Renders the NewService page', () => {
    const history = createMemoryHistory();
    history.push('/newservice');
    const newservice = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <NewService />
        </Router>
      </Provider>,
    ).toJSON();
    expect(newservice).toMatchSnapshot();
  });
});

describe('Render Reservations page', () => {
  it('Renders the Reservations page', () => {
    const history = createMemoryHistory();
    history.push('/reservations');
    const reservations = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <Reservations />
        </Router>
      </Provider>,
    ).toJSON();
    expect(reservations).toMatchSnapshot();
  });
});

describe('Render Reserve page', () => {
  it('Renders the Reserve page', () => {
    const history = createMemoryHistory();
    history.push('/reserve');
    const reserve = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <Reserve />
        </Router>
      </Provider>,
    ).toJSON();
    expect(reserve).toMatchSnapshot();
  });
});

describe('Render Service page', () => {
  it('Renders the Service page', () => {
    const history = createMemoryHistory();
    history.push('/services/1');
    const service = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <Service />
        </Router>
      </Provider>,
    ).toJSON();
    expect(service).toMatchSnapshot();
  });
});

describe('Render Services page', () => {
  it('Renders the Services page', () => {
    const history = createMemoryHistory();
    history.push('/services/1');
    const services = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <Services />
        </Router>
      </Provider>,
    ).toJSON();
    expect(services).toMatchSnapshot();
  });
});

describe('Render Signup page', () => {
  it('Renders the Signup page', () => {
    const history = createMemoryHistory();
    history.push('/signup');
    const signup = TestRenderer.create(
      <Provider store={store}>
        <Router history={history}>
          <Signup />
        </Router>
      </Provider>,
    ).toJSON();
    expect(signup).toMatchSnapshot();
  });
});
