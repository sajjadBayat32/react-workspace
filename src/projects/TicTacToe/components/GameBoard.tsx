export default function GameBoard({ onSelectSquare, board }: ComponentProps) {
	return (
		<ol id="game-board">
			{board.map((row, rowIndex: number) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									disabled={playerSymbol !== null}
									onClick={() => onSelectSquare(rowIndex, colIndex)}
								>
									{playerSymbol && <div>{playerSymbol}</div>}
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
	board: (string | null)[][];
	onSelectSquare: (row: number, col: number) => void;
}
