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

let store = testStore(initialState);

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

beforeEach(() => {
  mock.reset();
  store = testStore(initialState);
});

test('DEFAULT: return initial state', () => {
  expect(services(undefined, { type: 'NON_EXISTANT' })).toEqual(initialState);
});

test('GET: should return a list of services', async () => {
  mock.onGet(`${rootUrl}/api/v1/services`).reply(200, servicesGetResponse);

  await store.dispatch(getServices()).then(() => {
    expect(store.getState().services).toEqual({
      services: [{
        id: 1,
        name: 'pool time',
        description: 'bring your own towel',
        price: 1000,
        imageUrl: 'https://picsum.photos/200/300',

      },
      {
        id: 2,
        name: 'jungle tour',
        description: 'bug spray included',
        price: 50,
        imageUrl: 'https://picsum.photos/200/300',
      }],
    });
  });
});

test('POST: should return a response with no error', async () => {
  mock.onPost(`${rootUrl}/api/v1/services`).reply(201, {
    messsage: 'Service has been created',
  });

  await store.dispatch(postService({
    name: serviceA.name,
    description: serviceA.description,
    price: serviceA.price,
    imageUrl: serviceA.image_url,
  })).then((response) => {
    expect(response).toEqual('New Service Posted');
  });
});

test('POST: should return Missing fields message', async () => {
  mock.onPost(`${rootUrl}/api/v1/services`).reply(201, {
    messsage: 'Service has been created',
  });

  await store.dispatch(postService({
    name: serviceA.name,
    description: '',
    price: serviceA.price,
    imageUrl: serviceA.image_url,
  })).then((response) => {
    expect(response).toEqual('There are missing fields');
  });
});
