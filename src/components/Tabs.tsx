import { useState } from "react";
import TabButton from "./TabButton";

function Tabs({ items, defaultActiveKey, onChange }: PropsType) {
	const [selectedTab, setSelectedTab] = useState(defaultActiveKey);

	function handleSelect(key: string) {
		setSelectedTab(key);
		if (typeof onChange === "function") {
			onChange(key);
		}
	}

	let tabContent: React.ReactNode = <p>Please select a topic</p>;
	if (selectedTab) {
		const tabContentOptional = items.find((item) => item.key === selectedTab);
		if (tabContentOptional) {
			tabContent = tabContentOptional.content;
		}
	}

	return (
		<>
			<menu>
				{items.map((item) => (
					<TabButton
						key={item.key}
						isSelected={selectedTab === item.key}
						onSelect={() => handleSelect(item.key)}
					>
						{item.label}
					</TabButton>
				))}
			</menu>
			{tabContent}
		</>
	);
}

interface PropsType {
	items: {
		key: string;
		label: string | React.ReactNode;
		content: string | React.ReactNode;
	}[];
	defaultActiveKey?: string;
	onChange?: (key: string) => void;
}

export default Tabs;
