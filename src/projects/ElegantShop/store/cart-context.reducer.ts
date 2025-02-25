import { Reducer } from "react";
import { Cart } from "../types/Cart";
import { Product } from "../types/Product";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartReducer: Reducer<ICartState, ICartAction> = (
	state,
	action
) => {
	switch (action.type) {
		case "ADD_ITEM": {
			const updatedItems = [...state.items];
			const product = DUMMY_PRODUCTS.find(
				(p) => p.id === action.productId
			) as Product;
			const existingCartIndex = state.items.findIndex(
				(p) => p.id === product.id
			);
			if (existingCartIndex > -1) {
				const updatedItem: Cart = {
					...state.items[existingCartIndex],
					quantity: state.items[existingCartIndex].quantity + 1,
				};
				updatedItems[existingCartIndex] = updatedItem;
				return {
					items: updatedItems,
				};
			} else {
				return {
					items: [
						...state.items,
						{
							id: product.id,
							name: product.title,
							price: product.price,
							quantity: 1,
						},
					],
				};
			}
		}
		case "UPDATE_ITEM_QUANTITY": {
			const updatedItems = [...state.items];
			const updatedItemIndex = updatedItems.findIndex(
				(item) => item.id === action.productId
			);
			const updatedItem = {
				...updatedItems[updatedItemIndex],
			};
			updatedItem.quantity += action.amount;
			if (updatedItem.quantity <= 0) {
				updatedItems.splice(updatedItemIndex, 1);
			} else {
				updatedItems[updatedItemIndex] = updatedItem;
			}
			return {
				items: updatedItems,
			};
		}
		default:
			throw new Error("Action is not valid");
	}
};

interface ICartState {
	items: Cart[];
}

type ICartAction =
	| ({ type: "ADD_ITEM" } & { productId: string })
	| ({ type: "UPDATE_ITEM_QUANTITY" } & { productId: string; amount: number });
