import { ReactNode, RefObject, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, ref }: ComponentProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
      close: () => {
        dialog.current?.close();
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
}

interface ComponentProps {
  children: ReactNode;
  ref: RefObject<{ open: () => void }>;
}

export default Modal;
