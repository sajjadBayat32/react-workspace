import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/layout/Header";
import Player from "./components/Player";
import Log from "./components/Log";
import { GameTurn } from "./types";
import "./TicTacToe.scss";
import { WINNING_COMBINATIONS } from "./static/winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard: (string | null)[][] = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

type Symbol = "X" | "O";

function deriveActivePlayer(gameTurns: GameTurn[]) {
	let activePlayer = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		activePlayer = "O";
	}
	return activePlayer;
}

export default function TicTacToe() {
	const [players, setPlayers] = useState<{ [s in Symbol]: string }>({
		X: "Sajjad",
		O: "Zahra",
	});
	const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);

	const gameBoard = [...initialGameBoard.map((nestedArr) => [...nestedArr])];
	for (const turn of gameTurns) {
		const { player, square } = turn;
		const { row, col } = square;
		gameBoard[row][col] = player;
	}

	let winner = null;
	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].col];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol as Symbol];
			break;
		}
	}

	const hasDraw = gameTurns.length === 9 && !winner;
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

	function handleRestart() {
		setGameTurns([]);
	}

	function handlePlayerChangeName(symbol: string, player: string) {
		setPlayers((prevPlayers) => ({
			...prevPlayers,
			[symbol]: player,
		}));
	}

	return (
		<>
			<Header />
			<main>
				<div id="game-container">
					<ol id="players" className="highlight-player">
						{Object.keys(players).map((symbol) => (
							<Player
								initialName={players[symbol as Symbol]}
								symbol={symbol}
								key={symbol}
								isActive={activePlayer === symbol}
								onChangeName={handlePlayerChangeName}
							/>
						))}
					</ol>
					{(winner || hasDraw) && (
						<GameOver winner={winner} onRestart={handleRestart} />
					)}
					<GameBoard
						onSelectSquare={(row: number, col: number) =>
							handleSelectSquare(row, col)
						}
						board={gameBoard}
					/>
				</div>
				<Log turns={gameTurns} />
			</main>
		</>
	);
}
