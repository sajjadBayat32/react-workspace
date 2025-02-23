import { Task } from "../types/Task";

function TaskCard({ task, onRemove }: ComponentProps) {
  return (
    <div>
      {task.title}
      <button onClick={() => onRemove(task.id)}>clear</button>
    </div>
  );
}

interface ComponentProps {
  task: Task;
  onRemove: (id: number) => void;
}

export default TaskCard;
