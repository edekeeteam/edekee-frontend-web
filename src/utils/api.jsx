import axios from "axios";
// import { useAuthContext } from "../context/AuthContext";
// import Cookies from "js-cookie";

// const { token } = useAuthContext();

const api = {
  get: (url, params) =>
    axios.get(url, {
      headers: {
        Authorization: localStorage.getItem("token"),
        portal: "web",
      },
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
