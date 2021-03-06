import { BrowserRouter, Route, Routes } from "react-router-dom";

import FullPageLayout from "./layouts/FullPage/FullPageLayout";
import NavBarLayout from "./layouts/Navbar/NavBarLayout";
import Interests from "./pages/interests";
import Splash from "./pages";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Cart from "./pages/cart";
import Orders from "./pages/orders";
import Shop from "./pages/shop";
import Category from "./pages/category";
import ProductImages from "./pages/productImages/productImages";

// TODO : Add a 404 page

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullPageLayout />}>
          <Route index element={<Splash />} />
          <Route path="interests" element={<Interests />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="/" element={<NavBarLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="profile/:userId/shop/:shopId" element={<Shop />} />
          <Route path="profile/:userId/shop/:shopId/category/:categoryId" element={<Category />} />
          <Route
            path="profile/:userId/shop/:shopId/category/:categoryId/product/:productId"
            element={<ProductImages />}
          />
          {/* <Route path="profile/:userId" element={<Profile />}>
            <Route path="shop/:shopId" element={<Shop />}>
              <Route path="category/:categoryId" element={<Category />} />
            </Route>
          </Route> */}

          <Route path="cart/:userId" element={<Cart />} />
          <Route path="orders/:userId" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
