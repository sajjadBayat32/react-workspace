import { Task } from "./Task";

export interface Project {
  id: number;
  title: string;
  description: string;
  createdDate: string;
  tasks: Task[];
}
