import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarLayout from "./components/Layout/NavbarLayout/NavbarLayout";
import Home from "./pages/home";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <NavbarLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" />
      </Routes>
    </Router>
  );
}

export default App;
