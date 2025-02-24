import { createContext } from "react";
import { Cart } from "../types/Cart";

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
