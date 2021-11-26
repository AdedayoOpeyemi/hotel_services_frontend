import axios from 'axios';
import { useSelector } from 'react-redux';

const POST_RESERVATION = 'POST_RESERVATION';
const GET_RESERVATION = 'GET_RESERVATION';
const LOAD_RESERVATION = 'LOAD_RESERVATION';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const port = '3000';
const rootUrl = `http://localhost:${port}`;

// const defaultReservation = () => ({
//   message: 'You have no reservations yet',
// });

const initialState = { reservations: [] };

// const current_user_id = localStorage.getItem('current_user');
//   axios.get(`${rootUrl}/api/v1/users/{current_user_id}/reservations`)
//     .then((response) => {
//       const { data } = response;

const getReservation = () => ({
  type: GET_RESERVATION,
});

const loadReservation = (payload) => ({
  type: LOAD_RESERVATION,
  payload,
});

const cancelReservation = (reservationId = 20) => async (dispatch) {
  const response = await axios({
    method: 'delete',
    url: `api/v1/reservations/${reservationId}`
  });
  console.log(response.message);
};

// const cancelReservationToAPI = () => async (dispatch) => {
//   dispatch(getReservation);
//   const currentUserId = useSelector((state) => state.user);

//   axios({
//     method: 'post',
//     url: `${rootUrl}/api/v1/users/${currentUserId}/reservations`,
//   }).catch((error) => {
//     console.log('ERROR:', error.message);
//   })
//     .then((response) => {
//       dispatch(loadReservation(response.data.reservations));
//     });
// };

const getReservationData = (userId = 1) => async (dispatch) => {
  // dispatch(getReservation);
  const response = await axios({
    method: 'get',
    url: `${rootUrl}/api/v1/users/${userId}/reservations`,
  });
  console.log(response.data.reservations);
  dispatch(loadReservation(response.data.reservations));

};

const reservations = (state = initialState, action) => {
  switch (action.type) {
    case POST_RESERVATION:
      return state;
    case GET_RESERVATION:
      return state;
    case LOAD_RESERVATION:
      console.log(action.payload);
      return action.payload;
    case CANCEL_RESERVATION:
      return action.payload;
    default:
      return state;
  }
};

export default reservations;
export { getReservationData };
