import { useState } from "react";
import { Project } from "./types/Project";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { Task } from "./types/Task";

function TaskManagement() {
	const [projectsState, setProjectsState] = useState<State>({
		selectedProjectId: undefined,
		projects: [],
	});

	function handleStartWithNewProject() {
		setProjectsState((prev) => ({
			...prev,
			selectedProjectId: null,
		}));
	}

	function handleAddProject(project: Omit<Project, "id" | "tasks">) {
		const newProject: Project = {
			...project,
			id: Math.ceil(Math.random() * 1000),
			tasks: [],
		};
		setProjectsState((prev) => ({
			selectedProjectId: undefined,
			projects: [...prev.projects, newProject],
		}));
	}

	function handleCancelAddingProject() {
		setProjectsState((prev) => ({
			...prev,
			selectedProjectId: undefined,
		}));
	}

	function handleSelectProject(projectId: number) {
		setProjectsState((prev) => ({
			...prev,
			selectedProjectId: projectId,
		}));
	}

	function handleDeleteProject(projectId: number) {
		setProjectsState((prev) => ({
			selectedProjectId: undefined,
			projects: prev.projects.filter((p) => p.id !== projectId),
		}));
	}

	function handleAddTask(projectId: number, task: string) {
		const newTask: Task = {
			id: Math.ceil(Math.random() * 1000),
			title: task,
		};
		setProjectsState((prev) => {
			const UpdatedProjects = prev.projects.map((p) => {
				const newTasks = [];
				if (p.id === projectId) {
					newTasks.push(newTask);
				}
				return {
					...p,
					tasks: [...newTasks, ...p.tasks],
				};
			});
			return {
				...prev,
				projects: UpdatedProjects,
			};
		});
	}

	function handleDeleteTask(id: number) {
		setProjectsState((prev) => {
			return {
				...prev,
				projects: [
					...prev.projects.map((p) => ({
						...p,
						tasks: p.tasks.filter((t) => t.id !== id),
					})),
				],
			};
		});
	}

	let pageContent;
	if (projectsState.selectedProjectId === undefined) {
		pageContent = (
			<NoProjectSelected onStartWithNewProject={handleStartWithNewProject} />
		);
	} else if (projectsState.selectedProjectId === null) {
		pageContent = (
			<NewProject
				onCancelProject={handleCancelAddingProject}
				onAddProject={handleAddProject}
			/>
		);
	} else {
		const selectedProject = projectsState.projects.find(
			(p) => p.id === projectsState.selectedProjectId
		) as Project;
		pageContent = (
			<SelectedProject
				onDelete={handleDeleteProject}
				project={selectedProject}
				onAddTask={handleAddTask}
				onDeleteTask={handleDeleteTask}
			/>
		);
	}

	return (
		<main className="h-screen py-8 flex gap-8">
			<ProjectSidebar
				projects={projectsState.projects}
				selectedProjectId={projectsState.selectedProjectId}
				onStartWithNewProject={handleStartWithNewProject}
				onSelectProject={handleSelectProject}
			/>
			{pageContent}
		</main>
	);
}

interface State {
	selectedProjectId: number | null | undefined;
	projects: Project[];
}

export default TaskManagement;
