import TaskCard from "./TaskCard";

const Column = ({ title, columnKey, tasks }) => {
	return (
		<div className="bg-white p-4 rounded shadow min-h-[400px]">
			<h2 className="font-bold text-lg mb-4">{title}</h2>

			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} column={columnKey} />
			))}
		</div>
	);
};

export default Column;
