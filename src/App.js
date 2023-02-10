import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
	const user = localStorage.getItem("token");
	console.log(user)

	return (
		<Routes>
			{/* {user && <Route path="/" exact element={<HomePage />} />} */}
			<Route path="/" exact element={<HomePage />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
