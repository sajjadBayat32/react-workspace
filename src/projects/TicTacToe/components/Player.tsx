import { ChangeEvent, useState } from "react";

export default function Player({
	initialName,
	symbol,
	isActive,
}: ComponentProps) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState<boolean>(false);

	function handleEditClick() {
		setIsEditing((editing) => !editing);
	}

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setPlayerName(event.target.value);
	}

	let playerNameDom = <span className="player-name">{playerName}</span>;
	if (isEditing) {
		playerNameDom = (
			<input
				type="text"
				required
				value={playerName}
				onChange={handleInputChange}
			/>
		);
	}

	return (
		<li className={isActive ? "active" : undefined}>
			<span className="player">
				{playerNameDom}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}

interface ComponentProps {
	initialName: string;
	symbol: string;
	isActive: boolean;
}
