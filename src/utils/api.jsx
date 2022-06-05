import axios from "axios";
// import request from './axiosIntance'
// request({url,...params}),
const api = {
  get: (url, params) =>
    axios.get(url, {
      //   headers: {
      //     token: Cookies.get("token"),
      //   },
      ...params,
    }),
  post: (url, data) =>
    axios.post(url, data, {
      //   headers: {
      //     token: Cookies.get("token"),
      //   },
    }),
  patch: (url, data) =>
    axios.patch(url, data, {
      //   headers: {
      //     token: Cookies.get("token"),
      //   },
    }),
  delete: (url) =>
    axios.delete(url, {
      //   headers: {
      //     token: Cookies.get("token"),
      //   },
    }),
};

export default api;
