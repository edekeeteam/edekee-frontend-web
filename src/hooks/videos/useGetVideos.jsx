import apiRoutes from "../../routes";
import useFetch from "../../utils/reactQuery/useFetch";

function useGetVideos() {
  const context = useFetch(apiRoutes.getAllVideos, undefined, { retry: true });
  // console.log(context);

  return context;
  //   return { ...context, data: context.data?.user };
}

export default useGetVideos;
