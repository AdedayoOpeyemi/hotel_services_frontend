import axios from 'axios';

const POST_SERVICE = 'POST_SERVICE';
const MISSING_FIELDS = 'MISSING_FIELDS';

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const defaultService = () => ({
  message: 'no Service yet',
});

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
  })
    .then((response) => {
      dispatch({
        type: POST_SERVICE,
        message: response.data.message,
      });
    });

  return 'postService done';
};

const services = (state = [], action) => {
  switch (action.type) {
    case POST_SERVICE:
      return state;
    case MISSING_FIELDS:
      return state;
    default:
      return state;
  }
};

export default services;
export { postService, defaultService };
