import { ReactNode, RefObject, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import CartBox from "./CartBox";

function CartModal({ title, actions, ref }: ComponentProps) {
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
      <CartBox />
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
  ref: RefObject<{ open: () => void }>;
}

export default CartModal;
