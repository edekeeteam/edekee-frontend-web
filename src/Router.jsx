import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FullPageLayout, NavBarLayout } from "./Layouts";
import Interests from "./pages/interests";
import Splash from "./pages";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Cart from "./pages/cart";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullPageLayout />}>
          <Route index element={<Splash />} />
          <Route path="/interests" element={<Interests />} />
        </Route>
        <Route path="/" element={<NavBarLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
