import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }: ComponentProps) {
	const timeout = useRef<number | null>(null);
	const dialog = useRef<HTMLDialogElement>(null);
	const [timerStarted, setTimerStarted] = useState(false);
	const [timerExpired, setTimerExpired] = useState(false);

	function handleClick() {
		setTimerStarted(true);
		timeout.current = setTimeout(() => {
			setTimerExpired(true);
			dialog.current?.showModal();
		}, targetTime * 1000);
	}

	function handleStop() {
		if (timeout.current) clearInterval(timeout.current);
		setTimerStarted(false);
		setTimerExpired(false);
	}

	return (
		<>
			<ResultModal dialogRef={dialog} result="lost" targetTime={targetTime} />
			<section className="challenge">
				<h2>{title}</h2>
				{timerExpired && <p>You Lost!</p>}
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 && "s"}
				</p>
				<p>
					{timerStarted ? (
						<button onClick={handleStop}>Stop Challenge</button>
					) : (
						<button onClick={handleClick}>Start Challenge</button>
					)}
				</p>
				<p className="">
					{timerStarted ? "Time is running..." : "Timer inactive"}
				</p>
			</section>
		</>
	);
}

interface ComponentProps {
	title: string;
	targetTime: number;
}

export default TimerChallenge;
