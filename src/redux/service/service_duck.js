import axios from 'axios';

const POST_SERVICE = 'POST_SERVICE';
const MISSING_FIELDS = 'MISSING_FIELDS';
const GET_SERVICES = 'GET_SERVICES';

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const defaultService = () => ({
  message: 'no Service yet',
});

const getServices = () => async (dispatch) => {
  axios.get(`${rootUrl}/api/v1/services`)
    .catch((error) => {
      console.log(error.message);
    }).then((response) => {
      console.log(response);

      dispatch({
        type: GET_SERVICES,
        payload: response.data.services,
      });
    });
};

const postService = (
  serviceName,
  serviceDescription,
  servicePrice,
  serviceImage,
) => async (dispatch) => {
  if ((serviceName
        || serviceDescription
        || servicePrice
        || serviceImage) === '') {
    dispatch({
      type: MISSING_FIELDS,
      message: 'Missing fields',
    });
    return 'There are missing fields';
  }

  axios({
    method: 'post',
    url: `${rootUrl}/api/v1/services`,
    data: {
      name: serviceName,
      description: serviceDescription,
      price: servicePrice,
      image_url: serviceImage,
    },
  }).catch((error) => {
    console.log('ERROR:', error.message);
    return error;
  })
    .then((response) => {
      dispatch({
        type: POST_SERVICE,
        message: response.message,
      });
    });

  return 'postService done';
};

const services = (state = [], action) => {
  switch (action.type) {
    case GET_SERVICES:
      console.log(action);
      console.log('ACTION:', GET_SERVICES);
      return action.payload;
    case POST_SERVICE:
      return state;
    case MISSING_FIELDS:
      return state;
    default:
      return state;
  }
};

export default services;
export { postService, defaultService, getServices };
