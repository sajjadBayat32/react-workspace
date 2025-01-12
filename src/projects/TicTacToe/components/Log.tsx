import { GameTurn } from "../types";

export default function Log({ turns }: ComponentProps) {
	return (
		<ol id="log">
			{turns.map((log) => (
				<li key={`${log.square.row}${log.square.col}`}>
					{log.player} player selected {log.square.row},{log.square.col}
				</li>
			))}
		</ol>
	);
}

interface ComponentProps {
	turns: GameTurn[];
}
