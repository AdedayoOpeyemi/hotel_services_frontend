import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
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

describe('Render Carousel', () => {
  it('Renders the Carousel', () => {
    const carousel = TestRenderer.create(
      <Provider store={store}>
        <CarouselReact />
      </Provider>,
    ).toJSON();
    expect(carousel).toMatchSnapshot();
  });
});

describe('Render Delete page', () => {
  it('Renders the Delete page', () => {
    const del = TestRenderer.create(
      <Provider store={store}>
        <Delete />
      </Provider>,
    ).toJSON();
    expect(del).toMatchSnapshot();
  });
});

describe('Render LoginForm page', () => {
  it('Renders the LoginForm page', () => {
    const logform = TestRenderer.create(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    ).toJSON();
    expect(logform).toMatchSnapshot();
  });
});

describe('Render MainPage page', () => {
  it('Renders the MainPage page', () => {
    const mainpage = TestRenderer.create(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    ).toJSON();
    expect(mainpage).toMatchSnapshot();
  });
});

describe('Render NewService page', () => {
  it('Renders the NewService page', () => {
    const newservice = TestRenderer.create(
      <Provider store={store}>
        <NewService />
      </Provider>,
    ).toJSON();
    expect(newservice).toMatchSnapshot();
  });
});

describe('Render Reservations page', () => {
  it('Renders the Reservations page', () => {
    const reservations = TestRenderer.create(
      <Provider store={store}>
        <Reservations />
      </Provider>,
    ).toJSON();
    expect(reservations).toMatchSnapshot();
  });
});

describe('Render Reserve page', () => {
  it('Renders the Reserve page', () => {
    const reserve = TestRenderer.create(
      <Provider store={store}>
        <Reserve />
      </Provider>,
    ).toJSON();
    expect(reserve).toMatchSnapshot();
  });
});

describe('Render Service page', () => {
  it('Renders the Service page', () => {
    const service = TestRenderer.create(
      <Provider store={store}>
        <Service />
      </Provider>,
    ).toJSON();
    expect(service).toMatchSnapshot();
  });
});

describe('Render Services page', () => {
  it('Renders the Services page', () => {
    const services = TestRenderer.create(
      <Provider store={store}>
        <Services />
      </Provider>,
    ).toJSON();
    expect(services).toMatchSnapshot();
  });
});

describe('Render Sidebar page', () => {
  it('Renders the Sidebar page', () => {
    const sidebar = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Sidebar />
        </Router>
      </Provider>,
    ).toJSON();
    expect(sidebar).toMatchSnapshot();
  });
});

describe('Render Signup page', () => {
  it('Renders the Signup page', () => {
    const signup = TestRenderer.create(
      <Provider store={store}>
        <Signup />
      </Provider>,
    ).toJSON();
    expect(signup).toMatchSnapshot();
  });
});
