import { useEffect, useState } from "react";
import {
  getTasks,
  deleteTask,
  updateTask
} from "../service/api";

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

  const handleToggle = async (task) => {

    const updatedTask = {
      ...task,
      completed: !task.completed
    };

    await updateTask(task.id, updatedTask);

    fetchTasks();
  };

  return (

    <div>

      <h2>Task List</h2>

      {tasks.map(task => (

        <div
          key={task.id}
          className="task-item"
        >

          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggle(task)}
          />

          <div
            className="task-title"
            style={{
              textDecoration:
                task.completed
                  ? "line-through"
                  : "none"
            }}
          >
            {task.title}
          </div>

          <div className="task-desc">
            {task.description}
          </div>

          <button
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );
}

export default TaskList;