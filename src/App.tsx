import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import "./App.css";

type MenuButtonType = keyof typeof EXAMPLES;

function App() {
	const [selectedTopic, setSelectedTopic] =
		useState<MenuButtonType>("components");

	function handleSelect(
		selectedButton: "components" | "jsx" | "props" | "state"
	) {
		setSelectedTopic(selectedButton);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((item) => (
							<CoreConcept
								key={item.title}
								title={item.title}
								description={item.description}
								imageUrl={item.imageUrl}
							/>
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handleSelect("components")}>
							Components
						</TabButton>
						<TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
						<TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
						<TabButton onSelect={() => handleSelect("state")}>State</TabButton>
					</menu>
					<div id="tab-content">
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].description}</p>
						<pre>
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
