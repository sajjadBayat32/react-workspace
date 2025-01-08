import { EXAMPLES } from "../data";
import Section from "./section";
import Tabs from "./Tabs";

type MenuButtonType = keyof typeof EXAMPLES;

function Examples() {
	const tabs = Object.keys(EXAMPLES).map((key) => {
		const tab = EXAMPLES[key as MenuButtonType];
		return {
			key: key,
			label: tab.title as string,
			content: (
				<div id="tab-content">
					<h3>{tab.title}</h3>
					<p>{tab.description}</p>
					<pre>
						<code>{tab.code}</code>
					</pre>
				</div>
			),
		};
	});

	return (
		<Section title="Examples" id="examples">
			<Tabs items={tabs} />
		</Section>
	);
}

export default Examples;
