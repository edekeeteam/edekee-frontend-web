import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarLayout from "./components/Layout/NavbarLayout/NavbarLayout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Interests from "./pages/interests";

function App() {
	return (
		<Router>
			<NavbarLayout/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/profile" element={<Profile/>}/>
				<Route path="/cart"/>
				<Route path="/interest" element={<Interests/>}/>
			</Routes>
		</Router>
	);
}

export default App;
