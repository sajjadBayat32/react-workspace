import { GameTurn } from "../types";

const initialGameBoard: (string | null)[][] = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }: ComponentProps) {
	const gameBoard = initialGameBoard;

	for (const turn of turns) {
		const { player, square } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={() => onSelectSquare(rowIndex, colIndex)}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}

interface ComponentProps {
	turns: GameTurn[];
	onSelectSquare: (row: number, col: number) => void;
}
