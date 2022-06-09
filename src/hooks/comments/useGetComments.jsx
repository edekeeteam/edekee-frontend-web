import apiRoutes from "../../routes";
import useFetch from "../../utils/reactQuery/useFetch";

function useGetComments(id) {
  const context = useFetch(`${apiRoutes.getComments}/${id}/video`, undefined, { retry: false });
  // console.log(context);

  return context;
  //   return { ...context, data: context.data?.user };
}

export default useGetComments;
