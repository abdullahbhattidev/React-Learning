import React, { Dispatch } from "react";
import { Action, Task } from "../taskReducer";

export interface taskContextType{
    tasks: Task[],
    taskdispatch: Dispatch<Action>
}

const taskContext = React.createContext<taskContextType>({} as taskContextType)

export default taskContext