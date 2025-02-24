import { useRef } from "react";

import CartModal from "./CartModal";
import { Cart } from "../types/Cart";

export default function Header({
	cart,
	onUpdateCartItemQuantity,
}: ComponentProps) {
	const modal = useRef<{ open: () => void }>();

	const cartQuantity = cart.items.length;

	function handleOpenCartClick() {
		modal.current?.open();
	}

	let modalActions = <button>Close</button>;

	if (cartQuantity > 0) {
		modalActions = (
			<>
				<button>Close</button>
				<button>Checkout</button>
			</>
		);
	}

	return (
		<>
			<CartModal
				ref={modal}
				cartItems={cart.items}
				onUpdateCartItemQuantity={onUpdateCartItemQuantity}
				title="Your Cart"
				actions={modalActions}
			/>
			<header id="main-header">
				<div id="main-title">
					<img src="logo.png" alt="Elegant model" />
					<h1>Elegant Context</h1>
				</div>
				<p>
					<button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
				</p>
			</header>
		</>
	);
}

interface ComponentProps {
	cart: { items: Cart[] };
	onUpdateCartItemQuantity: (productId: string, amount: number) => void;
}
