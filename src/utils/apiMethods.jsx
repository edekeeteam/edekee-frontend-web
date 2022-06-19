// import axios from "axios";
import request from "./axiosInstance";

const apiMethods = {
  get: (url, params) => request({ url, ...params }),
  post: (url, params) => request({ url, data: params, method: "post" }),
  // patch: (url, params) => request({ url, ...params }),
  // delete: (url, params) => request({ url, ...params }),
};

export default apiMethods;
