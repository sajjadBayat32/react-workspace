import { RefObject, useImperativeHandle, useRef } from "react";

function ResultModal({ ref, result, targetTime }: ComponentProps) {
	const dialog = useRef<HTMLDialogElement>(null);

	useImperativeHandle(ref, () => {
		return {
			open: () => dialog.current?.showModal(),
		};
	});

	return (
		<dialog ref={dialog} className="result-modal">
			<h2>You {result}</h2>
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				You stopped the timer with <strong>X seconds left.</strong>
			</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>
	);
}

interface ComponentProps {
	ref: RefObject<{ open: () => void }>;
	result: string;
	targetTime: number;
}

export default ResultModal;
