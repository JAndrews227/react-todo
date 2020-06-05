import React, {useState} from 'react';


export default function CreateTask({ addTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!addTask) return;

        addTask(task);
        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <input
                type="text"
                className="input"
                task={task}
                placeholder="Add a new task"
                onChange={e => setTask(e.target.value)}
            />
        </form>
    );

    };




