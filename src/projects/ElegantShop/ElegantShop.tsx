import "./ElegantShop.scss";
import Header from "./components/Header";
import Shop from "./components/Shop";
import CartContextProvider from "./store/cart-context";

function ElegantShop() {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default ElegantShop;
