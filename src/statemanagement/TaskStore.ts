import { create } from "zustand";

export interface Task{
    id: number;
    title: string;
}

interface TaskStore{
    Tasks: Task[];
    Add: ()=> void,
    Delete: (taskid: number) => void
}

const useTaskStore = create<TaskStore>(set=> ({
   Tasks: [],
   Add: ()=> set(TaskList=> ({
    Tasks: [{id: Date.now(), title: `Task ${Date.now()}`},...TaskList.Tasks]
   })),
  Delete: (taskid)=> set(TaskList=> ({Tasks: TaskList.Tasks.filter(t=> t.id!==taskid)}))
}))

export default useTaskStore