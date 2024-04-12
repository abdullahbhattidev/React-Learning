import { Dispatch } from "react";
import { Action, Task } from "./taskReducer";
import React from "react";

export interface taskContextType{
    tasks: Task[],
    dispatch: Dispatch<Action>
}

const taskContext = React.createContext<taskContextType>({} as taskContextType)

export default taskContext