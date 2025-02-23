import { useState } from "react";
import { Project } from "./types/Project";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function TaskManagement() {
  const [projectsState, setProjectsState] = useState<State>({
    selectedProjectId: undefined,
    projects: [],
  });

  console.log(projectsState);

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
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  }

  let pageContent;
  if (projectsState.selectedProjectId === undefined) {
    pageContent = (
      <NoProjectSelected onStartWithNewProject={handleStartWithNewProject} />
    );
  } else if (projectsState.selectedProjectId === null) {
    pageContent = <NewProject onAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen py-8 flex gap-8">
      <ProjectSidebar onStartWithNewProject={handleStartWithNewProject} />
      {pageContent}
    </main>
  );
}

interface State {
  selectedProjectId: number | null | undefined;
  projects: Project[];
}

export default TaskManagement;
