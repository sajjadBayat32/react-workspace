import { ChangeEvent, useState } from "react";

function NewTask({ onSubmit }: ComponentProps) {
	const [taskText, setTaskText] = useState<string>("");

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setTaskText(event.target.value);
	}

	function handleSubmit() {
		onSubmit(taskText);
		setTaskText("");
	}

	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				value={taskText}
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"
				onChange={handleChange}
			/>
			<button
				onClick={handleSubmit}
				className="text-stone-700 hover:text-stone-950 cursor-pointer"
			>
				Add Task
			</button>
		</div>
	);
}

interface ComponentProps {
	onSubmit: (task: string) => void;
}

export default NewTask;
