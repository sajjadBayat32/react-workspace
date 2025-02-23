import Button from "./Button";

function NoProjectSelected({ onStartWithNewProject }: ComponentsProps) {
  return (
    <div className="mt-24 text-center w-2/3">
      <h2 className="text-xl font-bold text-stone-500 mb-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <p className="">
        <Button onClick={onStartWithNewProject}>Create new project</Button>
      </p>
    </div>
  );
}

interface ComponentsProps {
  onStartWithNewProject: () => void;
}

export default NoProjectSelected;
