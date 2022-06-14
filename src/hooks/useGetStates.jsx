import endPoint from "../routes";
import useFetch from "../utils/reactQuery/useFetch";

function useGetStates() {
  const context = useFetch(endPoint.getStates, undefined, { retry: false });
  // console.log(context);

  return context;
  //   return { ...context, data: context.data?.user };
}

export default useGetStates;
