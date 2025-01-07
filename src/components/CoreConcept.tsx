function CoreConcept(props: {
	title: string;
	description: string;
	imageUrl: string;
}) {
	return (
		<li>
			<img src={props.imageUrl} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
}

export default CoreConcept;
