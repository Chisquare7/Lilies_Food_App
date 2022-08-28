import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./page/Landingpage";
import Register from "./page/Register";
import Login from "./page/Login";
import Dashboardpage from "./page/Dashboardpage";
import foodcard_one from "./assets/foodcard_one.svg"
import foodcard_two from "./assets/foodcard_two.svg"
import foodcard_three from "./assets/foodcard_three.svg"
import foodcard_four from "./assets/foodcard_four.svg"
import foodcard_five from "./assets/foodcard_five.svg"
import foodcard_six from "./assets/foodcard_six.svg"

function App() {

  const data = [
		{
			food: foodcard_one,
			name: "Stir Fry Pasta",
			text: "The in-house pasta and chicken by chef Moose",
			amount: "N 1,000.00",
			add: "Add to cart",
		},
		{
			food: foodcard_two,
			name: "Stir Fry Pasta",
			text: "The in-house pasta and chicken by chef Moose",
			amount: "N 1,000.00",
			add: "Add to cart",
		},
		{
			food: foodcard_three,
			name: "Stir Fry Pasta",
			text: "The in-house pasta and chicken by chef Moose",
			amount: "N 1,000.00",
			add: "Add to cart",
		},
		{
			food: foodcard_four,
			name: "Stir Fry Pasta",
			text: "The in-house pasta and chicken by chef Moose",
			amount: "N 1,000.00",
			add: "Add to cart",
		},
		{
			food: foodcard_five,
			name: "Stir Fry Pasta",
			text: "The in-house pasta and chicken by chef Moose",
			amount: "N 1,000.00",
			add: "Add to cart",
		},
		{
			food: foodcard_six,
			name: "Stir Fry Pasta",
			text: "The in-house pasta and chicken by chef Moose",
			amount: "N 1,000.00",
			add: "Add to cart",
		},
	];


	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Landingpage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboardpage" element={<Dashboardpage data={data} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
