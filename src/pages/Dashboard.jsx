import { useState } from "react";
import { useBoard } from "../context/BoardContext";
import Column from "../components/Column";
import Toast from "../components/Toast";
import Navbar from "../components/Navbar";

const Dashboard = () => {
	const { tasks, addTask, toast } = useBoard();
	const [input, setInput] = useState("");

	const handleAdd = () => {
		if (!input.trim()) return;
		addTask(input);
		setInput("");
	};

	return (
		<>
			<Navbar />

			<div className="p-6 bg-gray-100 min-h-screen">
				{toast && <Toast message={toast} />}

				<div className="flex gap-4 mb-6">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="border p-2 rounded w-80"
						placeholder="Add new task"
					/>
					<button
						onClick={handleAdd}
						className="bg-blue-600 text-white px-4 py-2 rounded"
					>
						Add
					</button>
				</div>

				<div className="grid grid-cols-3 gap-6">
					<Column title="To Do" columnKey="todo" tasks={tasks.todo} />
					<Column
						title="In Progress"
						columnKey="inprogress"
						tasks={tasks.inprogress}
					/>
					<Column title="Done" columnKey="done" tasks={tasks.done} />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
