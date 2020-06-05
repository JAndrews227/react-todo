import React, {useState, useEffect} from 'react';





//initial set up


function Task({task, index, completeTask, deleteTask}) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

            
            <button style={{ background: "red" }} onClick={() => deleteTask(index)}>Abort!</button>
            
            
            <button onClick={() => completeTask(index)}>Mission Complete</button>

           
        </div>
    );
}


//To-do function for listing task

function Todo() {
   
    const[tasksRemaining, setTasksRemaining] = useState(0)

    const [tasks, setTasks] = useState([
        {
            title: "Eat Wheaties",
            completed: false
        },
        {
            title: "Find your nunchucks",
            completed: false
        },
        {
            title: "Practice ninja skills",
            completed: false
        },
        {
            title: "Be a ninja",
            completed: false
        }
    ]);

//New task, complete, delete, task count

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length)
    });

    

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };


    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const deleteTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1)
        setTasks(newTasks);
    };



    return (
        <div className="list-box">
            <div className="heading">Missions:({tasksRemaining})</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
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