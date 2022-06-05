import axios from "axios";

const baseURL = "https://eked.herokuapp.com/v1/api";

const api = axios.create({
  baseURL,
  headers: {
    // responseType: 'json',
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use();

api.interceptors.response.use();

const request = ({ ...options }) => {
  api.defaults.headers.common.Authorization = `Bearer Token`;
  const onSuccess = (response) => response;
  const onError = (error) =>
    // optionally catch errors and add additional logging here
    error;

  return api(options).then(onSuccess).catch(onError);
};

export default request;
