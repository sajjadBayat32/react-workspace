import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./section";

function CoreConcepts() {
	return (
		<Section title="Core Concepts" id="core-concepts">
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
		</Section>
	);
}

export default CoreConcepts;
