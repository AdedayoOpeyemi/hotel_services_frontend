import axios from 'axios';

const POST_RESERVATION = 'POST_RESERVATION';
const GET_RESERVATION = 'GET_RESERVATION';
const LOAD_RESERVATION = 'LOAD_RESERVATION';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';
const MISSING_FIELDS = 'MISSING_FIELDS';

const port = '3000';
const rootUrl = `http://localhost:${port}`;

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

const getReservationData = (userId) => async (dispatch) => {
  dispatch(getReservation);
  const response = await axios({
    method: 'get',
    url: `${rootUrl}/api/v1/users/${userId}/reservations`,
  });
  console.log(response.data.reservations);
  dispatch(loadReservation(response.data.reservations));
};


const postReservationToApi = ({
  userId,
  serviceId,
  date,
  city
}) => async (dispatch) => {

    const response = await axios({
      method: 'post',
      url: `${rootUrl}/api/v1/users/${userId}/services/${serviceId}/reservation`,
      data: { date, city },
    });
    if (response.status === 201) {
      await dispatch(getReservationData(userId));
    }

}

const cancelReservationToApi = (reservationId, userId) => async (dispatch) => {
  const response = await axios({
    method: 'delete',
    url: `${rootUrl}/api/v1/reservations/${reservationId}`,
  });
  if (response.status === 202) {
    dispatch(getReservationData(userId));
  } else {

  }
};

const reservations = (state = initialState, action) => {
  switch (action.type) {
    case POST_RESERVATION:
      return state;
    case GET_RESERVATION:
      return state;
    case LOAD_RESERVATION:
      return action.payload;
    case CANCEL_RESERVATION:
      return state;
    default:
      return state;
  }
};

export default reservations;
export { getReservationData, cancelReservationToApi, postReservationToApi };
