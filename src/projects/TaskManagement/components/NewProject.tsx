import { useRef } from "react";
import Input from "./Input";
import { Project } from "../types/Project";
import Modal from "./Modal";

function NewProject({ onAddProject, onCancelProject }: ComponentsProps) {
	const title = useRef<HTMLInputElement>(null);
	const description = useRef<HTMLTextAreaElement>(null);
	const date = useRef<HTMLInputElement>(null);
	const dialog = useRef<{ open: () => void }>(null);

	function onSaveProject() {
		const titleVal = title.current?.value;
		const descriptionVal = description.current?.value;
		const dateVal = date.current?.value;

		if (
			titleVal?.trim() === "" ||
			descriptionVal?.trim() === "" ||
			dateVal?.trim() === ""
		) {
			dialog.current?.open();
			return;
		}
		onAddProject({
			title: titleVal ?? "",
			description: descriptionVal ?? "",
			createdDate: dateVal ?? "",
		});
	}

	return (
		<>
			<Modal ref={dialog} buttonCaption="Close">
				<h2 className="text-xl font-bold text-stone-500 mb-4">Invalid Input</h2>
				<p className="text-stone-400">
					Oops... Looks like you forget to provide valid value{" "}
				</p>
				<p className="text-stone-400 mb-4">
					Please make sure you provide a valid value for input fields{" "}
				</p>
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button
							onClick={onCancelProject}
							className="text-stone-800 hover:text-stone-950 cursor-pointer"
						>
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
		</>
	);
}

interface ComponentsProps {
	onAddProject: (project: Omit<Project, "id" | "tasks">) => void;
	onCancelProject: () => void;
}

export default NewProject;
