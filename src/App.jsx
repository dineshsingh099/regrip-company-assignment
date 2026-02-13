import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BoardProvider } from "./context/BoardContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<BoardProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		</BoardProvider>
	);
}

export default App;
