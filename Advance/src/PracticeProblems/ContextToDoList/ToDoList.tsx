import { useEffect, useState } from "react";
import Task from "./Task";
import "./styles.css";
import { useTasks } from "./TasksProvider";


const TODO_API = "http://localhost:3000/todos";

interface Todo {
    id: string;
    task: string;
    isCompleted: boolean;
}

export default function ContextToDoList() {
    // const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");
    const { tasks, dispatch } = useTasks();

    useEffect(() => {
        // IIFE
        // similar to initializing todos with the data from todos api
        (async () => {
            const res = await fetch(TODO_API);
            const data = await res.json();
            // setTodos(data);
            dispatch({type: "get-todos", payload: data});
            console.log("API  Connected");
        })();
    }, [dispatch]);

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
        // setTodos([...todos, todo]);
        dispatch({type: "add-todo", payload: todo});
        setInput("");
    }

    // PUT
    const updateTodo = async (id: string) => {
        // const todo = todos.filter((todo) => todo.id === id); // returns an array
        const task = tasks.find((task) => task.id === id);
        // Typescript needs this
        if (!task) {
            return;
        }
        const updatedTask = {
            ...task,
            isCompleted: !task.isCompleted
        }

        await fetch(`${TODO_API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTask),
        })

        // setTodos(tasks.map((task) => {
        //     return task.id === id 
        //     ? {
        //         ...task,
        //         isCompleted: !task.isCompleted
        //     } : task
        // }));
        dispatch({type: "update-todo", payload: id})

    }

    // DELETE
    const deleteTodoById = async (id: string) => {
        await fetch(`${TODO_API}/${id}`, {
            method: "DELETE",
        });

        // setTodos(todos.filter(todo => todo.id !== id));
        dispatch({type: "delete-todo", payload: id})
    };


    return (
        <div className="todo-list">
            <h1>ToDo List</h1>
            <label className="add-todo">
                <input className="todo-input" value={input} onChange={e => setInput(e.target.value)}></input>
                <button className="add-btn" onClick={addTodo}>Add</button>
            </label>
            <div className="todo-items">
                {tasks.map((todo) => {
                    const { id, task, isCompleted } = todo;
                    return (
                        <>
                            <Task key={id} task={task} isCompleted={isCompleted} onCheck={() => updateTodo(id)} onDelete={() => deleteTodoById(id)}/>
                            {/* <Task key={id} /> */}
                        </>
                    )
                })}
            </div>
            
        </div>
    )
}