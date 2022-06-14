// const categories = "https://eked.herokuapp.com/v1/api/category/new";
// const interests = "https://eked.herokuapp.com/v1/api/interests...";

const apiRoutes = {
  getInterests: "/interests",
  getCategories: "/category",
  getColors: "/color",
  getStates: "/states",
  getCities: "/cities",
  getAllVideos: "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/video",
  getCart: "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/getCartItems",
  getProfile: "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/user",
  getOrders:
    "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/getOrdersByUserId",
  getComments: "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/comments",
};

export default apiRoutes;
