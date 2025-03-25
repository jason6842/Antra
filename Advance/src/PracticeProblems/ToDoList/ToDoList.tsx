import { useEffect, useState } from "react";
import Task from "./Task";
import "./styles.css";


const TODO_API = "http://localhost:3000/todos";

interface Todo {
    id: string;
    task: string;
    isCompleted: boolean;
}

export default function ToDoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        // IIFE
        // similar to initializing todos with the data from todos api
        (async () => {
            const res = await fetch(TODO_API);
            const data = await res.json();
            setTodos(data);
            console.log("API  Connected");
        })();
    }, []);

    // POST
    const addTodo = async () => {
        const newTodo = {
            task: input,
            isCompleted: false,
        }

        const res = await fetch(TODO_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        });
        const todo = await res.json();
        console.log("TODO ADDED: ", todo);
        setTodos([...todos, todo]);
        setInput("");
    }

    // PUT
    const updateTodo = async (id: string) => {
        // const todo = todos.filter((todo) => todo.id === id); // returns an array
        const todo = todos.find((todo) => todo.id === id);
        // Typescript needs this
        if (!todo) {
            return;
        }
        const updatedTodo = {
            ...todo,
            isCompleted: !todo.isCompleted
        }

        await fetch(`${TODO_API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTodo),
        })

        setTodos(todos.map((todo) => {
            return todo.id === id 
            ? {
                ...todo,
                isCompleted: !todo.isCompleted
            } : todo
        }));


    }

    // DELETE
    const deleteTodoById = async (id: string) => {
        await fetch(`${TODO_API}/${id}`, {
            method: "DELETE",
        });

        setTodos(todos.filter(todo => todo.id !== id));
    };


    return (
        <div className="todo-list">
            <h1>ToDo List</h1>
            <label className="add-todo">
                <input className="todo-input" value={input} onChange={e => setInput(e.target.value)}></input>
                <button className="add-btn" onClick={addTodo}>Add</button>
            </label>
            <div className="todo-items">
                {todos.map((todo) => {
                    const { id, task, isCompleted } = todo;
                    return (
                        <Task key={id} task={task} isCompleted={isCompleted} onCheck={() => updateTodo(id)} onDelete={() => deleteTodoById(id)}/>
                    )
                })}
            </div>
            
        </div>
    )
}