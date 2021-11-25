import axios from 'axios';

const POST_SERVICE = 'POST_SERVICE';
const MISSING_FIELDS = 'MISSING_FIELDS';
const GET_SERVICES = 'GET_SERVICES';
const API_FAILURE = 'API_FAILURE';

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const defaultService = () => ({
  message: 'no Service yet',
});

const initialState = {
  services: [],
  errors: null,
};

const errors = (messages) => ({
  type: API_FAILURE,
  messages,
});

const getServices = () => (dispatch) => axios.get(`${rootUrl}/api/v1/services`)
  .then((response) => {
    response.data.services = response.data.services.map(
      (service) => {
        const camelCased = {
          ...service,
          imageUrl: service.image_url,
        };
        delete camelCased.image_url;
        return camelCased;
      },
    );
    dispatch({
      type: GET_SERVICES,
      payload: response.data.services,
    });
  });

const postService = ({
  name,
  description,
  price,
  imageUrl,
}) => async (dispatch) => {
  if (!(name
        && description
        && price
        && imageUrl)) {
    dispatch({
      type: MISSING_FIELDS,
      message: 'Missing fields',
    });
    return 'There are missing fields';
  }

  try {
    const response = await axios({
      method: 'post',
      url: `${rootUrl}/api/v1/services`,
      data: {
        name, description, price, image_url: imageUrl,
      },
    });
    dispatch({
      type: POST_SERVICE,
      message: response.message,
    });
  } catch (error) {
    dispatch(errors(error));
    throw error;
  }
  return 'New Service Posted';
};

const services = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    case POST_SERVICE:
      return state;
    case MISSING_FIELDS:
      return state;
    case API_FAILURE:
      return {
        ...state,
        errors: action.messages,
      };
    default:
      return state;
  }
};

export default services;
export { postService, defaultService, getServices };
