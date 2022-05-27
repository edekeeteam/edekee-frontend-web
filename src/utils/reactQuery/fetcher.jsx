import api from "../api";

const fetcher = async (url, params) => {
  //   const [url, params] = queryKey;
  const res = await api.get(url, params);
  return res.data;
};
export default fetcher;
