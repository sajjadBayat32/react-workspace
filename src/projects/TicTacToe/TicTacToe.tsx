import Header from "./components/layout/Header";
import Player from "./components/Player";
import "./TicTacToe.scss";

export default function TicTacToe() {
	return (
		<>
			<Header />
			<main>
				<div id="game-container">
					<ol id="players">
						<Player initialName="Player 1" symbol="X" />
						<Player initialName="Player 2" symbol="O" />
					</ol>
				</div>
			</main>
		</>
	);
}
