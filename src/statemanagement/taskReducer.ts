import { all } from "axios";

export interface Task{
    id: number;
    title: string;
}

interface Action{
    type: "ADD" | "DELETE"
    taskid?: number
}

const taskReducer = (state: Task[], action: Action): Task[]=> {
    if(action.type === "ADD") return [{id: Date.now(), title: `Task ${Date.now()}`},...state];
    if(action.type === "DELETE") return state.filter(task=> task.id!== action.taskid)
    return [...state]
}
export default taskReducer