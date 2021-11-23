import axios from 'axios';

const POST_SERVICE = 'POST_SERVICE';

const port = '3000';
const rootUrl = `http://localhost:${port}`;

const postService = () => async (dispatch) => {
  axios({
    method: 'post',
    url: `${rootUrl}/api/v1/services`,
    data: {
      name: 'pool time',
      description: 'bring your own towel',
      price: 1000,
      image_url: 'https://picsum.photos/200/300',
    },
  }).catch((error) => {
    console.log('ERROR:', error.message);
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
    case POST_SERVICE:
      return action.message;
    default:
      return state;
  }
};

export default services;
export { postService };
