const Task = ({task, completeTask, deleteTask}: any) => {
    return (
        <div key={task.id} style={{
            backgroundColor:  task.isCompleted ? "green" : "white",
            color: task.isCompleted ? "white" : "black"
        }}> 
            <h1>{task.id}. {task.name}</h1>
            <button onClick={() => completeTask(task.id)}>✔️</button>
            <button onClick={() => deleteTask(task.id)}>✖️</button>
        </div>
    )
}

export default Task;