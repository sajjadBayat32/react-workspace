import { Project } from "../types/Project";

function SelectedProject({ project, onDelete }: ComponentsProps) {
	const formattedDate = new Date(project.createdDate).toLocaleDateString(
		"en-US",
		{
			year: "numeric",
			month: "short",
			day: "numeric",
		}
	);

	return (
		<div className="w-[35rem] mt-16">
			<header className="pb-4 mb-4 border-b-2 border-stone-300">
				<div className="flex items-center justify-between">
					<h1 className="text-3xl font-bold text-stone-600 mb-2">
						{project.title}
					</h1>
					<button
						onClick={() => onDelete(project.id)}
						className="text-stone-600 hover:text-stone-950 cursor-pointer"
					>
						Delete
					</button>
				</div>
				<p className="mb-4 text-stone-400">{formattedDate}</p>
				<p className="text-stone-600 whitespace-pre-wrap">
					{project.description}
				</p>
			</header>
			Tasks
		</div>
	);
}

interface ComponentsProps {
	project: Project;
	onDelete: (id: number) => void;
}

export default SelectedProject;
