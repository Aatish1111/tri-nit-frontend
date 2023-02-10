import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./Main/index";
import Signup from "./pages/Signup"
import Login from "./pages/Login";

function App() {
	const user = localStorage.getItem("token");
	console.log(user)

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
