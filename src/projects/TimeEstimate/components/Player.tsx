import { useRef, useState } from "react";

function Player() {
	const playerInput = useRef<HTMLInputElement>(null);
	const [playerName, setPlayerName] = useState("");

	function handleClick() {
		const { current } = playerInput;
		if (current) {
			setPlayerName(current.value);
		}
	}

	return (
		<section id="player">
			<h2>Welcome {playerName !== "" ? playerName : "unknown entity"}</h2>
			<p>
				<input type="text" ref={playerInput} />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}

export default Player;
