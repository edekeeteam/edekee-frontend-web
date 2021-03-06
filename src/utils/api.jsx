import axios from "axios";
// import { useAuthContext } from "../context/AuthContext";
// import Cookies from "js-cookie";

// const { token } = useAuthContext();

const api = {
  get: (url) =>
    axios.get(url, {
      headers: {
        Authorization: localStorage.getItem("token"),
        portal: "web",
        "Access-Control-Allow-Origin": "*",
      },
    }),
  post: (url, data) =>
    axios.post(url, data, {
      //   headers: {
      //     token: Cookies.get("token"),...........
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
