import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/layout/Header";
import Player from "./components/Player";
import Log from "./components/Log";
import { GameTurn } from "./types";
import "./TicTacToe.scss";

function deriveActivePlayer(gameTurns: GameTurn[]) {
	let activePlayer = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		activePlayer = "O";
	}
	return activePlayer;
}

export default function TicTacToe() {
	const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
	const activePlayer = deriveActivePlayer(gameTurns);

	function handleSelectSquare(rowIndex: number, colIndex: number) {
		setGameTurns((prevBoard) => {
			const activePlayer = deriveActivePlayer(prevBoard);
			const newGameBoard: GameTurn[] = [
				{ player: activePlayer, square: { row: rowIndex, col: colIndex } },
				...prevBoard,
			];
			return newGameBoard;
		});
	}

	return (
		<>
			<Header />
			<main>
				<div id="game-container">
					<ol id="players" className="highlight-player">
						<Player
							initialName="Sajjad"
							symbol="X"
							isActive={activePlayer === "X"}
						/>
						<Player
							initialName="Zahra"
							symbol="O"
							isActive={activePlayer === "O"}
						/>
					</ol>
					<GameBoard
						onSelectSquare={(row: number, col: number) =>
							handleSelectSquare(row, col)
						}
						turns={gameTurns}
					/>
				</div>
				<Log turns={gameTurns} />
			</main>
		</>
	);
}
