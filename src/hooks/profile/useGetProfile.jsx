import apiRoutes from "../../routes";
import useFetch from "../../utils/reactQuery/useFetch";
// import pathToUrl from "../../utils/router";

function useGetProfile(id) {
  // remove id and add to parent (pass through props)
  //   const id = localStorage.getItem("userId");
  const context = useFetch(`${apiRoutes.getProfile}/${id}`, undefined, { retry: true });
  console.log(context);

  return context;
  //   return { ...context, data: context.data?.user };
}

export default useGetProfile;
