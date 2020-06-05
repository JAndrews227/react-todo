import React, {useState} from 'react';





//initial set up


function Task({task}) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}
        </div>
    );
}


//To-do function for listing task

function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Take a shower",
            completed: false
        },
        {
            title: "Find your nunchucks",
            completed: false
        },
        {
            title: "Practice ninja skills",
            completed: false
        }
    ]);

//New task bar

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };







    return (
        <div className="list-box">
            <div className="heading">Missions:</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                    />

                    
                ))}
            </div>
            <div className="create-task"><CreateTask addTask={addTask} />
            </div>
        </div>
    );
}



//adding a new task


function CreateTask({ addTask }) {
    const [tasks, setTasks] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!addTask) return;

        addTask(tasks);
        setTasks("");
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <input
                type="text"
                className="input"
                tasks={tasks}
                placeholder="Add a new task"
                onChange={e => setTasks(e.target.value)}
            />
        </form>
    );

    };


export default Todo;