// const categories = "https://eked.herokuapp.com/v1/api/category/new";
// const interests = "https://eked.herokuapp.com/v1/api/interests...";

const apiRoutes = {
  getInterests: "/interests",
  getServiceTypes: "/services/types/getAll",
  getCategories: "/category",
  getSubCategoriesByCategory: "/subcategory/category/",
  getColors: "/color",
  getStates: "/states",
  getCities: "/cities",
  uploadProducts: "/product/create",
  uploadProductVideoImagesBy: "/product/upload/",
  getAllVideos: "/video?take=150&page=1",
  getCart: "http://app.edekee.io:3000/v1/api/cart/getCartItems",
  getProfile: "http://app.edekee.io:3000/v1/api/user/findByUsername",
  getOrders: "http://app.edekee.io:3000/v1/api/cart/getOrdersByUserId",
  getComments: "http://app.edekee.io:3000/v1/api/comments",
  // getAllVideos:
  //   "http://app.edekee.io:3000/v1/api/video?take=150&page=1",
  // getCart: "http://app.edekee.io:3000/v1/api/cart/getCartItems",
  // getProfile: "http://app.edekee.io:3000/v1/api/user",
  // getOrders:
  //   "http://app.edekee.io:3000/v1/api/cart/getOrdersByUserId",
  // getComments: "http://app.edekee.io:3000/v1/api/comments",
};

export default apiRoutes;
