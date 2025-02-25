import { createContext, ReactNode, useReducer } from "react";
import { Cart } from "../types/Cart";
import { CartReducer } from "./cart-context.reducer";

export const CartContext = createContext<ICartContext>({
	items: [],
	addItemToCart: () => {},
	updateItemQuantity: () => {},
});

export interface ICartContext {
	items: Cart[];
	addItemToCart: (id: string) => void;
	updateItemQuantity: (id: string, quantity: number) => void;
}

export default function CartContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [cartState, dispatchCart] = useReducer(CartReducer, { items: [] });

	function handleUpdateCartItemQuantity(productId: string, amount: number) {
		dispatchCart({ type: "UPDATE_ITEM_QUANTITY", productId, amount });
	}

	function handleAddItemToCart(id: string) {
		dispatchCart({ type: "ADD_ITEM", productId: id });
	}

	const cartCtx = {
		items: cartState.items,
		addItemToCart: handleAddItemToCart,
		updateItemQuantity: handleUpdateCartItemQuantity,
	};

	return (
		<CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
	);
}
