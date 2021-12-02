import axios from 'axios';

const POST_SERVICE = 'POST_SERVICE';
const MISSING_FIELDS = 'MISSING_FIELDS';
const GET_SERVICES = 'GET_SERVICES';
const API_FAILURE = 'API_FAILURE';
const CANCEL_SERVICE = 'CANCEL_SERVICE';
const CURRENT_SERVICE = 'CURRENT_SERVICE';

const rootUrl = 'https://hotel-services-2021.herokuapp.com/';

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

const cancelService = () => ({
  type: CANCEL_SERVICE,
});

const cancelServiceToApi = (serviceId) => async (dispatch) => {
  dispatch(cancelService());
  const response = await axios({
    method: 'delete',
    url: `${rootUrl}/api/v1/services/${serviceId}`,
  });
  if (response.status === 202) {
    dispatch(getServices());
  }
};

const currentService = (serviceId) => ({
  type: CURRENT_SERVICE,
  serviceId,
});

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
    case CURRENT_SERVICE:
      return {
        ...state,
        currentService: action.serviceId,
      };
    case CANCEL_SERVICE:
      return state;
    default:
      return state;
  }
};

export default services;
export {
  postService, defaultService, getServices, cancelServiceToApi, currentService,
};
