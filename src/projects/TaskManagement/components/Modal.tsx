import { ReactNode, RefObject, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

function Modal({ ref, children, buttonCaption }: ComponentsProps) {
	const dialog = useRef<HTMLDialogElement>(null);

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current?.showModal();
			},
		};
	});

	return createPortal(
		<dialog
			ref={dialog}
			className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
		>
			{children}
			<form method="dialog" className="mt-4 text-right">
				<Button>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById("modal-root")!
	);
}

interface ComponentsProps {
	ref: RefObject<{ open: () => void }>;
	children: ReactNode;
	buttonCaption: string;
}

export default Modal;
