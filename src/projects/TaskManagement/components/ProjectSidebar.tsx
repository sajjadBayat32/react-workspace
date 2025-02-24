import { Project } from "../types/Project";
import Button from "./Button";

function ProjectSidebar({
	projects,
	selectedProjectId,
	onStartWithNewProject,
	onSelectProject,
}: ComponentsProps) {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-e-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
				Your Projects
			</h2>
			<div>
				<Button onClick={onStartWithNewProject}>+ Add Project</Button>
			</div>
			<ul className="mt-8">
				{projects.map((p) => {
					let cssClasses =
						"w-full text-left cursor-pointer px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
					if (p.id === selectedProjectId) {
						cssClasses += " bg-stone-800 text-stone-200";
					} else {
						cssClasses += " text-stone-400";
					}
					return (
						<li key={p.id}>
							<button
								onClick={() => onSelectProject(p.id)}
								className={cssClasses}
							>
								{p.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}

interface ComponentsProps {
	projects: Project[];
	selectedProjectId: number | null | undefined;
	onStartWithNewProject: () => void;
	onSelectProject: (id: number) => void;
}

export default ProjectSidebar;
