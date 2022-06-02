import { useQuery } from "react-query";
import fetcher from "./fetcher";

const useFetch = (url, params, config) => {
  const context = useQuery([url, params], () => fetcher(url, params), {
    enabled: !!url,
    ...config,
  });

  return context;
};

export default useFetch;
