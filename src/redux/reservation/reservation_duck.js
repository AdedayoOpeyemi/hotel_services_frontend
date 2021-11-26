import axios from 'axios';
// import { useSelector } from 'react-redux';

const POST_RESERVATION = 'POST_RESERVATION';
const GET_RESERVATION = 'GET_RESERVATION';
const LOAD_RESERVATION = 'LOAD_RESERVATION';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
const MISSING_FIELDS = 'MISSING_FIELDS';

const port = '3000';
const rootUrl = `http://localhost:${port}`;

// const defaultReservation = () => ({
//   message: 'You have no reservations yet',
// });

const initialState = { reservations: [] };

const getReservation = () => ({
  type: GET_RESERVATION,
});

const loadReservation = (payload) => ({
  type: LOAD_RESERVATION,
  payload,
});

const cancelReservation = () => ({
  type: CANCEL_RESERVATION,
});

const getReservationData = (userId = 1) => async (dispatch) => {
  // dispatch(getReservation);
  const response = await axios({
    method: 'get',
    url: `${rootUrl}/api/v1/users/${userId}/reservations`,
  });
  console.log(response.data.reservations);
  dispatch(loadReservation(response.data.reservations));
};

// /api/v1/users/:user_id/services/:service_id/reservation

// const postReservationToApi = (
//   date,
//   city
// ) => async (dispatch) => {
//   if ((date || city) === '') {
//     dispatch({
//       type: MISSING_FIELDS,
//       message: 'Missing fields',
//     });
//     return 'There are missing fields';
//   }

//   axios({
//     method: 'post',
//     url: `${rootUrl}/api/v1/services`,
//     data: {
//       name: serviceName,
//       description: serviceDescription,
//       price: servicePrice,
//       image_url: serviceImage,
//     },
//   }).catch((error) => {
//     console.log('ERROR:', error.message);
//   })
//     .then((response) => {
//       dispatch({
//         type: POST_SERVICE,
//         message: response.data.message,
//       });
//     });

//   return 'postService done';
// };

const postReservationToApi = ({
  userId,
  serviceId,
  date,
  city
}) => async (dispatch) => {

  try {
    const response = await axios({
      method: 'post',
      url: `${rootUrl}/api/v1/users/${userId}/services/${serviceId}/reservation`,
      data: { date, city },
    });
    dispatch({
      type: POST_RESERVATION,
      message: response.message,
    });
    if (response.status === 201) {
      await dispatch(getReservationData(userId));
    }
  } catch (error) {
    dispatch(errors(error));
    throw error;
  }
}

const cancelReservationToApi = (reservationId = 20, userId) => async (dispatch) => {
  const response = await axios({
    method: 'delete',
    url: `${rootUrl}/api/v1/reservations/${reservationId}`,
  });
  if (response.status === 202) {
    dispatch(getReservationData(userId));
  }
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
      return state;
    default:
      return state;
  }
};

export default reservations;
export { getReservationData, cancelReservationToApi, postReservationToApi };
