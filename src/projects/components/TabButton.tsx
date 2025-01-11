function TabButton({
	children,
	isSelected,
	onSelect,
}: {
	children: React.ReactNode;
	isSelected: boolean;
	onSelect: () => void;
}) {
	return (
		<li>
			<button className={isSelected ? "active" : ""} onClick={onSelect}>
				{children}
			</button>
		</li>
	);
}

export default TabButton;
