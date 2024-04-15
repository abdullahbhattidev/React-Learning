import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface CounterState{
    counter: number;
    increment: ()=> void;
    decrement: ()=> void; 
}

const useCounter = create<CounterState>(set=>({
    counter:0,
    increment:()=> set(store=> ({counter: store.counter+1})),
    decrement: ()=> set({counter:0})
}))
if(process.env.NODE_ENV === "development")
    mountStoreDevtool("counter store", useCounter)

export default useCounter