import { useRef } from "react";
import Input from "./Input";
import { Project } from "../types/Project";

function NewProject({ onAddProject }: ComponentsProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const date = useRef<HTMLInputElement>(null);

  function onSaveProject() {
    const titleVal = title.current?.value;
    const descriptionVal = description.current?.value;
    const dateVal = date.current?.value;

    // validation

    onAddProject({
      title: titleVal ?? "",
      description: descriptionVal ?? "",
      createdDate: dateVal ?? "",
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={onSaveProject}
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md cursor-pointer"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" textarea={false} />
        <Input ref={description} label="Description" textarea={true} />
        <Input ref={date} label="Date" textarea={false} type="date" />
      </div>
    </div>
  );
}

interface ComponentsProps {
  onAddProject: (project: Omit<Project, "id" | "tasks">) => void;
}

export default NewProject;
