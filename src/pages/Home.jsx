import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
	const [username, setUserName] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const STORAGE_KEY = "authUserData";

	useEffect(() => {
		const user = localStorage.getItem(STORAGE_KEY);
		if (user) navigate("/dashboard");
	}, [navigate]);

	const handleLogin = () => {
		if (!username.trim()) {
			setError("Username required!");
			return;
		}

		localStorage.setItem(STORAGE_KEY, username);
		navigate("/dashboard");
	};

	return (
		<>
			<Navbar />
			<div className="flex justify-center items-center h-screen bg-gray-100">
				<div className="bg-white p-8 rounded shadow w-96">
					<h1 className="text-2xl font-bold mb-4 text-center">Login User</h1>

					<input
						value={username}
						onChange={(e) => setUserName(e.target.value)}
						className="w-full border p-2 rounded mb-3"
						placeholder="Enter username"
					/>

					{error && <p className="text-red-500 text-sm mb-3">{error}</p>}

					<button
						onClick={handleLogin}
						className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
					>
						Login
					</button>
				</div>
			</div>
		</>
	);
};

export default Home;
