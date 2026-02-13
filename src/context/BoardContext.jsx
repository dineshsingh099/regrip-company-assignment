import { createContext, useContext, useState } from "react";
import { mockApiCall } from "../utils/mockApi";

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
	const [tasks, setTasks] = useState({
		todo: [],
		inprogress: [],
		done: [],
	});

	const [toast, setToast] = useState(null);

	const showToast = (msg) => {
		setToast(msg);
		setTimeout(() => setToast(null), 3000);
	};

	// ADD TASK
	const addTask = async (title) => {
		const newTask = { id: Date.now(), title };
		const prevState = JSON.parse(JSON.stringify(tasks));

		setTasks({
			...tasks,
			todo: [...tasks.todo, newTask],
		});

		try {
			await mockApiCall();
		} catch {
			showToast("Failed to add task. Rolled back.");
			setTasks(prevState);
		}
	};

	// MOVE TASK
	const moveTask = async (taskId, fromCol, toCol) => {
		const prevState = JSON.parse(JSON.stringify(tasks));

		const task = tasks[fromCol].find((t) => t.id === taskId);
		const updatedFrom = tasks[fromCol].filter((t) => t.id !== taskId);
		const updatedTo = [...tasks[toCol], task];

		setTasks({
			...tasks,
			[fromCol]: updatedFrom,
			[toCol]: updatedTo,
		});

		try {
			await mockApiCall();
		} catch {
			showToast("Failed to move task. Rolled back.");
			setTasks(prevState);
		}
	};

	// DELETE TASK
	const deleteTask = async (taskId, column) => {
		const prevState = JSON.parse(JSON.stringify(tasks));
		const updatedCol = tasks[column].filter((t) => t.id !== taskId);

		setTasks({
			...tasks,
			[column]: updatedCol,
		});

		try {
			await mockApiCall();
		} catch {
			showToast("Failed to delete task. Rolled back.");
			setTasks(prevState);
		}
	};

	return (
		<BoardContext.Provider
			value={{ tasks, addTask, moveTask, deleteTask, toast }}
		>
			{children}
		</BoardContext.Provider>
	);
};

export const useBoard = () => useContext(BoardContext);
