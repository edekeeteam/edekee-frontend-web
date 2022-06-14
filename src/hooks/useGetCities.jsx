import endPoint from "../routes";
import useFetch from "../utils/reactQuery/useFetch";

function useGetCities() {
  const context = useFetch(endPoint.getCities, undefined, { retry: true });
  // console.log(context);

  return context;
  //   return { ...context, data: context.data?.user };
}

export default useGetCities;
