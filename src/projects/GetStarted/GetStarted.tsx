import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import "./GetStarted.scss";

export default function GetStarted() {
	return (
		<>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}
