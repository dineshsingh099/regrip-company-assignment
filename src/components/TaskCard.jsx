import { useBoard } from "../context/BoardContext";

const TaskCard = ({ task, column }) => {
	const { moveTask, deleteTask } = useBoard();

	return (
		<div className="bg-gray-200 p-3 mb-3 rounded">
			<p>{task.title}</p>

			<div className="flex gap-2 mt-2 text-sm">
				{column !== "todo" && (
					<button
						onClick={() => moveTask(task.id, column, "todo")}
						className="text-blue-600"
					>
						ToDo
					</button>
				)}

				{column !== "inprogress" && (
					<button
						onClick={() => moveTask(task.id, column, "inprogress")}
						className="text-yellow-600"
					>
						InProgress
					</button>
				)}

				{column !== "done" && (
					<button
						onClick={() => moveTask(task.id, column, "done")}
						className="text-green-600"
					>
						Done
					</button>
				)}

				<button
					onClick={() => deleteTask(task.id, column)}
					className="text-red-600"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TaskCard;
