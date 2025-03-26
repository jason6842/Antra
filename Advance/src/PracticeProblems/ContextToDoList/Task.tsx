import { ChangeEvent, MouseEvent } from "react";
import trashIcon from "./icons8-trash.svg";
import "./styles.css";

interface TaskProps {
    task: string;
    isCompleted: boolean;
    onCheck: (e: ChangeEvent<HTMLInputElement>) => void;
    onDelete: (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function Task({task, isCompleted, onCheck, onDelete}: TaskProps) {
    return (
        <div className="task">
            <label className="task-label">
                <input type="checkbox" className="task-input" checked={isCompleted} onChange={onCheck}/>
                {task}
            </label>

            <button className="delete-btn" onClick={onDelete}>
                <img src={trashIcon} className="trash-icon"/>
            </button>

        </div>
    )
}