// const categories = "https://eked.herokuapp.com/v1/api/category/new";
// const interests = "https://eked.herokuapp.com/v1/api/interests";

const apiRoutes = {
  getAllVideos: "http://ec2-3-137-115-168.us-east-2.compute.amazonaws.com:3000/v1/api/video",
  getInterests: "http://ec2-3-137-115-168.us-east-2.compute.amazonaws.com:3000/v1/api/interests",
  getCart:
    "http://ec2-3-137-115-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/getCartItems/:id",
  getCategories:
    "http://ec2-3-137-115-168.us-east-2.compute.amazonaws.com:3000/v1/api/category/new",
};

export default apiRoutes;
