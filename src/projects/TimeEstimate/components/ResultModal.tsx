import { RefObject, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

function ResultModal({
  ref,
  targetTime,
  timeRemaining,
  onClose,
}: ComponentProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const userLost = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open: () => dialog.current?.showModal(),
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onClose}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")!
  );
}

interface ComponentProps {
  ref: RefObject<{ open: () => void }>;
  targetTime: number;
  timeRemaining: number;
  onClose: () => void;
}

export default ResultModal;
