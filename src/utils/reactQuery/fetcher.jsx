import apiMethods from "../apiMethods";

const fetcher = async (url, params) => {
  //   const [url, params] = queryKey;
  const res = await apiMethods.get(url, params);
  return res.data;
};
export default fetcher;
