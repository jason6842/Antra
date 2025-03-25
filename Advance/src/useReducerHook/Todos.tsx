import React, { useReducer, useState } from 'react'
import Todo from './Todo';

export const ACTIONS = {
    ADD_TODO: "add-todo",
    TOGGLE_TODO: "toggle-todo",
    DELETE_TODO: "delete-todo",
}

type TodoType = {
    id: number;
    name: string;
    complete: boolean;
}

type State = TodoType[]; // state is an array of Todos

type Action = 
    | { type: typeof ACTIONS.ADD_TODO; payload: {name: string} } 
    | { type: typeof ACTIONS.TOGGLE_TODO; payload: {id: number } }
    | { type: typeof ACTIONS.DELETE_TODO; payload: {id: number} };

function reducer(todos: State, action: Action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } 
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id)
        default:
            return todos;
    }
}

function newTodo(name: string) {
    return { 
        id: Date.now(),
        name: name,
        complete: false
    }
}


export default function TodoReducerApp() {

    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name} });
        setName('');
    }
    
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </form>
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
            })}
        </div>
    )
}
