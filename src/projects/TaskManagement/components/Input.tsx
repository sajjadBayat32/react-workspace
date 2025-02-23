import { RefObject } from "react";

function Input({ ref, label, textarea, ...props }: ComponentsProps) {
  const classes =
    "w-full p-1 border-b-2 py-3 px-3 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4 ">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
}

interface ComponentsProps {
  ref: RefObject<any>;
  label: string;
  textarea: boolean;
  [x: string]: any;
}

export default Input;
