import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? 'https://www.jpark-portfolio.com:8080' : 'http://127.0.0.1:8080';

export const sendContactMessage = message => {
  return axios({
    method: 'post',
    url: `${url}/message`,
    data: message,
  });
};

export const addPostRequest = post => {
  return axios({
    method: 'post',
    url: `${url}/post`,
    data: post,
  });
};

export const getPostRequest = page => {
  return axios({
    method: 'get',
    url: `${url}/post?page=${page}`,
  });
};

export const confirmPasswordRequest = ({ id, password }) => {
  return axios({
    method: 'post',
    url: `${url}/confirmPassword`,
    data: { id, password },
  });
};
