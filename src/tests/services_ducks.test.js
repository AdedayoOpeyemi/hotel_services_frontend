/**
 * @jest-environment jsdom
 */

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import services, { getServices, postService } from '../redux/service/service_duck';
import { testStore } from '../redux/configurateStore';

const mock = new MockAdapter(axios);

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const initialState = {
  services: [],
  errors: null,
};

const store = testStore({ user: {}, services: [], reservations: [] });

// const errors = (messages) => ({
//   type: API_FAILURE,
//   messages,
// });

const serviceA = {
  id: 1,
  name: 'pool time',
  description: 'bring your own towel',
  price: 1000,
  image_url: 'https://picsum.photos/200/300',
};

const serviceB = {
  id: 2,
  name: 'jungle tour',
  description: 'bug spray included',
  price: 50,
  image_url: 'https://picsum.photos/200/300',
};

const servicesGetResponse = { services: [serviceA, serviceB] };

mock.onGet(`${rootUrl}/api/v1/services`).reply(200, servicesGetResponse);

test('DEFAULT: return initial state', () => {
  expect(services(undefined, { type: 'NON_EXISTANT' })).toBe(initialState);
});

test('GET: should return a list of services', () => {
  mock.onGet(`${rootUrl}/api/v1/services`).reply(200, servicesGetResponse);

  store.dispatch(getServices()).then(() => {
    expect(store.getState().services).toBe([serviceA, serviceB]);
  });
});

test('POST: should return a response with no error', () => {
  mock.onPost(`${rootUrl}/api/v1/services`).reply(201, {
    messsage: 'Service has been created',
  });

  store.dispatch(postService({
    name: serviceA.name,
    description: serviceA.description,
    price: serviceA.price,
    imageUrl: serviceA.image_url,
  })).then((response) => {
    expect(response).toEqual('New Service Posted');
  });
});

test('POST: should return Missing fields message', () => {
  mock.onPost(`${rootUrl}/api/v1/services`).reply(201, {
    messsage: 'Service has been created',
  });

  store.dispatch(postService({
    name: serviceA.name,
    description: '',
    price: serviceA.price,
    imageUrl: serviceA.image_url,
  })).then((response) => {
    expect(response).toEqual('There are missing fields');
  });
});
