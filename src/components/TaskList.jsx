import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../service/api";

function TaskList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {

        try {

            const response = await getTasks();

            setTasks(response.data);

        } catch (error) {

            console.error("Error fetching tasks", error);

        }
    };

    const handleDelete = async (id) => {

        await deleteTask(id);

        fetchTasks();
    };

    

    return (
  <div>

    <h2>Task List</h2>

    {tasks.map(task => (

      <div key={task.id} className="task-item">

        <div className="task-title">
          {task.title}
        </div>

        <div className="task-desc">
          {task.description}
        </div>

        <button onClick={() => handleDelete(task.id)}>
          Delete
        </button>

      </div>

    ))}

  </div>
);
}

export default TaskList;