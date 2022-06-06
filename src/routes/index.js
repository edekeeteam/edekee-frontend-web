// const categories = "https://eked.herokuapp.com/v1/api/category/new";
// const interests = "https://eked.herokuapp.com/v1/api/interests...";

const apiRoutes = {
  getAllVideos: "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/video",
  getInterests: "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/interests",
  getCart: "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/getCartItems",
  getCategories:
    "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/category/new",
  getProfile: "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/user",
  getOrders:
    "http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/getOrdersByUserId",
};

export default apiRoutes;
