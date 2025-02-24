import { Product } from "../types/Product";

export default function ProductCard({
	id,
	image,
	title,
	price,
	description,
	onAddToCart,
}: ComponentProps) {
	return (
		<article className="product">
			<img src={image} alt={title} />
			<div className="product-content">
				<div>
					<h3>{title}</h3>
					<p className="product-price">${price}</p>
					<p>{description}</p>
				</div>
				<p className="product-actions">
					<button onClick={() => onAddToCart(id)}>Add to Cart</button>
				</p>
			</div>
		</article>
	);
}

type ComponentProps = {
	onAddToCart: (id: string) => void;
} & Product;
