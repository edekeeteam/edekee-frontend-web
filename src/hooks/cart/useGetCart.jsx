import endPoint from "../../routes";
import useFetch from "../../utils/reactQuery/useFetch";
// import pathToUrl from "../../utils/router";

function useGetCart(id) {
  const context = useFetch(`${endPoint.getCart}/${id}`, undefined, { retry: true });
  console.log(context);

  return context;
  //   return { ...context, data: context.data?.user };
}

export default useGetCart;
