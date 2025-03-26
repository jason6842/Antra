import React, { createContext, useContext, useReducer } from "react";

const ACTIONS = {
    GET_TODOS: 'get-todos',
    ADD_TODO: 'add-todo',
    UPDATE_TODO: 'update-todo',
    DELETE_TODO: 'delete-todo'
} as const; // need to make this a const so that the TODOS can become a literal string for TypeScript

interface Todo {
    id: string;
    task: string;
    isCompleted: boolean;
}

interface TasksContextType {
    tasks: Todo[];
    dispatch: React.Dispatch<any>;
}
const TasksContext = createContext<TasksContextType | null>(null);

export function TasksProvider({ children }: any) {
    const [tasks, dispatch] = useReducer(tasksReducer, []);


    return (
        <TasksContext.Provider value={{tasks, dispatch}}>
            {children}
        </TasksContext.Provider>
    )
}

export function useTasks() {
    const context = useContext(TasksContext);
    if (!context) throw new Error("useContext must use TasksContext");
    return context;
}

type Action = 
    | {type: typeof ACTIONS.GET_TODOS; payload: Todo[]}
    | {type: typeof ACTIONS.ADD_TODO; payload: Todo}
    | {type: typeof ACTIONS.UPDATE_TODO; payload: string}
    | {type: typeof ACTIONS.DELETE_TODO; payload: string}


function tasksReducer(state: Todo[], action: Action): Todo[] {
    switch (action.type){
        case ACTIONS.GET_TODOS: 
            return action.payload;
        case ACTIONS.ADD_TODO:
            return [...state, action.payload];
        case ACTIONS.UPDATE_TODO: {
            return state.map((todo: Todo) => {
                return todo.id === action.payload 
                ? {
                    ...todo,
                    isCompleted: !todo.isCompleted
                } : todo;
            })
        }
        case ACTIONS.DELETE_TODO:
            return state.filter((todo: Todo) => todo.id !== action.payload);
        default:
            return state;
    }
}