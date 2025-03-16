import { useState } from "react";
import Task from "./Task";

const CrudApp = () => {
  type Task = {
    id: number;
    name: string;
    isCompleted: boolean;
  };

  const [todoList, setToDoList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  
  const handleChange = (event: any) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        name: newTask,
        isCompleted: false,
    }
    setToDoList([...todoList, task]);
  }

  const deleteTask = (id: any) => {
    const newToDoList = todoList.filter(task => task.id !== id);
    setToDoList(newToDoList);
  }

  const completeTask = (id: any) => {
    const newToDoList = todoList.map((task) => {
        if (task.id === id) {
            return {...task, isCompleted: !task.isCompleted};
        } else {
            return task;
        }

    });
    setToDoList(newToDoList);
  }

  return (
    <div>
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
            return (
                <Task key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask} />
            )
        })}
      </div>
    </div>
  );
};

export default CrudApp;
