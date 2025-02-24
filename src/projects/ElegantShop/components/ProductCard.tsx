import { useContext } from "react";
import { Product } from "../types/Product";
import { CartContext } from "../store/cart-context";

export default function ProductCard({
  id,
  image,
  title,
  price,
  description,
}: Product) {
  const { addItemToCart } = useContext(CartContext);

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
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
