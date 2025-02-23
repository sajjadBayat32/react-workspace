import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }: ComponentProps) {
	const timeout = useRef<number | null>(null);
	const dialog = useRef<{ open: () => void }>(null);
	const targetInMilli = targetTime * 1000;
	const [timeRemaining, setTimeRemaining] = useState<number>(targetInMilli);

	const timerIsActive = timeRemaining > 0 && timeRemaining < targetInMilli;

	if (timeRemaining <= 0) {
		if (timeout.current) clearInterval(timeout.current);
		dialog.current?.open();
	}

	function handleStart() {
		timeout.current = setInterval(() => {
			setTimeRemaining((prev) => prev - 10);
		}, 10);
	}

	function handleStop() {
		if (timeout.current) clearInterval(timeout.current);
		dialog.current?.open();
	}

	function handleReset() {
		setTimeRemaining(targetInMilli);
	}

	return (
		<>
			<ResultModal
				ref={dialog}
				onClose={handleReset}
				targetTime={targetTime}
				timeRemaining={timeRemaining}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 && "s"}
				</p>
				<p>
					{timerIsActive ? (
						<button onClick={handleStop}>Stop Challenge</button>
					) : (
						<button onClick={handleStart}>Start Challenge</button>
					)}
				</p>
				<p>{timerIsActive ? "Time is running..." : "Timer inactive"}</p>
			</section>
		</>
	);
}

interface ComponentProps {
	title: string;
	targetTime: number;
}

export default TimerChallenge;
