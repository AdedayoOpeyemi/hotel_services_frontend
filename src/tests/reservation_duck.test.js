/**
 * @jest-environment jsdom
 */

import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import reservations, { getReservationData } from '../redux/reservation/reservation_duck';
import { testStore } from '../redux/configurateStore';

const mock = new MockAdapter(axios);

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const defaultState = [];

let store = testStore(defaultState);

beforeEach(() => {
  mock.reset();
  store = testStore(defaultState);
});

test('DEFAULT: it should return the default state', () => {
  expect(reservations(undefined, { type: 'NON_EXISTANT' })).toStrictEqual(defaultState);
});

test('GET: it should return reservation data', async () => {
  const userId = '1';

  const reservationData = {
    user_id: 1,
    reservations: [
      {
        reservation_id: 1,
        date: {
          day: 14,
          month: 4,
          year: 2021,
        },
        service_name: 'Pool time',
        service_description: 'Bring some of your friends',
        image_url: 'https://picsum.photos/200/300',
        city: 'Los Angeles',
      },
    ],
  };
  mock.onGet(`${rootUrl}/api/v1/users/${userId}/reservations`).reply(200, reservationData);

  await store.dispatch(getReservationData(userId)).then(() => {
    expect(store.getState()).toBe(reservationData);
  });
});
