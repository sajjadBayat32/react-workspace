import { ReactNode, RefObject, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { Cart } from "../types/Cart";
import CartBox from "./CartBox";

function CartModal({
	cartItems,
	onUpdateCartItemQuantity,
	title,
	actions,
	ref,
}: ComponentProps) {
	const dialog = useRef<HTMLDialogElement>(null);

	useImperativeHandle(ref, () => {
		return {
			open: () => {
				dialog.current?.showModal();
			},
		};
	});

	return createPortal(
		<dialog id="modal" ref={dialog}>
			<h2>{title}</h2>
			<CartBox
				items={cartItems}
				onUpdateItemQuantity={onUpdateCartItemQuantity}
			/>
			<form method="dialog" id="modal-actions">
				{actions}
			</form>
		</dialog>,
		document.getElementById("modal-root")!
	);
}

interface ComponentProps {
	title: string;
	actions: ReactNode;
	cartItems: Cart[];
	ref: RefObject<{ open: () => void }>;
	onUpdateCartItemQuantity: (productId: string, amount: number) => void;
}

export default CartModal;
