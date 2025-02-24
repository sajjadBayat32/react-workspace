import { Project } from "../types/Project";
import Button from "./Button";

function ProjectSidebar({ projects, onStartWithNewProject }: ComponentsProps) {
	return (
		<aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-e-xl">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
				Your Projects
			</h2>
			<div>
				<Button onClick={onStartWithNewProject}>+ Add Project</Button>
			</div>
			<ul className="mt-8">
				{projects.map((p) => (
					<li key={p.id} className="">
						<button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
							{p.title}
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
}

interface ComponentsProps {
	projects: Project[];
	onStartWithNewProject: () => void;
}

export default ProjectSidebar;
