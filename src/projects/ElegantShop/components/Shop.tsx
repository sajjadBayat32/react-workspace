import { DUMMY_PRODUCTS } from "../dummy-products.ts";
import ProductCard from "./ProductCard.tsx";

export default function Shop() {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
