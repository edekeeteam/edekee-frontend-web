import endPoint from "../../routes";
import useFetch from "../../utils/reactQuery/useFetch";
// import pathToUrl from "../../utils/router";

function useGetOrders(id) {
  //   const id = localStorage.getItem("userId");
  const context = useFetch(`${endPoint.getOrders}/${id}`, undefined, { retry: true });
  console.log(context);

  return context;
  //   return { ...context, data: context.data?.user };
}

export default useGetOrders;
