function Section({
	id,
	title,
	children,
}: {
	id: string;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section id={id}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

export default Section;
