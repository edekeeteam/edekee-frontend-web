import axios from "axios";

const baseURL = "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api";

const api = axios.create({
  baseURL,
  headers: {
    // responseType: 'json',
    "Content-Type": "application/json",
    portal: "web",
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use();

api.interceptors.response.use();

const request = ({ ...options }) => {
  api.defaults.headers.common.Authorization = `${localStorage.getItem("token")}`;
  const onSuccess = (response) => response;
  const onError = (error) =>
    // optionally catch errors and add additional logging here
    error;

  return api(options).then(onSuccess).catch(onError);
};

export default request;
