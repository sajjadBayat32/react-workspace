import "./App.css";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";

import { CORE_CONCEPTS } from "./data";

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((item) => (
							<CoreConcept
								title={item.title}
								description={item.description}
								imageUrl={item.imageUrl}
							/>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
