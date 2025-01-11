import reactImg from "../../../../assets/react-core-concepts.png";
import "./Header.scss";

const Titles = ["Fundamentals", "Core", "Better to know"];
function getRandomTitle() {
	const rnd = Math.floor(Math.random() * 3);
	return Titles[rnd];
}

function Header() {
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{getRandomTitle()} React concepts you will need for almost any app you
				are going to build!
			</p>
		</header>
	);
}

export default Header;
