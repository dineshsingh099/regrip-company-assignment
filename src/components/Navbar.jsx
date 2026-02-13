import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const logout = () => {
		localStorage.removeItem("authUserData");
		navigate("/");
	};

	return (
		<div className="bg-blue-600 text-white p-4 flex justify-between items-center">
			<h1 className="font-bold text-lg">Kanban Board</h1>

			{location.pathname === "/dashboard" && (
				<button
					onClick={logout}
					className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-100"
				>
					Logout
				</button>
			)}
		</div>
	);
};

export default Navbar;
