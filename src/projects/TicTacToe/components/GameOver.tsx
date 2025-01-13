export default function GameOver({ winner }: ComponentProps) {
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{winner ? <p>{winner} won!</p> : <p>It's a draw</p>}
			<p>
				<button>Rematch!</button>
			</p>
		</div>
	);
}

interface ComponentProps {
	winner: string | null;
}
