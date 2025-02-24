import { Task } from "../types/Task";
import NewTask from "./NewTask";

function Tasks({ projectId, tasks, onAddTask, onDeleteTask }: ComponentProps) {
	function handleAddTask(task: string) {
		onAddTask(projectId, task);
	}

	return (
		<section>
			<h2 className="text-2xl font-bold mb-4 text-stone-700">Tasks</h2>
			<NewTask onSubmit={handleAddTask} />

			{tasks.length === 0 ? (
				<p className="text-stone-800 my-4">
					This project does not have any tasks yet
				</p>
			) : (
				<ul className="p-4 mt-8 rounded-md bg-stone-100">
					{tasks.map((task) => (
						<li key={task.id} className="flex justify-between my-4">
							<span>{task.title}</span>
							<button
								className="text-stone-700 hover:text-red-500 cursor-pointer"
								onClick={() => onDeleteTask(task.id)}
							>
								Clear
							</button>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}

interface ComponentProps {
	projectId: number;
	tasks: Task[];
	onAddTask: (projectId: number, task: string) => void;
	onDeleteTask: (id: number) => void;
}

export default Tasks;
