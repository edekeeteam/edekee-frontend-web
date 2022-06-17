import endPoint from "../../routes";
import useFetch from "../../utils/reactQuery/useFetch";

function useGetVideos() {
  const context = useFetch(endPoint.getAllVideos, undefined, { retry: false });
  // console.log(context);

  return context;
  //   return { ...context, data: context.data?.user };
}

export default useGetVideos;
